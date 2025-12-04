import {
  window,
  CancellationToken,
  workspace,
  CompletionItemProvider,
  ProviderResult,
  TextDocument,
  Position,
  CompletionItem,
  CompletionList,
  CompletionItemKind,
  SnippetString,
  Range,
  Selection
} from "vscode";
import { App } from "../app";
import ATTRS from "../vue-attributes";
import TAGS from "../vue-tags";
import COMMON_PROPS from "../common/commonProps";
import * as prettyHTML from "pretty";
import * as fs from "fs";
import * as path from "path";
import * as LRU from "lru-cache";

// ============================================================================
// 类型定义和接口
// ============================================================================

/**
 * 标签对象接口
 */
export interface TagObject {
  text: string;
  offset: number;
}

/**
 * 文件信息接口
 */
interface FileInfo {
  name: string;
  path: string;
}

/**
 * 属性项接口
 */
interface AttributeItem {
  description?: string;
  type?: string;
  global?: boolean;
  framework?: string;
  options?: string[];
}

/**
 * 标签定义接口
 */
interface TagDefinition {
  description?: string;
  subtags?: string[];
  defaults?: string[];
  framework?: string;
  attributes?: string[];
}

/**
 * 建议构建参数接口
 */
interface SuggestionBuildParams {
  attr: string;
  tag: string | null;
  bind: boolean;
  method: boolean;
}

/**
 * 配置接口
 */
interface VueDaisyConfig {
  "indent-size"?: number;
  quotes?: "single" | "double";
  alias?: Record<string, string>;
  componentPath?: string[];
  componentDirRgex?: string;
  tagNameWay?: "kebabCase" | "camelCase" | "CamelCase";
  componentPrefix?: {
    alias: string;
    path: string;
  };
}

// ============================================================================
// 缓存和常量定义
// ============================================================================

/**
 * LRU缓存实例，用于缓存文件解析结果和组件信息
 */
const cache = new LRU<string, any>({ max: 50, maxAge: 10000 });

/**
 * 预编译的正则表达式，提升性能
 */
