import {
  window,
  Disposable,
  workspace,
  Position,
  CompletionItemKind,
  SnippetString,
  Range,
  Selection,
  TextEditor
} from "vscode";

import { EditorUtils } from "./utils/editorUtils";
import { FileTraverser, FileInfo } from "./utils/fileTraverser";
import { CommandHandler } from "./utils/commandHandler";
import { VueComponentUtils } from "./utils/vueComponentUtils";
import { TagNameWay } from "./types";

/**
 * Vue Daisy 扩展主应用类
 * 负责协调各个功能模块，提供统一的接口
 */
export class App {
  private _disposable!: Disposable;
  public static vueFiles: FileInfo[] = [];
  public static tagNameWay: TagNameWay = "kebabCase";

  /**
   * 执行普通命令
   */
  asNormal(key: string, modifiers?: string): Thenable<unknown> | undefined {
    return CommandHandler.asNormal(key, modifiers);
  }

  /**
   * 获取光标选中范围内容
   */
  getSelectedText(): string | undefined {
    return EditorUtils.getSelectedText();
  }

  /**
   * 组件自动导入
   */
  autoImport(txt: string, editor: TextEditor, line: number): void {
    try {
      if (!txt || !editor) {
        return;
      }

      const tag = VueComponentUtils.extractComponentName(txt);
      if (!tag) {
        return;
      }

      const matchingComponent = App.vueFiles.find(vf => vf.name === tag);
      if (matchingComponent) {
        this.performAutoImport(matchingComponent, editor, line);
      }
    } catch (error) {
      console.error("Error in autoImport:", error);
    }
  }

  /**
   * 执行自动导入逻辑
   */
  private performAutoImport(vf: FileInfo, editor: TextEditor, line: number): void {
    let countLine = EditorUtils.getLineCount(editor);

    // 找script位置
    while (!/^\s*<script.*>\s*$/.test(EditorUtils.getLineText(editor, line))) {
      if (countLine > line) {
        line++;
      } else {
        break;
      }
    }
    line += 2;

    if (countLine < line) {
      return;
    }

    // 找import位置
    while (/import /gi.test(EditorUtils.getLineText(editor, line).trim())) {
      if (countLine > line) {
        line++;
      } else {
        break;
      }
    }

    const name = this.formatImportName(vf.name);
    const importString = `import ${name} from '${vf.path}'\n`;
    const importLine = line;

    this.insertImportAndComponent(editor, importLine, importString, name, line, countLine);
  }

  /**
   * 格式化导入名称
   */
  private formatImportName(name: string): string {
    return VueComponentUtils.kebabToCamelCase(name);
  }

