import { workspace } from "vscode";

/**
 * 格式化工具类 - 处理代码格式化相关的工具函数
 */
export class FormattingUtils {
  /**
   * 获取缩进空格字符串
   */
  static getIndentString(tabSize?: number): string {
    const actualTabSize = tabSize || workspace.getConfiguration("editor").tabSize || 2;
    let spaceAdd = "";

    for (let i = 0; i < actualTabSize; i++) {
      spaceAdd += " ";
    }

    return spaceAdd;
  }

  /**
   * 生成指定数量的空格
   */
  static generateSpaces(count: number): string {
    let spaces = "";
    for (let i = 0; i < count; i++) {
      spaces += " ";
    }
    return spaces;
  }

  /**
   * 获取行的缩进空格
   */
  static getLineIndent(lineText: string): string {
    return lineText.replace(/^(\s*)[a-zA-Z-_<].*$/g, "$1");
  }

  /**
   * 获取行的缩进位置
   */
  static getIndentPosition(lineText: string): number {
    return lineText.indexOf(lineText.trim());
  }

  /**
   * 清理导入路径中的反斜杠
   */
  static cleanImportPath(importString: string): string {
    return importString.replace(/\\/gi, "/");
  }
}
