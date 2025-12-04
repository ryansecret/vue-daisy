import {
  CancellationToken,
  ProviderResult,
  TextDocument,
  Position,
  HoverProvider,
  Hover,
  TextLine,
  MarkdownString
} from "vscode";

import Documents from "../documents";

/**
 * VSCode 文档悬停提供器
 * 为 Vue 组件属性和标签提供悬停文档显示功能
 */
export default class DocumentHoverProvider implements HoverProvider {
  // 预编译正则表达式以提升性能
  private static readonly TAG_REGEX = /<[^(>/)]+/gim;
  private static readonly TEXT_SPLITTERS = [" ", "<", ">", '"', "'", ".", "\\", "=", ":"];

  /**
   * 获取光标位置所属的标签名
   * @param document 文档对象
   * @param position 光标位置
   * @returns 标签名，如果未找到返回空字符串
   */
  static getTag(document: TextDocument, position: Position): string {
    let line = position.line;
    let tagName = "";

    // 向上搜索标签，最多搜索当前行及之前的行
    while (line >= 0 && !tagName) {
      try {
        const lineInfo: TextLine = document.lineAt(line);
        let text = lineInfo.text.trim();

        // 如果是当前行，只取光标位置前的文本
        if (line === position.line) {
          text = text.substring(0, position.character);
        }

        const matches = text.match(this.TAG_REGEX);
        if (matches && matches.length > 0) {
          // 从右到左查找最近的开始标签
          for (let i = matches.length - 1; i >= 0; i--) {
            const match = matches[i];
            if (match[0] === "<" && match[1] !== "/") {
              // 提取标签名，处理带属性的情况
              const spaceIndex = match.indexOf(" ");
              if (spaceIndex !== -1) {
                tagName = match.substring(1, spaceIndex);
              } else {
                tagName = match.substring(1);
              }
              break;
            }
          }
        }
      } catch (error) {
        // 忽略行读取错误，继续搜索上一行
        console.warn("Error reading line:", error);
      }

      line--;
    }

    return tagName;
  }

  /**
   * 从当前位置提取完整的单词或属性名
   * @param line 当前行对象
   * @param position 光标位置
   * @returns 提取的文本
   */
  private extractWordAtPosition(line: TextLine, position: Position): string {
    const text = line.text;
    let startIndex = position.character;
    let endIndex = position.character;

    // 向前查找单词边界
    while (startIndex > 0) {
      const char = text[startIndex - 1];
      if (DocumentHoverProvider.TEXT_SPLITTERS.includes(char)) {
        break;
      }
      startIndex--;
    }

    // 向后查找单词边界
    while (endIndex < text.length) {
      const char = text[endIndex];
      if (DocumentHoverProvider.TEXT_SPLITTERS.includes(char)) {
        break;
      }
      endIndex++;
    }

    return text.substring(startIndex, endIndex);
  }

  /**
   * 将 PascalCase 转换为 kebab-case
   * @param str 输入字符串
   * @returns kebab-case 格式的字符串
   */
  private kebabize(str: string): string {
    if (!str) {
      return str;
    }

    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => {
      return (offset ? "-" : "") + match.toLowerCase();
    });
  }

  /**
   * 提供悬停信息
   * @param document 文档对象
   * @param position 光标位置
   * @param token 取消令牌
   * @returns 悬停信息或 null
   */
  provideHover(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Hover> {
    try {
      // 检查取消令牌
      if (token.isCancellationRequested) {
        return null;
      }

      // 获取当前行
      const line = document.lineAt(position.line);

      // 提取光标位置的单词
      const originalText = this.extractWordAtPosition(line, position);

      if (!originalText) {
        return null;
      }

      // 尝试原始格式和 kebab-case 格式查找文档
      const kebabText = this.kebabize(originalText);
      const documentInfo = Documents[originalText] || Documents[kebabText];

      if (documentInfo) {
        // 创建 Markdown 格式的悬停内容
        const markdownContent = new MarkdownString(documentInfo);
        markdownContent.isTrusted = true;
        markdownContent.supportHtml = true;

        return new Hover(markdownContent);
      }

      return null;
    } catch (error) {
      // 记录错误但不抛出，避免影响 VSCode 的正常运行
      console.error("Error in DocumentHoverProvider.provideHover:", error);
      return null;
    }
  }
}
