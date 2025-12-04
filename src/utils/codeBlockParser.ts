import { Position, Selection, TextEditor } from "vscode";
import { RegexPatterns } from "./regexPatterns";

/**
 * 代码块解析工具类 - 处理HTML标签和代码块的解析
 */
export class CodeBlockParser {
  /**
   * HTML标签解析相关常量
   */
  private static readonly HTML_CONSTANTS = {
    ncname: "[a-zA-Z_][\\w\\-\\.]*",
    commentEnd: "-->",
    noIncludeTags: ["input", "img"]
  };

  /**
   * 获取标签正则表达式
   */
  private static getTagRegexes() {
    const { ncname } = this.HTML_CONSTANTS;
    const qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";

    return {
      startTagOpen: new RegExp("^<" + qnameCapture),
      endTag: new RegExp("^(<\\/" + qnameCapture + "[^>]*>)"),
      comment: /^<!--/
    };
  }

  /**
   * 选择HTML代码块
   */
  static selectHtmlBlock(editor: TextEditor, lineText: string, startPosition: Position): void {
    const { startTagOpen, endTag, comment } = this.getTagRegexes();
    const { commentEnd, noIncludeTags } = this.HTML_CONSTANTS;
    const lineCount = editor.document.lineCount;

    let lineCurrent = startPosition.line;
    let isNoIncludeTag = false;
    let tagStack: string[] | null = null;
    let col = lineText.indexOf(lineText.trim()) + startPosition.character;
    let beginPosition = new Position(
      startPosition.line,
      startPosition.character + lineText.length - lineText.replace(/\s*(.*)/, "$1").length
    );

    lineText = lineText.trim();

    while (lineText) {
      let textTagPos = lineText.indexOf("<");

      if (textTagPos === 0) {
        let hasEndTag = false;
        let hasTag = false;

        // 处理注释
        if (comment.test(lineText)) {
          let commentIndex = lineText.indexOf(commentEnd);
          while (commentIndex === -1 && lineCurrent < lineCount) {
            lineText = editor.document.lineAt(++lineCurrent).text;
            commentIndex = lineText.indexOf(commentEnd);
          }
          lineText = lineText.substr(commentIndex + 3, lineText.length);
        }

        // 处理结束标签
        const endTagMatch = lineText.match(endTag);
        if (endTagMatch) {
          hasEndTag = true;
          if (Array.isArray(tagStack)) {
            let tagIndex = tagStack.length;
            if (tagIndex > 0) {
              let isTagMatch = false;
              while (tagIndex > 0 && !isTagMatch) {
                let tag = tagStack[tagIndex - 1];
                if (tag === endTagMatch[2]) {
                  isTagMatch = true;
                }
                tagStack.pop();
                --tagIndex;
              }
            }
          }
          let endAdvance = lineText.indexOf(endTagMatch[1]) + endTagMatch[1].length;
          col += endAdvance;
          lineText = lineText.substr(endAdvance, lineText.length);
        }

        if (Array.isArray(tagStack) && tagStack.length === 0) {
          editor.selection = new Selection(beginPosition, new Position(lineCurrent, col));
          break;
        }

        // 处理开始标签
        const startTagMatch = lineText.match(startTagOpen);
        if (startTagMatch) {
          hasTag = true;
          if (isNoIncludeTag) {
            let lineTextCur = editor.document.lineAt(lineCurrent).text;
            lineText = lineTextCur.substr(0, col);
            let indexLast = lineText.lastIndexOf(">");
            while (indexLast === -1 && lineCurrent > 0) {
              --lineCurrent;
              lineText = editor.document.lineAt(lineCurrent).text;
              indexLast = lineText.lastIndexOf(">");
            }
            editor.selection = new Selection(
              beginPosition,
              new Position(lineCurrent, indexLast + 2)
            );
            break;
          }

          if (Array.isArray(tagStack)) {
            tagStack.push(startTagMatch[1]);
          } else {
            tagStack = [startTagMatch[1]];
            if (noIncludeTags.indexOf(startTagMatch[1]) !== -1) {
              isNoIncludeTag = true;
            }
          }

          const startAdvance = lineText.indexOf(startTagMatch[1]) + startTagMatch[1].length;
          col += startAdvance;
          lineText = lineText.substr(startAdvance, lineText.length);
        }

        // 处理自闭合标签
        if (lineText.indexOf("/>") !== -1 && Array.isArray(tagStack) && tagStack.length === 1) {
          let tagCloseIndex = lineText.indexOf("/>");
          let prevText = lineText.substr(0, tagCloseIndex + 2);
          let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
          if (!tagReg.test(prevText)) {
            tagStack.pop();
          }
          editor.selection = new Selection(
            beginPosition,
            new Position(lineCurrent, col + tagCloseIndex + 2)
          );
          break;
        }

        if (!lineText && lineCurrent < lineCount && tagStack!.length > 0) {
          do {
            ++lineCurrent;
            lineText = editor.document.lineAt(lineCurrent).text;
          } while (!lineText && lineCurrent < lineCount);
          col = lineText.indexOf(lineText.trim());
          lineText = lineText.trim();
          continue;
        }

        if (!hasTag && !hasEndTag && lineText.length > 0) {
          let noTagIndex = lineText.indexOf(lineText, 1);
          if (noTagIndex === -1) {
            if (lineCurrent < lineCount) {
              do {
                ++lineCurrent;
                lineText = editor.document.lineAt(lineCurrent).text;
              } while (!lineText && lineCurrent < lineCount);
              col = lineText.indexOf(lineText.trim());
              lineText = lineText.trim();
            } else {
              break;
            }
          } else {
            lineText = lineText.substr(noTagIndex, lineText.length);
          }
        }
      } else if (textTagPos > 0) {
        lineText = lineText.substr(textTagPos, lineText.length);
        col += textTagPos;
      } else if (textTagPos < 0) {
        if (lineCurrent < lineCount) {
          // 检查自闭合标签
          if (lineText.indexOf("/>") !== -1 && Array.isArray(tagStack) && tagStack.length > 0) {
            let tagCloseIndex = lineText.indexOf("/>");
            let prevText = lineText.substr(0, tagCloseIndex + 2);
            let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
            if (!tagReg.test(prevText)) {
              tagStack.pop();
            }
            if (tagStack.length === 0) {
              editor.selection = new Selection(
                beginPosition,
                new Position(lineCurrent, col + tagCloseIndex + 2)
              );
              break;
            }
          }
          do {
            ++lineCurrent;
            lineText = editor.document.lineAt(lineCurrent).text;
            if (lineText.replace(/\s/gi, "") === "") {
              lineText = "";
            }
          } while (!lineText && lineCurrent < lineCount);
          col = lineText.indexOf(lineText.trim());
          lineText = lineText.trim();
        } else {
          lineText = "";
        }
      }
    }
  }