const REGEX_PATTERNS = {
  TAG: /<([\w-]+)\s+/g,
  ATTR: /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/,
  TAG_START: /<([\w-]*)$/,
  CLOSE_TAG_CHECK: /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/,
  POSITION_CHECK: /^\s*[^<]+\s*>[^<\/>]*$/,
  QUOTE_CHECK: /"[^'"]*(\s*)[^'"]*$/,
  SCRIPT_TAG: /^\s*<script.*>\s*$/,
  IMPORT_LINE: /^import.*/,
  BRACE_CHECK: /[^{]{/gi,
  HTML_TAG_LINE: /<\w.*$/,
  CAMEL_CASE: /(-[a-z])/g,
  PROP_MATCH: /\s[\w-]*:/gi,
  EMIT_MATCH: /\$emit\(\s?['"](\w*)/g,
  PATH_REPLACE: /\\/gi,
  KEBAB_CASE: /[A-Z]+(?![a-z])|[A-Z]/g
} as const;

// ============================================================================
// 主要的完成项提供器类
// ============================================================================

/**
 * Vue 元素完成项提供器
 * 为 Vue.js 开发提供智能代码补全功能
 */
export default class ElementCompletionItemProvider implements CompletionItemProvider {
  private _document!: TextDocument;
  private _position!: Position;
  private size: number | undefined;
  private quotes: string | undefined;

  // ========================================================================
  // 核心解析方法
  // ========================================================================

  /**
   * 获取当前位置前的预览标签
   * @returns 标签对象或undefined
   */
  getPreTag(): TagObject | undefined {
    const cacheKey = `preTag_${this._document.uri.toString()}_${this._position.line}_${
      this._position.character
    }`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    let line = this._position.line;
    let tag: TagObject | string;
    let txt = this.getTextBeforePosition(this._position);

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text;
      }

      tag = this.matchTag(REGEX_PATTERNS.TAG, txt, line);

      if (tag === "break") {
        cache.set(cacheKey, undefined);
        return undefined;
      }

      if (tag) {
        const result = tag as TagObject;
        cache.set(cacheKey, result);
        return result;
      }
      line--;
    }

    cache.set(cacheKey, undefined);
    return undefined;
  }

  /**
   * 获取当前位置的预览属性
   * @returns 属性名或undefined
   */
  getPreAttr(): string | undefined {
    try {
      const txt = this.getTextBeforePosition(this._position).replace(
        REGEX_PATTERNS.QUOTE_CHECK,
        ""
      );
      const end = this._position.character;
      const start = txt.lastIndexOf(" ", end) + 1;
      const parsedTxt = this._document.getText(
        new Range(this._position.line, start, this._position.line, end)
      );

      return this.matchAttr(REGEX_PATTERNS.ATTR, parsedTxt);
    } catch (error) {
      console.error("Error in getPreAttr:", error);
      return undefined;
    }
  }

  /**
   * 匹配属性名
   * @param reg 正则表达式
   * @param txt 文本内容
   * @returns 匹配的属性名
   */
  private matchAttr(reg: RegExp, txt: string): string {
    const match = reg.exec(txt);
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1];
    }
    return "";
  }

  /**
   * 匹配标签名
   * @param reg 正则表达式
   * @param txt 文本内容
   * @param line 行号
   * @returns 标签对象或'break'字符串
   */
  private matchTag(reg: RegExp, txt: string, line: number): TagObject | string {
    const arr: TagObject[] = [];

    if (
      REGEX_PATTERNS.CLOSE_TAG_CHECK.test(txt) ||
      (this._position.line === line &&
        (REGEX_PATTERNS.POSITION_CHECK.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))
    ) {
      return "break";
    }

    let match: RegExpExecArray | null;
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index))
      });
    }

    return arr.pop() || "";
  }

  /**
   * 获取指定位置之前的文本
   * @param position 位置对象
   * @returns 文本内容
   */
  private getTextBeforePosition(position: Position): string {
    const start = new Position(position.line, 0);
    const range = new Range(start, position);
    return this._document.getText(range);
  }

  // ========================================================================
  // 建议生成方法
  // ========================================================================

  /**
   * 获取标签建议列表
   * @returns 完成项数组
   */
  getTagSuggestion(): CompletionItem[] {
    const suggestions: CompletionItem[] = [];
    let id = 100;

    // 添加Vue组件提示
    const cacheKey = "vueFiles";
    let vueFiles = cache.get(cacheKey);
    if (!vueFiles) {
      vueFiles = App.traverse(".vue", "");
      cache.set(cacheKey, vueFiles);
    }

    App.vueFiles = vueFiles;

    // 生成Vue组件建议
    vueFiles.forEach((vf: FileInfo, i: number) => {
      suggestions.push({
        label: vf.name,
        sortText: `1000${i}${vf.name}`,
        insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
        kind: CompletionItemKind.Class,
        detail: "vue component",
        documentation: `internal component: ${vf.path}`
      });
    });

    // 生成UI库组件建议
    for (const tag in TAGS) {
      suggestions.push(this.buildTagSuggestion(tag, TAGS[tag], id));
      id++;
    }

    return suggestions;
  }

  /**
   * 获取属性值建议列表
   * @param tag 标签名
   * @param attr 属性名
   * @returns 完成项数组
   */
  getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
    const suggestions: CompletionItem[] = [];
    const values = this.getAttrValues(tag, attr);

    values.forEach((value: string) => {
      suggestions.push({
        label: value,
        kind: CompletionItemKind.Value
      });
    });

    return suggestions;
  }

  /**
   * 获取属性建议列表
   * @param tag 标签名
   * @returns 完成项数组
   */
  getAttrSuggestion(tag: string): CompletionItem[] {
    const suggestions: CompletionItem[] = [];
    const tagAttrs = this.getTagAttrs(tag);
    const preText = this.getTextBeforePosition(this._position);
    let prefix =
      preText
        .replace(/['"]([^'"]*)['"]$/, "")
        .split(/\s|\(+/)
        .pop() || "";

    // 检查属性类型
    const method = prefix[0] === "@";
    const bind = prefix[0] === ":";

    prefix = prefix.replace(/[:@]/, "");

    if (/[^@:a-zA-z\s]/.test(prefix[0])) {
      return suggestions;
    }

    // 生成标签特定属性建议
    tagAttrs.forEach((attr: string) => {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem && (!prefix.trim() || attr.startsWith(prefix))) {
        const sug = this.buildAttrSuggestion({ attr, tag, bind, method }, attrItem);
        if (sug) {
          suggestions.push(sug);
        }
      }
    });

    // 生成全局属性建议
    for (const attr in ATTRS) {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem?.global && (!prefix.trim() || this.firstCharsEqual(attr, prefix))) {
        const sug = this.buildAttrSuggestion({ attr, tag: null, bind, method }, attrItem);
        if (sug) {
          suggestions.push(sug);
        }
      }
    }

    // 添加通用属性建议
    suggestions.push(...this.getCommonPropsSuggestion());
    return suggestions;
  }

  /**
   * 构建标签建议项
   * @param tag 标签名
   * @param tagVal 标签定义
   * @param id 排序ID
   * @returns 完成项
   */
  private buildTagSuggestion(tag: string, tagVal: TagDefinition, id: number): CompletionItem {
    const snippets: string[] = [];
    let index = 0;

    const build = (tag: string, { subtags, defaults }: TagDefinition, snippets: string[]): void => {
      // 构建属性
      let attrs = "";
      if (defaults) {
        defaults.forEach((item: string, i: number) => {
          attrs += ` ${item}=${this.quotes}$${index + i + 1}${this.quotes}`;
        });
      }

      // 开始标签
      snippets.push(`${index > 0 ? "<" : ""}${tag}${attrs}>`);

      if (defaults) {
        index += defaults.length;
      }
      index++;

      // 处理子标签
      if (subtags) {
        subtags.forEach((item: string) => {
          const subTagDef = TAGS[item];
          if (subTagDef) {
            build(item, subTagDef, snippets);
          }
        });
        snippets.push(`</${tag}>`);
      } else {
        snippets.push(`$${index}</${tag}>`);
      }
    };

    build(tag, tagVal, snippets);

    return {
      label: tag,
      sortText: `0${id}${tag}`,
      insertText: new SnippetString(
        prettyHTML("<" + snippets.join(""), { indent_size: this.size }).substr(1)
      ),
      kind: CompletionItemKind.Snippet,
      detail: "vue component",
      documentation: tagVal.description
    };
  }

  /**
   * 构建属性建议项
   * @param params 建议参数
   * @param attrItem 属性定义
   * @returns 完成项或undefined
   */
  private buildAttrSuggestion(
    params: SuggestionBuildParams,
    attrItem: AttributeItem
  ): CompletionItem | undefined {
    const { attr, tag, bind, method } = params;
    const { description, type, global, framework } = attrItem;

    if ((method && type === "method") || (bind && type !== "method") || (!method && !bind)) {
      let detail = "";

      // 设置详情信息
      if (tag && TAGS[tag]?.framework) {
        detail += TAGS[tag].framework;
      }

      if (global) {
        detail += `${framework}(global)`;
      }

      return {
        label: attr,
        insertText:
          type === "flag"
            ? `${attr} `
            : new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
        kind: type === "method" ? CompletionItemKind.Method : CompletionItemKind.Field,
        detail,
        documentation: `daisy----${description}`
      };
    }

    return undefined;
  }

  /**
   * 获取通用属性建议列表
   * @returns 完成项数组
   */
  private getCommonPropsSuggestion(): CompletionItem[] {
    return Object.entries<{ description: string }>(COMMON_PROPS).map(([attr, value]) => ({
      label: attr,
      insertText: new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
      kind: CompletionItemKind.Variable,
      detail: "CommonProps",
      documentation: `daisy----${value.description}`
    }));
  }

  // ========================================================================
  // 工具方法
  // ========================================================================

  /**
   * 获取属性的可选值
   * @param tag 标签名
   * @param attr 属性名
   * @returns 值数组
   */
  private getAttrValues(tag: string | undefined, attr: string | undefined): string[] {
    const attrItem = this.getAttrItem(tag, attr);
    let options = attrItem?.options;

    if (!options && attrItem) {
      if (attrItem.type === "boolean") {
        options = ["true", "false"];
      } else if (attrItem.type === "icon") {
        options = ATTRS["icons"] || [];
      } else if (attrItem.type === "shortcut-icon") {
        options = [];
        const icons = ATTRS["icons"] || [];
        icons.forEach((icon: string) => {
          options!.push(icon.replace(/^el-icon-/, ""));
        });
      }
    }

    return options || [];
  }

  /**
   * 获取标签的属性列表
   * @param tag 标签名
   * @returns 属性数组
   */
  private getTagAttrs(tag: string): string[] {
    return TAGS[tag]?.attributes || [];
  }

  /**
   * 获取属性项定义
   * @param tag 标签名
   * @param attr 属性名
   * @returns 属性项或undefined
   */
  private getAttrItem(
    tag: string | undefined,
    attr: string | undefined
  ): AttributeItem | undefined {
    if (!attr) {
      return undefined;
    }

    return ATTRS[`${tag}/${attr}`] || ATTRS[attr] || COMMON_PROPS[attr];
  }

  /**
   * 检查是否为属性值开始位置
   * @param tag 标签对象
   * @param attr 属性名
   * @returns 布尔值
   */
  private isAttrValueStart(tag: TagObject | string | undefined, attr: string | undefined): boolean {
    return !!(tag && attr);
  }

  /**
   * 检查是否为属性开始位置
   * @param tag 标签对象
   * @returns 布尔值
   */
  private isAttrStart(tag: TagObject | undefined): boolean {
    return !!tag;
  }

  /**
   * 检查是否为标签开始位置
   * @returns 布尔值
   */
  private isTagStart(): boolean {
    const txt = this.getTextBeforePosition(this._position);
    return REGEX_PATTERNS.TAG_START.test(txt);
  }

  /**
   * 检查是否为关闭标签
   * @returns 布尔值
   */
  private isCloseTag(): boolean {
    const txt = this._document
      .getText(new Range(new Position(this._position.line, 0), this._position))
      .trim();

    if (!txt.endsWith(">") || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith("/>")) {
      return false;
    }

    const txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
    if (Array.isArray(txtArr) && txtArr.length > 0) {
      const txtStr = txtArr[txtArr.length - 1];
      return /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr);
    }

    return false;
  }

  /**
   * 检查两个字符串的首字符是否相等（忽略大小写）
   * @param str1 字符串1
   * @param str2 字符串2
   * @returns 布尔值
   */
  private firstCharsEqual(str1: string, str2: string): boolean {
    if (str2 && str1) {
      return str1[0].toLowerCase() === str2[0].toLowerCase();
    }
    return false;
  }

  /**
   * 检查是否不在template标签内
   * @returns 布尔值
   */
  private notInTemplate(): boolean {
    let line = this._position.line;
    while (line >= 0) {
      if (REGEX_PATTERNS.SCRIPT_TAG.test(this._document.lineAt(line).text)) {
        return true;
      }
      line--;
    }
    return false;
  }

  /**
   * 自动补全关闭标签
   */
  private getCloseTagSuggestion(): void {
    try {
      const txtInfo = this._document.lineAt(this._position.line);
      const txtArr = txtInfo.text.match(
        /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim
      );
      let tag = "div";

      if (txtArr) {
        tag = txtArr[txtArr.length - 1].replace(
          /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim,
          "$1"
        );
      }

      const exclude = ["br", "img", "input", "hr", "meta", "link"];
      if (exclude.indexOf(tag) === -1) {
        const editor = window.activeTextEditor;
        if (editor) {
          editor.edit(editBuilder => {
            editBuilder.insert(this._position, `</${tag}>`);
          });
          const newPosition = editor.selection.active.translate(0, 0);
          editor.selection = new Selection(newPosition, newPosition);
        }
      }
    } catch (error) {
      console.error("Error in getCloseTagSuggestion:", error);
    }
  }

  /**
   * 检查是否是大括号开始
   * @returns 布尔值
   */
  private isBrace(): boolean {
    const startPosition = new Position(this._position.line, this._position.character - 2);
    return REGEX_PATTERNS.BRACE_CHECK.test(
      this._document.getText(new Range(startPosition, this._position))
    );
  }

  /**
   * 大括号自动补全
   */
  private braceSuggestion(): void {
    try {
      const txt = this.getTextBeforePosition(this._position).trim();
      const lineTxt = this._document.lineAt(this._position.line).text.trim();

      if (REGEX_PATTERNS.HTML_TAG_LINE.test(txt) && lineTxt !== txt + "}") {
        const editor = window.activeTextEditor;
        if (editor) {
          editor.edit(editBuilder => {
            editBuilder.insert(this._position, "}");
          });
          const newPosition = editor.selection.active.translate(0, 0);
          editor.selection = new Selection(newPosition, newPosition);
        }
      }
    } catch (error) {
      console.error("Error in braceSuggestion:", error);
    }
  }

  /**
   * 检查是否是导入语句
   * @returns 布尔值
   */
  private isImport(): boolean {
    const lineTxt = this._document.lineAt(this._position.line).text.trim();
    return REGEX_PATTERNS.IMPORT_LINE.test(lineTxt);
  }

  /**
   * 获取导入建议
   * @returns 完成项数组
   */
  private importSuggestion(): CompletionItem[] {
    let search = this._document.lineAt(this._position.line).text.trim();
    search = search.replace(/^import/, "").trim();
    const suggestions: CompletionItem[] = [];

    if (search) {
      const vueFiles = App.traverse("", search);
      vueFiles.forEach((vf: FileInfo) => {
        const filePath = vf.path.replace(REGEX_PATTERNS.PATH_REPLACE, "/");
        const camelName = vf.name
          .replace(REGEX_PATTERNS.CAMEL_CASE, (_, c: string) => {
            return c ? c.toUpperCase() : "";
          })
          .replace(/-/gi, "");

        suggestions.push({
          label: vf.name,
          sortText: `0${vf.name}`,
          insertText: new SnippetString(`${camelName} from '${filePath}'`),
          kind: CompletionItemKind.Folder,
          detail: vf.name,
          documentation: `import ${camelName} from ${filePath}`
        });
      });
    }

    return suggestions;
  }

  /**
   * 获取组件属性
   * @param documentText 文档文本
   * @param tagName 标签名
   * @returns 属性数组
   */
  private getPropAttr(documentText: string, tagName: string): CompletionItem[] {
    const cacheKey = `propAttr_${tagName}_${this._document.uri.toString()}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const result = this.extractComponentProps(documentText, tagName);
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error("Error in getPropAttr:", error);
      return [];
    }
  }

  /**
   * 提取组件属性
   * @param documentText 文档文本
   * @param tagName 标签名
   * @returns 属性数组
   */
  private extractComponentProps(documentText: string, tagName: string): CompletionItem[] {
    // 1. 找出标签所在路径
    const tagNameUpper = tagName
      .replace(REGEX_PATTERNS.CAMEL_CASE, (_, c: string) => {
        return c ? c.toUpperCase() : "";
      })
      .replace(/-/gi, "");

    const allUpper = tagNameUpper[0].toUpperCase() + tagNameUpper.substring(1);
    const pathReg = new RegExp(
      `import\\s+(${tagName}|${tagNameUpper}|${allUpper})\\s+from\\s+['"']([^'"']*)`,
      "g"
    );

    const pathRegArr = documentText.match(pathReg);

    if (pathRegArr && pathRegArr.length > 0) {
      let tagPath = pathRegArr[0];
      tagPath = tagPath.replace(/(.*['"])/, "");

      const config = workspace.getConfiguration("vue-daisy") as VueDaisyConfig;
      const componentPrefix = config.componentPrefix;

      if (componentPrefix) {
        const indexAlias = componentPrefix.alias.indexOf(tagPath);
        const aliasAfter = tagPath.substring(indexAlias, 1);
        let comPath = componentPrefix.path;

        if (aliasAfter !== "/") {
          comPath = path.join(componentPrefix.path, "/");
        }

        tagPath = tagPath.replace(componentPrefix.alias, comPath);
      }

      if (!tagPath.endsWith(".vue")) {
        tagPath += ".vue";
      }

      // 处理相对路径和绝对路径
      if (tagPath.indexOf("./") > -1 || tagPath.indexOf("../") > -1) {
        tagPath = path.join(this._document.fileName, "../", tagPath);
      } else {
        const workspaceFolders = workspace.workspaceFolders;
        if (workspaceFolders && workspaceFolders.length > 0) {
          tagPath = path.join(workspaceFolders[0].uri.path, tagPath);
        }
      }

      try {
        fs.accessSync(tagPath);
      } catch (_) {
        tagPath = path.join(tagPath.replace(".vue", ""), "index.vue");
      }

      try {
        documentText = fs.readFileSync(tagPath, "utf8");
      } catch (error) {
        console.error("Failed to read component file:", error);
        return [];
      }
    } else {
      return [];
    }

    // 2. 获取标签文件中的prop属性
    return this.parseComponentFile(documentText);
  }

  /**
   * 解析组件文件
   * @param documentText 文档文本
   * @returns 属性数组
   */
  private parseComponentFile(documentText: string): CompletionItem[] {
    const props: CompletionItem[] = [];
    const scriptIndex = documentText.indexOf("<script");

    if (scriptIndex === -1) {
      return props;
    }

    let docText = documentText.substr(scriptIndex, documentText.length);
    const propIndex = docText.indexOf("props");

    if (propIndex === -1) {
      return props;
    }

    let propStack = 0;
    docText = docText.substr(propIndex, docText.length);
    const braceBeforeIndex = docText.indexOf("{");

    if (braceBeforeIndex === -1) {
      return props;
    }

    propStack++;
    docText = docText.substr(braceBeforeIndex + 1, docText.length);
    let propText = "";

    // 解析props对象
    while (propStack > 0 && docText.length > 0) {
      const nextBraceOpen = docText.indexOf("{");
      const nextBraceClose = docText.indexOf("}");

      if (nextBraceOpen === -1) {
        docText = "";
      } else if (nextBraceOpen < nextBraceClose) {
        if (propStack === 1) {
          propText += docText.substr(0, nextBraceOpen);
        }
        propStack++;
        docText = docText.substr(nextBraceOpen + 1, docText.length);
      } else {
        propStack--;
        docText = docText.substr(nextBraceClose + 1, docText.length);
      }
    }

    // 提取属性名
    const propMatch = propText.match(REGEX_PATTERNS.PROP_MATCH);
    if (propMatch && propMatch.length > 0) {
      propMatch.forEach((propItem, propIndex) => {
        let propName = propItem.substr(1, propItem.length - 2);
        propName = propName.replace(/([A-Z])/g, (_, c) => {
          return c ? "-" + c.toLowerCase() : "";
        });

        props.push({
          label: propName,
          sortText: "0" + propIndex,
          insertText: new SnippetString(`:${propName}="$0"`),
          kind: CompletionItemKind.Property,
          documentation: ""
        });
      });
    }

    // 提取emit事件
    const emitReg = documentText.match(REGEX_PATTERNS.EMIT_MATCH);
    if (emitReg && emitReg.length > 0) {
      for (let i = 0; i < emitReg.length; i++) {
        let emitName = emitReg[i];
        emitName = emitName.replace(/(.*['"])/, "");

        props.push({
          label: emitName,
          sortText: "0" + (props.length + 1),
          insertText: new SnippetString(`@${emitName}="$0"`),
          kind: CompletionItemKind.Method,
          documentation: ""
        });
      }
    }

    return props;
  }

  /**
   * 将字符串转换为kebab-case格式
   * @param str 输入字符串
   * @returns kebab-case格式的字符串
   */
  private kebabize(str: string): string {
    return str.replace(REGEX_PATTERNS.KEBAB_CASE, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
  }

  // ========================================================================
  // 主要的提供完成项方法
  // ========================================================================

  /**
   * 提供完成项(VSCode API入口)
   * @param document 文档对象
   * @param position 位置对象
   * @param token 取消令牌
   * @returns 完成项列表或null
   */
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<CompletionItem[] | CompletionList> {
    // 检查取消令牌
    if (token.isCancellationRequested) {
      return null;
    }

    this._document = document;
    this._position = position;

    try {
      // 处理关闭标签
      if (this.isCloseTag()) {
        this.getCloseTagSuggestion();
        return null;
      }

      // 获取配置
      const config = workspace.getConfiguration("vue-daisy") as VueDaisyConfig;
      this.size = config["indent-size"];
      this.quotes = config.quotes === "double" ? '"' : "'";

      // 获取标签和属性信息
      const tag = this.getPreTag();
      const attr = this.getPreAttr();

      if (tag && typeof tag === "object") {
        // 转换标签名为kebab-case
        tag.text = this.kebabize(tag.text);
      }

      // 根据上下文返回不同类型的建议
      if (this.isAttrValueStart(tag, attr) && typeof tag === "object") {
        // 属性值建议
        return this.getAttrValueSuggestion(tag.text, attr);
      } else if (this.isAttrStart(tag) && typeof tag === "object") {
        // 属性建议
        if (TAGS[tag.text]) {
          // UI库组件属性
          return this.getAttrSuggestion(tag.text);
        } else {
          // 自定义组件属性
          const propsSuggestion = this.getPropAttr(this._document.getText(), tag.text);
          return [...propsSuggestion, ...this.getCommonPropsSuggestion()];
        }
      } else if (this.isTagStart()) {
        // 标签建议
        switch (document.languageId) {
          case "vue":
            return this.notInTemplate() ? [] : this.getTagSuggestion();
          case "html":
            return this.getTagSuggestion();
          default:
            return [];
        }
      } else if (this.isImport()) {
        // 导入建议
        return this.importSuggestion();
      }

      return [];
    } catch (error) {
      console.error("Error in provideCompletionItems:", error);
      return [];
    }
  }
}
