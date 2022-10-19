
import {
  window, CancellationToken, workspace, CompletionItemProvider, ProviderResult,
  TextDocument, Position, CompletionItem, CompletionList, CompletionItemKind,
  SnippetString, Range, Selection
} from 'vscode';
import { App } from '../app';
import ATTRS from '../vue-attributes';
import TAGS from '../vue-tags';
import COMMON_PROPS from "../common/commonProps"
import * as prettyHTML from 'pretty';
import * as fs from 'fs';
import * as path from 'path';
export interface TagObject {
  text: string,
  offset: number
};

export default class ElementCompletionItemProvider implements CompletionItemProvider {
  private _document!: TextDocument;
  private _position!: Position;
  private tagReg: RegExp = /<([\w-]+)\s+/g;
  private attrReg: RegExp = /(?:\(|\s*)((\w(-)?)*)=['"][^'"]*/;  // 能够匹配 left-right 属性
  private tagStartReg: RegExp = /<([\w-]*)$/;
  private size: number | undefined;
  private quotes: string | undefined;

  // 获取预览标签
  getPreTag(): TagObject | undefined {
    let line = this._position?.line;
    let tag: TagObject | string;
    let txt = this.getTextBeforePosition(this._position);

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text;
      }
      tag = this.matchTag(/<([\w-]+)/g, txt, line);

      if (tag === 'break') { return; }
      if (tag) { return <TagObject>tag; }
      line--;
    }
    return;
  }