  /**
   * 选择JavaScript代码块（函数、数组等）
   */
  static selectJsBlock(
    editor: TextEditor,
    lineText: string,
    startPosition: Position,
    type: string
  ): void {
    let lineCount = editor.document.lineCount;
    let lineCurrent = startPosition.line;
    let braceLeftCount = 0;
    let tagLeft = "{";
    let tagRight = "}";

    if (type === "array") {
      tagLeft = "[";
      tagRight = "]";
    }

    while (lineCurrent <= lineCount) {
      let pos: number = 0;

      while (
        (lineText.indexOf(tagLeft, pos) !== -1 || lineText.indexOf(tagRight, pos) !== -1) &&
        pos < lineText.length
      ) {
        let i = -1;

        // 查找左标签
        if (lineText.indexOf(tagLeft, pos) !== -1) {
          i = lineText.indexOf(tagLeft, pos);
        }

        // 查找右标签
        if (lineText.indexOf(tagRight, pos) !== -1) {
          if (i === -1 || i > lineText.indexOf(tagRight, pos)) {
            // 右标签在前或只有右标签
            --braceLeftCount;
            pos = lineText.indexOf(tagRight, pos) + 1;
          } else {
            ++braceLeftCount;
            pos = i + 1;
          }
        } else {
          // 只有左标签
          if (i !== -1) {
            ++braceLeftCount;
            pos = i + 1;
          }
        }

        if (braceLeftCount === 0) {
          break;
        }
      }

      if (braceLeftCount === 0) {
        let extra = 0;
        let textExtra = editor.document.lineAt(lineCurrent).text;

        if (lineCurrent === startPosition.line) {
          extra = textExtra.indexOf(lineText);
        }

        if (
          type === "function" &&
          textExtra[pos + extra - 1] === "}" &&
          textExtra[pos + extra] === ")"
        ) {
          extra += 1;
        }

        editor.selection = new Selection(startPosition, new Position(lineCurrent, pos + extra));
        return;
      }

      ++lineCurrent;
      if (lineCount >= lineCurrent) {
        lineText = editor.document.lineAt(lineCurrent).text;
      }
    }
  }

  /**
   * 选择行内代码块（引号、括号等）
   */
  static selectLineBlock(editor: TextEditor, lineText: string, startPosition: Position): void {
    const { TAG_SELECTORS, TAG_CLOSE_MAP } = RegexPatterns;

    let pos = startPosition.character - 1;
    let endTag = "";
    let beginPos = 0;
    let endPos = 0;
    let inBeginTags: (string | number)[] = [];
    let includeTags = false;

    beginPos = pos;

    // 向左查找开始标签
    while (pos >= 0) {
      if (TAG_SELECTORS.indexOf(lineText[pos]) !== -1) {
        endTag = lineText[pos];
        break;
      }
      --pos;
    }

    if (beginPos === pos) {
      includeTags = true;
      beginPos = pos;
    } else {
      beginPos = pos + 1;
    }

    // 向右查找结束标签
    if (endTag.length > 0) {
      pos = startPosition.character;

      if (endTag === ">") {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos];
          if ((txt === TAG_CLOSE_MAP[endTag] || txt === ">") && pos > beginPos) {
            break;
          }
          ++pos;
        }
      } else {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos];

          if (
            inBeginTags.length === 0 &&
            (txt === TAG_CLOSE_MAP[endTag] || txt === ">") &&
            pos > beginPos
          ) {
            break;
          }

          if (
            inBeginTags.length > 0 &&
            TAG_CLOSE_MAP[inBeginTags[inBeginTags.length - 1] as string] === txt
          ) {
            inBeginTags.pop();
          } else if (TAG_SELECTORS.indexOf(txt) !== -1 && txt !== " ") {
            inBeginTags.push(txt);
          }

          ++pos;
        }
      }
    }

    includeTags ? (endPos = pos + 1) : (endPos = pos);
    editor.selection = new Selection(
      new Position(startPosition.line, beginPos),
      new Position(startPosition.line, endPos)
    );
  }
}
