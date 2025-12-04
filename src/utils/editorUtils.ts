import { window, Position, Range, Selection, TextEditor } from "vscode";

/**
 * 编辑器工具类 - 处理编辑器相关的基础操作
 */
export class EditorUtils {
  public static readonly WORD_REG: RegExp =
    /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;

  /**
   * 获取光标选中范围内容
   */
  static getSelectedText(): string | undefined {
    const editor = window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    if (selection.isEmpty) {
      const range = editor.document.getWordRangeAtPosition(selection.start, this.WORD_REG);
      return editor.document.getText(range);
    } else {
      return editor.document.getText(selection);
    }
  }

  /**
   * 获取当前活动编辑器
   */
  static getActiveEditor(): TextEditor | undefined {
    return window.activeTextEditor;
  }

  /**
   * 检查编辑器是否存在
   */
  static hasActiveEditor(): boolean {
    return !!window.activeTextEditor;
  }

  /**
   * 获取指定行的文本
   */
  static getLineText(editor: TextEditor, lineNumber: number): string {
    return editor.document.lineAt(lineNumber).text;
  }

  /**
   * 获取文档总行数
   */
  static getLineCount(editor: TextEditor): number {
    return editor.document.lineCount;
  }

  /**
   * 创建位置对象
   */
  static createPosition(line: number, character: number): Position {
    return new Position(line, character);
  }

  /**
   * 创建范围对象
   */
  static createRange(start: Position, end: Position): Range {
    return new Range(start, end);
  }

  /**
   * 创建选择对象
   */
  static createSelection(start: Position, end: Position): Selection {
    return new Selection(start, end);
  }
}