  // 获取预览属性
  getPreAttr(): string | undefined {
    let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '');
    let end = this._position.character;
    let start = txt.lastIndexOf(' ', end) + 1;
    let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end));

    return this.matchAttr(this.attrReg, parsedTxt);
  }

  // 匹配属性
  matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null;
    match = reg.exec(txt);
    if (!/"[^"]*"/.test(txt) && !!match) {
      return match[1];
    }
    return '';
  }

  // 匹配标签
  matchTag(reg: RegExp, txt: string, line: number): TagObject | string {
    let match: RegExpExecArray | null;
    let arr: TagObject[] = [];

    if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (this._position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index))
      });
    }
    return arr.pop() || '';
  }

  // // 获取本行位置前的文本
  // getTextBeforePosition(position: Position): string {
  //   let retry = 0;
  //   let line = position.line;
  //   let text = "";
  //   while (!text && retry < 15) {
  //     var start = new Position(line, 0);
  //     var range = new Range(start, position);
  //     text = this._document.getText(range);
  //     retry++;
  //     line--;
  //   }
  //   return text;
  // }
  getTextBeforePosition(position: Position): string {
    var start = new Position(position.line, 0);
    var range = new Range(start, position);
    return this._document.getText(range);
  }
  // 获取建议标签
  getTagSuggestion() {
    let suggestions = [];

    let id = 100;
    // 添加vue组件提示
    let vueFiles = App.traverse('.vue', '');
    App.vueFiles = vueFiles;
    for (let i = 0; i < vueFiles.length; i++) {
      const vf = vueFiles[i];
      suggestions.push({
        label: vf.name,
        sortText: `1000${i}${vf.name}`,
        insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
        kind: CompletionItemKind.Class,
        detail: 'vue component',
        documentation: 'internal component: ' + vf.path
      });
    }

    for (let tag in TAGS) {
      suggestions.push(this.buildTagSuggestion(tag, TAGS[tag], id));
      id++;
    }
    return suggestions;
  }

  // 获取建议属性值
  getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
    let suggestions: CompletionItem[] | { label: any; kind: CompletionItemKind; }[] = [];
    const values = this.getAttrValues(tag, attr);
    values.forEach((value: any) => {
      suggestions.push({
        label: value,
        kind: CompletionItemKind.Value
      });
    });
    return suggestions;
  }

  // 获取建议属性
  getAttrSuggestion(tag: string) {
    let suggestions: { label: any; insertText: string | SnippetString; kind: CompletionItemKind; detail: string; documentation: string; }[] = [];
    let tagAttrs = this.getTagAttrs(tag);
    let preText = this.getTextBeforePosition(this._position);
    let prefix = preText.replace(/['"]([^'"]*)['"]$/, '').split(/\s|\(+/).pop();
    // 方法属性
    const method = prefix![0] === '@';
    // 绑定属性
    const bind = prefix![0] === ':';

    prefix = prefix!.replace(/[:@]/, '');
    if (/[^@:a-zA-z\s]/.test(prefix[0])) {
      return suggestions;
    }

    tagAttrs.forEach((attr: string | undefined) => {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem && (!prefix?.trim() || this.firstCharsEqual(attr!, prefix))) {
        const sug = this.buildAttrSuggestion({ attr, tag, bind, method }, attrItem);
        sug && suggestions.push(sug);
      }
    });
    for (let attr in ATTRS) {
      const attrItem = this.getAttrItem(tag, attr);
      if (attrItem && attrItem.global && (!prefix.trim() || this.firstCharsEqual(attr, prefix))) {
        const sug = this.buildAttrSuggestion({ attr, tag: null, bind, method }, attrItem);
        sug && suggestions.push(sug);
      }
    }
    suggestions = suggestions.concat(this.getCommonPropsSuggestion())
    return suggestions;
  }

  // 编译建议标签
  buildTagSuggestion(tag: string, tagVal: { description?: any; subtags?: any; defaults?: any; }, id: number) {
    const snippets: any[] = [];
    let index = 0;
    let that = this;
    function build(tag: any, { subtags, defaults }: any, snippets: any[]) {
      // 属性
      let attrs = '';
      defaults && defaults.forEach((item: any, i: number) => {
        attrs += ` ${item}=${that.quotes}$${index + i + 1}${that.quotes}`;
      });
      // 开始标签
      snippets.push(`${index > 0 ? '<' : ''}${tag}${attrs}>`);
      defaults && (index += defaults.length);
      index++;
      // 子标签
      if (subtags) {
        subtags.forEach((item: string | number) => build(item, TAGS[item], snippets));
        snippets.push(`</${tag}>`);
      } else {
        // 关闭标签
        snippets.push(`$${index}</${tag}>`);
      }
    };
    build(tag, tagVal, snippets);

    return {
      label: tag,
      sortText: `0${id}${tag}`,
      insertText: new SnippetString(prettyHTML('<' + snippets.join(''), { indent_size: this.size }).substr(1)),
      kind: CompletionItemKind.Snippet,
      detail: `vue component`,
      documentation: tagVal.description
    };
  }

  buildAttrSuggestion({ attr, tag, bind, method }, { description, type, global, framework }) {
    if ((method && type === "method") || (bind && type !== "method") || (!method && !bind)) {
      let detail = '';
      // detail 指定标签所属框架（目前主要有 element-ui，vux， iview2）
      if (TAGS[tag] && TAGS[tag].framework) {
        detail += TAGS[tag].framework;
      }
      if (global) {
        detail += `${framework}(global)`;
      }
      return {
        label: attr,
        insertText: (type && (type === 'flag')) ? `${attr} ` : new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
        kind: (type && (type === 'method')) ? CompletionItemKind.Method : CompletionItemKind.Field,
        detail,
        documentation: "daisy----" + description
      };
    } else { return; }
  }

  getCommonPropsSuggestion() {

    return Object.entries<{ description }>(COMMON_PROPS).map(([attr, value]) => {
      return {
        label: attr,
        insertText: new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
        kind: CompletionItemKind.Variable,
        detail: 'CommonProps',
        documentation: "daisy----" + value.description
      };
    })

  }

  // 获取属性值
  getAttrValues(tag: string | undefined, attr: string | undefined) {
    let attrItem = this.getAttrItem(tag, attr);
    let options = attrItem && attrItem.options;
    if (!options && attrItem) {
      if (attrItem.type === 'boolean') {
        options = ['true', 'false'];
      } else if (attrItem.type === 'icon') {
        options = ATTRS['icons'];
      } else if (attrItem.type === 'shortcut-icon') {
        options = [];
        ATTRS['icons'].forEach((icon: string) => {
          options.push(icon.replace(/^el-icon-/, ''));
        });
      }
    }
    return options || [];
  }

  // 获取标签包含的属性
  getTagAttrs(tag: string) {
    return (TAGS[tag] && TAGS[tag].attributes) || [];
  }

  // 获取属性项
  getAttrItem(tag: string | undefined, attr: string | undefined) {
    return ATTRS[`${tag}/${attr}`] || ATTRS[attr] || COMMON_PROPS[attr];
  }

  // 属性值开始
  isAttrValueStart(tag: Object | string | undefined, attr: string | undefined) {
    return tag && attr;
  }

  // 属性开始
  isAttrStart(tag: TagObject | undefined) {
    return tag;
  }

  // 是否是标签开始
  isTagStart() {
    let txt = this.getTextBeforePosition(this._position);
    return this.tagStartReg.test(txt);
  }

  // 是否是关闭标签
  isCloseTag() {
    let txt = this._document.getText(new Range(new Position(this._position.line, 0), this._position)).trim();
    if (!txt.endsWith('>') || /.*=("[^"]*>|'[^']*>)$/gi.test(txt) || txt.endsWith('/>')) {
      return false;
    }
    let txtArr = txt.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
    if (Array.isArray(txtArr) && txtArr.length > 0) {
      let txtStr = txtArr[txtArr.length - 1];
      return /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>$/gi.test(txtStr);
    }
    return false;
  }

  firstCharsEqual(str1: string, str2: string) {
    if (str2 && str1) {
      return str1[0].toLowerCase() === str2[0].toLowerCase();
    }
    return false;
  }
  // vue文件只在template里面提示，已script作为标记
  notInTemplate(): boolean {
    let line = this._position.line;
    while (line) {
      if (/^\s*<script.*>\s*$/.test(<string>this._document.lineAt(line).text)) {
        return true;
      }
      line--;
    }
    return false;
  }

  // 自动补全关闭标签
  getCloseTagSuggestion() {
    let txtInfo = this._document.lineAt(this._position.line);
    let txtArr = txtInfo.text.match(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim);
    let tag = 'div';
    if (txtArr) {
      tag = txtArr[txtArr.length - 1].replace(/<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*>/gim, '$1');
    }
    let exclude = ['br', 'img'];
    if (exclude.indexOf(tag) === -1) {
      window.activeTextEditor.edit((editBuilder) => {
        editBuilder.insert(this._position, '</' + tag + '>');
      });
      let newPosition = window.activeTextEditor.selection.active.translate(0, 0);
      window.activeTextEditor.selection = new Selection(newPosition, newPosition);
    }
  }

  // 判断是否是{}括号开始
  isBrace() {
    let startPosition = new Position(this._position.line, this._position.character - 2);
    return /[^{]{/gi.test(this._document.getText(new Range(startPosition, this._position)));
  }

  // {}括号自动补全，只有行内html标签的地方需要补全
  braceSuggestion() {
    let txt = this.getTextBeforePosition(this._position).trim();
    let lineTxt = this._document.lineAt(this._position.line).text.trim();
    if (/<\w.*$/.test(txt) && lineTxt !== (txt + '}')) {
      window.activeTextEditor.edit((editBuilder) => {
        editBuilder.insert(this._position, '}');
      });
      let newPosition = window.activeTextEditor.selection.active.translate(0, 0);
      window.activeTextEditor.selection = new Selection(newPosition, newPosition);
    }
  }

  // 判断是否是导入
  isImport() {
    let lineTxt = this._document.lineAt(this._position.line).text.trim();
    return /^import.*/.test(lineTxt);
  }

  // 导入建议
  importSuggestion() {
    let search = this._document.lineAt(this._position.line).text.trim();
    search = search.replace(/^import/, '').trim();
    let suggestions: { label: any; sortText: string; insertText: SnippetString; kind: CompletionItemKind; detail: any; documentation: string; }[] = [];
    if (search) {
      let vueFiles = App.traverse('', search);
      vueFiles.forEach((vf: { path: string; name: string; }) => {
        let filePath = vf.path.replace(/\\/gi, '/');
        let camelName = vf.name.replace(/(-[a-z])/g, (_: any, c: string) => {
          return c ? c.toUpperCase() : '';
        }).replace(/-/gi, '');
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

  // 获取props属性值
  getPropAttr(documentText: string, tagName: string) {
    // 1. 找出标签所在路径
    let tagNameUpper = tagName.replace(/(-[a-z])/g, (_: any, c: string) => {
      return c ? c.toUpperCase() : '';
    }).replace(/-/gi, '');
    const allUpper = tagNameUpper[0].toUpperCase() + tagNameUpper.substring(1);
    let pathReg = RegExp('import\\\s+(' + tagName + '|' + tagNameUpper + '|' + allUpper + ')\\\s+from\\\s+[\'\"]([^\'\"]*)', 'g');
    let pathRegArr = documentText.match(pathReg);
    if (pathRegArr && pathRegArr.length > 0) {
      let tagPath = pathRegArr[0];
      tagPath = tagPath.replace(/(.*['"])/, '');
      const config = workspace.getConfiguration('vue-daisy');
      const indexAlias = config.componentPrefix.alias.indexOf(tagPath);
      const aliasAfter = tagPath.substring(indexAlias, 1);
      let comPath = config.componentPrefix.path;
      if (aliasAfter !== '/') {
        comPath = path.join(config.componentPrefix.path, '/');
      }
      tagPath = tagPath.replace(config.componentPrefix.alias, comPath);
      if (!tagPath.endsWith('.vue')) {
        tagPath += '.vue';
      }
      if (tagPath.indexOf('./') > 0 || tagPath.indexOf('../') > 0) {
        tagPath = path.join(this._document.fileName, '../', tagPath);
      } else {
        tagPath = path.join(workspace.workspaceFolders[0].uri.path, tagPath);
      }
      try {
        fs.accessSync(tagPath);
      } catch (_) {
        tagPath = path.join(tagPath.replace('.vue', ''), 'index.vue');
      }

      documentText = fs.readFileSync(tagPath, 'utf8');
    } else {
      return [];
    }

    // 2. 获取标签文件中的prop属性
    let props = [];
    let scriptIndex = documentText.indexOf('<script');
    if (scriptIndex) {
      let docText = documentText.substr(scriptIndex, documentText.length);
      let propIndex = docText.indexOf('props');
      let propStack = 0;
      if (propIndex) {
        docText = docText.substr(propIndex, docText.length);
        let braceBeforeIndex = docText.indexOf('{');
        let braceAfterIndex = 0;
        if (braceBeforeIndex) {
          ++propStack;
          docText = docText.substr(braceBeforeIndex + 1, docText.length);
        }
        let propText = '';
        while (propStack > 0 && docText.length > 0) {
          braceBeforeIndex = docText.indexOf('{');
          braceAfterIndex = docText.indexOf('}');
          if (braceBeforeIndex === -1) {
            docText = '';
          } else if (braceBeforeIndex < braceAfterIndex) {
            if (propStack === 1) {
              propText += docText.substr(0, braceBeforeIndex);
            }
            ++propStack;
            docText = docText.substr(braceBeforeIndex > 0 ? braceBeforeIndex + 1 : 1, docText.length);
          } else {
            --propStack;
            docText = docText.substr(braceAfterIndex > 0 ? braceAfterIndex + 1 : 1, docText.length);
          }
        }
        let propMatch = propText.match(/\s[\w-]*:/gi);
        if (propMatch.length > 0) {
          propMatch.forEach((propItem, propIndex) => {
            propItem = propItem.substr(1, propItem.length - 2);
            propItem = propItem.replace(/([A-Z])/g, (_, c) => {
              return c ? '-' + c.toLowerCase() : '';
            });
            props.push({
              label: propItem,
              sortText: '0' + propIndex,
              insertText: new SnippetString(`:${propItem}="$0"`),
              kind: CompletionItemKind.Property,
              documentation: ''
            });
          });
        }
      }
    }
    let emitReg = documentText.match(/\$emit\(\s?['"](\w*)/g);
    if (emitReg && emitReg.length > 0) {
      for (let i = 0; i < emitReg.length; i++) {
        let emitName = emitReg[i];
        emitName = emitName.replace(/(.*['"])/, '');
        props.push({
          label: emitName,
          sortText: '0' + (props.length + 1),
          insertText: new SnippetString(`@${emitName}="$0"`),
          kind: CompletionItemKind.Method,
          documentation: ''
        });
      }
    }
    return props;
  }

  // 提供完成项(提示入口)
  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
    this._document = document;
    this._position = position;


    if (this.isCloseTag()) { // 标签关闭标签
      this.getCloseTagSuggestion();
      return null;
    }
    const config = workspace.getConfiguration('vue-daisy');
    this.size = config.get('indent-size');
    this.quotes = config.get('quotes') === 'double' ? '"' : "'";

    // 标签、属性
    let tag: TagObject | string | undefined = this.getPreTag();

    let attr = this.getPreAttr();
    if (this.isAttrValueStart(tag, attr)) { // 属性值开始
      return this.getAttrValueSuggestion(tag.text, attr);
    } else if (this.isAttrStart(tag)) { // 属性开始
      if (TAGS[tag.text]) {
        // 插件提供
        return this.getAttrSuggestion(tag.text);
      } else {
        const propsSugestion = this.getPropAttr(this._document.getText(), tag.text);

        return [...propsSugestion, ...this.getCommonPropsSuggestion()]
      }
    } else if (this.isTagStart()) { // 标签开始
      switch (document.languageId) {
        case 'vue':
          return this.notInTemplate() ? [] : this.getTagSuggestion();
        case 'html':
          // todo
          return this.getTagSuggestion();
      }
    } else if (this.isImport()) {
      return this.importSuggestion();
    } else { return []; }
  }
}