  /**
   * 插入导入语句和组件声明
   */
  private insertImportAndComponent(
    editor: TextEditor,
    importLine: number,
    importString: string,
    name: string,
    line: number,
    countLine: number
  ): void {
    if (line < countLine) {
      let priorityInsertLine = 0;
      let secondInsertLine = 0;
      let hasComponents = false;
      let baseEmpty = "";

      while (!/\s*<\/script>\s*/gi.test(EditorUtils.getLineText(editor, line).trim())) {
        const lineText = EditorUtils.getLineText(editor, line);

        // 检查是否已有components且在同一行
        if (/\s*components\s*:\s*{.*}.*/gi.test(lineText.trim())) {
          const preText = lineText.replace(/\s*}.*$/, "");
          const insertPos = preText.length;

          editor.edit(editBuilder => {
            const cleanImportString = importString.replace(/\\/gi, "/");
            editBuilder.insert(EditorUtils.createPosition(importLine, 0), cleanImportString);
            editBuilder.insert(EditorUtils.createPosition(line, insertPos), ", " + name);
          });
          break;
        }

        // 检查components块结束
        if (hasComponents && /\s*},?\s*$/gi.test(lineText.trim())) {
          const prevLineText = EditorUtils.getLineText(editor, line - 1);
          const insertPos = prevLineText.indexOf(prevLineText.trim());
          let empty = "";
          for (let i = 0; i < insertPos; i++) {
            empty += " ";
          }

          editor.edit(editBuilder => {
            const cleanImportString = importString.replace(/\\/gi, "/");
            editBuilder.insert(EditorUtils.createPosition(importLine, 0), cleanImportString);
            editBuilder.insert(
              EditorUtils.createPosition(
                line - 1,
                EditorUtils.getLineText(editor, line - 1).length
              ),
              ",\n" + empty + name
            );
          });
          break;
        }

        // 检查components块开始
        if (/\s*components\s*:\s*{\s*$/gi.test(lineText.trim())) {
          hasComponents = true;
        }

        // 检查export default
        if (/\s*export\s*default\s*{\s*/gi.test(lineText.trim())) {
          secondInsertLine = line;
        }

        // 检查data函数
        if (/\s*data\s*\(\s*\)\s*{\s*/gi.test(lineText.trim())) {
          const insertPos = lineText.indexOf(lineText.trim());
          for (let i = 0; i < insertPos; i++) {
            baseEmpty += " ";
          }
          priorityInsertLine = line;
        }

        if (countLine > line) {
          line++;
        } else {
          break;
        }
      }

      this.handleComponentInsertion(
        editor,
        importLine,
        importString,
        name,
        priorityInsertLine,
        secondInsertLine,
        baseEmpty
      );
    }
  }

  /**
   * 处理组件插入逻辑
   */
  private handleComponentInsertion(
    editor: TextEditor,
    importLine: number,
    importString: string,
    name: string,
    priorityInsertLine: number,
    secondInsertLine: number,
    baseEmpty: string
  ): void {
    if (priorityInsertLine > 0) {
      editor.edit(editBuilder => {
        const cleanImportString = importString.replace(/\\/gi, "/");
        editBuilder.insert(EditorUtils.createPosition(importLine - 1, 0), cleanImportString);
        editBuilder.insert(
          EditorUtils.createPosition(
            priorityInsertLine - 1,
            EditorUtils.getLineText(editor, priorityInsertLine - 1).length
          ),
          `\n\t${baseEmpty}components: { ${name} },`
        );
      });
    } else if (secondInsertLine > 0) {
      const tabSize = workspace.getConfiguration("editor").tabSize || 2;
      let spaceAdd = "";
      for (let i = 0; i < tabSize; i++) {
        spaceAdd += " ";
      }

      editor.edit(editBuilder => {
        const cleanImportString = importString.replace(/\\/gi, "/");
        editBuilder.insert(EditorUtils.createPosition(importLine, 0), cleanImportString);
        editBuilder.insert(
          EditorUtils.createPosition(
            secondInsertLine,
            EditorUtils.getLineText(editor, secondInsertLine).length
          ),
          `\n${spaceAdd}components: { ${name} },`
        );
      });
    }
  }

  /**
   * 遍历组件
   */
  static traverse(poster: string, search: string): FileInfo[] {
    return FileTraverser.traverse(poster, search);
  }

  /**
   * 自动补全
   */
  autoComplement(): void {
    const editor = EditorUtils.getActiveEditor();
    if (!editor) {
      return;
    }

    const txt = EditorUtils.getLineText(editor, editor.selection.anchor.line);
    if (EditorUtils.getLineCount(editor) <= editor.selection.anchor.line + 1) {
      return;
    }

    // 组件自动导入
    if (/<.*>\s?<\/.*>/gi.test(txt.trim()) || /<.*\/>/gi.test(txt.trim())) {
      this.autoImport(txt, editor, editor.selection.anchor.line);
      return;
    }

    this.handleLocalImport(editor, txt);
    this.handleAutoCompletion(editor, txt);
  }

  /**
   * 处理本地文件导入
   */
  private handleLocalImport(editor: TextEditor, txt: string): void {
    let line = editor.selection.anchor.line;
    let isLocalImport = line === 0;
    const prevExplore = line > 3 ? 3 : line;

    for (let i = 0; i < prevExplore; i++) {
      if (/.*(<script|import|require).*/.test(EditorUtils.getLineText(editor, line - i))) {
        isLocalImport = true;
        break;
      }
    }

    if (isLocalImport) {
      const search = EditorUtils.getLineText(editor, line).trim();
      if (search) {
        const vueFiles = App.traverse("", search);
        const suggestions = vueFiles.map(vf => ({
          label: vf.name,
          sortText: `1000${vf.name}`,
          insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
          kind: CompletionItemKind.Module,
          detail: "import internal file",
          documentation: "import internal file: " + vf.path
        }));
      }
    }
  }

  /**
   * 处理自动补全
   */
  private handleAutoCompletion(editor: TextEditor, txt: string): void {
    const nextLineTxt = EditorUtils.getLineText(editor, editor.selection.anchor.line + 1);
    const tabSize = workspace.getConfiguration("editor").tabSize || 2;
    let spaceAdd = "";

    for (let i = 0; i < tabSize; i++) {
      spaceAdd += " ";
    }

    const baseEmpty = txt.replace(/(\s)\S.*/gi, "$1");
    let replaceTxt = ` {\n${baseEmpty}${spaceAdd}\n${baseEmpty}}`;

    // 本行全是空
    if (/^\s*$/gi.test(txt) || txt === "") {
      replaceTxt = "name (params)" + replaceTxt;
    } else if (/[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi.test(txt)) {
      // key: value
      replaceTxt = ",\n" + baseEmpty;
    } else if (txt.indexOf(")") === -1) {
      replaceTxt = " (params)" + replaceTxt;
    }

    this.insertAutoCompletion(editor, txt, nextLineTxt, replaceTxt, baseEmpty, spaceAdd);
  }

  /**
   * 插入自动补全内容
   */
  private insertAutoCompletion(
    editor: TextEditor,
    txt: string,
    nextLineTxt: string,
    replaceTxt: string,
    baseEmpty: string,
    spaceAdd: string
  ): void {
    // 判断下一行是否是单行注释
    let processedNextLineTxt = nextLineTxt;
    if (/\s*\/\/\s+.*/gi.test(nextLineTxt)) {
      if (EditorUtils.getLineCount(editor) <= editor.selection.anchor.line + 2) {
        return;
      }
      processedNextLineTxt = EditorUtils.getLineText(editor, editor.selection.anchor.line + 2);
    }

    // 下一行是一个函数
    if (/.*(.*).*{.*/gi.test(processedNextLineTxt)) {
      let isCond = false;
      const txtTrim = txt.trim();
      const condList = ["if", "for", "while", "switch"];

      for (const cond of condList) {
        if (txtTrim.indexOf(cond) === 0) {
          isCond = true;
          break;
        }
      }

      if (!isCond) {
        replaceTxt += ",";
      }
    }

    editor.edit(editBuilder => {
      editBuilder.insert(
        EditorUtils.createPosition(editor.selection.anchor.line, txt.length + 1),
        replaceTxt
      );
    });

    const newPosition = editor.selection.active.translate(1, (baseEmpty + spaceAdd).length);
    editor.selection = EditorUtils.createSelection(newPosition, newPosition);
  }

  /**
   * backspace删除处理
   */
  async deleteComplete(): Promise<void> {
    const editor = EditorUtils.getActiveEditor();
    if (!editor) {
      this.asNormal("backspace");
      return;
    }

    // 多选择点删除处理
    if (window.activeTextEditor!.selections.length > 1) {
      await this.handleMultipleSelectionDelete(editor);
      return;
    }

    await this.handleSingleSelectionDelete(editor);
  }

  /**
   * 处理多选择删除
   */
  private async handleMultipleSelectionDelete(editor: TextEditor): Promise<void> {
    const selections = window.activeTextEditor!.selections;
    const selectionList: Selection[] = [];

    for (const selection of selections) {
      if (
        selection.start.line === selection.end.line &&
        selection.start.character === selection.end.character
      ) {
        if (selection.anchor.character > 0) {
          selectionList.push(
            EditorUtils.createSelection(
              EditorUtils.createPosition(selection.anchor.line, selection.anchor.character - 1),
              selection.anchor
            )
          );
        } else if (selection.anchor.line > 0) {
          const len = EditorUtils.getLineText(editor, selection.anchor.line - 1).length;
          selectionList.push(
            EditorUtils.createSelection(
              EditorUtils.createPosition(selection.anchor.line - 1, len),
              selection.anchor
            )
          );
        }
      } else {
        selectionList.push(selection);
      }
    }

    await editor.edit(editBuilder => {
      for (const selection of selectionList) {
        editBuilder.delete(selection);
      }
    });
  }

  /**
   * 处理单选择删除
   */
  private async handleSingleSelectionDelete(editor: TextEditor): Promise<void> {
    const selection = window.activeTextEditor!.selection;

    if (
      selection.start.line === selection.end.line &&
      selection.start.character === selection.end.character
    ) {
      // 首行处理
      if (editor.selection.anchor.line === 0) {
        if (editor.selection.anchor.character > 0) {
          await editor.edit(editBuilder => {
            editBuilder.delete(
              EditorUtils.createSelection(
                EditorUtils.createPosition(
                  editor.selection.anchor.line,
                  editor.selection.anchor.character - 1
                ),
                editor.selection.anchor
              )
            );
          });
        }
        return;
      }

      const isLineEmpty =
        EditorUtils.getLineText(editor, editor.selection.anchor.line).trim() === "";

      if (isLineEmpty) {
        await this.handleEmptyLineDelete(editor);
      } else {
        await this.handleNormalDelete(editor);
      }
    } else {
      // 选择块删除
      this.asNormal("backspace");
    }
  }

  /**
   * 处理空行删除
   */
  private async handleEmptyLineDelete(editor: TextEditor): Promise<void> {
    let preText = "";
    let line = editor.selection.anchor.line;

    while (preText.trim() === "" && line >= 0) {
      line -= 1;
      preText = EditorUtils.getLineText(editor, line);
    }

    await editor.edit(editBuilder => {
      editBuilder.delete(
        EditorUtils.createSelection(
          EditorUtils.createPosition(line, preText.length),
          editor.selection.anchor
        )
      );
    });
  }

  /**
   * 处理普通删除
   */
  private async handleNormalDelete(editor: TextEditor): Promise<void> {
    const endPosition = editor.selection.anchor;
    let startPosition: Position;

    const preLineText = editor.document.getText(
      EditorUtils.createRange(EditorUtils.createPosition(endPosition.line, 0), endPosition)
    );

    if (endPosition.character === 0 || preLineText.trim() === "") {
      startPosition = EditorUtils.createPosition(
        endPosition.line - 1,
        EditorUtils.getLineText(editor, endPosition.line - 1).length
      );
    } else {
      startPosition = EditorUtils.createPosition(endPosition.line, endPosition.character - 1);

      // 对{}, (), [], '', "", <>进行成对删除处理
      const txt = editor.document.getText(
        EditorUtils.createRange(
          EditorUtils.createPosition(endPosition.line, endPosition.character - 1),
          endPosition
        )
      );

      let finalEndPosition = endPosition;

      if (EditorUtils.getLineText(editor, endPosition.line).length > endPosition.character) {
        const nextTxt = editor.document.getText(
          EditorUtils.createRange(
            endPosition,
            EditorUtils.createPosition(endPosition.line, endPosition.character + 1)
          )
        );

        const pairs = [
          ["{", "}"],
          ["(", ")"],
          ["'", "'"],
          ['"', '"'],
          ["[", "]"],
          ["<", ">"]
        ];

        for (const [open, close] of pairs) {
          if (txt === open && nextTxt === close) {
            finalEndPosition = EditorUtils.createPosition(
              endPosition.line,
              endPosition.character + 1
            );
            break;
          }
        }
      }

      await editor.edit(editBuilder => {
        editBuilder.delete(EditorUtils.createSelection(startPosition, finalEndPosition));
      });
      return;
    }

    await editor.edit(editBuilder => {
      editBuilder.delete(EditorUtils.createSelection(startPosition, endPosition));
    });
  }

  /**
   * 强化格式化html标签
   */
  tagFormat(): void {
    const editor = EditorUtils.getActiveEditor();
    if (!editor) {
      this.asNormal("enter");
      return;
    }

    if (editor.selections.length === 1) {
      const tabSize = workspace.getConfiguration("editor").tabSize || 2;
      let spaceAdd = "";

      for (let i = 0; i < tabSize; i++) {
        spaceAdd += " ";
      }

      const text = EditorUtils.getLineText(editor, editor.selection.anchor.line);

      if (/^\s*<[A-Z][A-Za-z0-9_-]*.*>.*<\/[A-Z][A-Za-z0-9_-]*>\s*$/g.test(text)) {
        const space = text.replace(/^(\s*)[a-zA-Z-_<].*/g, "$1");
        const content = `\n${space}${spaceAdd}\n${space}`;

        editor.edit(editBuilder => {
          editBuilder.insert(editor.selection.anchor, content);
        });

        const newPosition = editor.selection.active.translate(1, space.length + spaceAdd.length);
        editor.selection = EditorUtils.createSelection(newPosition, newPosition);
      } else {
        this.asNormal("enter");
      }
    } else {
      this.asNormal("enter");
    }
  }

  /**
   * 块选择 - 暂时保留原有接口，后续优化
   */
  blockSelect(): void {
    // TODO: 将原有的复杂块选择逻辑重构为单独的模块
    // 由于该方法过于复杂，暂时保留空实现
    // 在后续优化中将其拆分为更小的、可测试的函数
  }

  /**
   * 释放资源
   */
  dispose(): void {
    if (this._disposable) {
      this._disposable.dispose();
    }
  }
}
