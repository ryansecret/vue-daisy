import { Interface } from 'readline';
import { window, commands, Disposable, workspace, Position, CompletionItemKind, SnippetString, Range, Selection, TextEditor } from 'vscode';

import Documents from './documents';
import * as fs from 'fs';
import * as path from 'path';
import * as LRU from 'lru-cache';
import { serialize } from 'v8';
import { first } from 'lodash';
const cache = new LRU({ max: 30, maxAge: 5000 });
interface FileInfo {
  name: string,
  path: string
}

export class App {
  private _disposable!: Disposable;
  private static innerIgonre = ['node_modules', 'dist', 'build'];
  public WORD_REG: RegExp = /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;
  public static vueFiles: FileInfo[] = [];
  public static tagNameWay = 'kebabCase';

  asNormal(key: string, modifiers?: string) {
    switch (key) {
      case 'enter':
        if (modifiers === 'ctrl') {
          return commands.executeCommand('editor.action.insertLineAfter');
        } else {
          return commands.executeCommand('type', { source: 'keyboard', text: '\n' });
        }
      case 'tab':
        if (workspace.getConfiguration('emmet').get<boolean>('triggerExpansionOnTab')) {
          return commands.executeCommand('editor.emmet.action.expandAbbreviation');
        } else if (modifiers === 'shift') {
          return commands.executeCommand('editor.action.outdentLines');
        } else {
          return commands.executeCommand('tab');
        }
      case 'backspace':
        return commands.executeCommand('deleteLeft');
    }
  }

  // 获取光标选中范围内容
  getSeletedText() {
    let editor = window.activeTextEditor;

    if (!editor) { return; }

    let selection = editor.selection;

    if (selection.isEmpty) {
      let text = [];
      let range = editor.document.getWordRangeAtPosition(selection.start, this.WORD_REG);

      return editor.document.getText(range);
    } else {
      return editor.document.getText(selection);
    }
  }

  // 组件自动导入
  autoImport(txt: string, editor: TextEditor, line: number) {
    let tag = txt.trim().replace(/<([\w-]*)[\s>].*/gi, '$1');
    for (let i = 0; i < App.vueFiles.length; i++) {
      const vf = App.vueFiles[i];
      if (tag === vf.name) {
        let countLine = editor.document.lineCount;
        // 找script位置
        while (!/^\s*<script.*>\s*$/.test(<string>editor.document.lineAt(line).text)) {
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
        while (/import /gi.test(editor.document.lineAt(line).text.trim())) {
          if (countLine > line) {
            line++;
          } else {
            break;
          }
        }
        let name = vf.name.replace(/(-[a-z])/g, (_, c) => {
          return c ? c.toUpperCase() : '';
        }).replace(/-/gi, '');
        let importString = `import ${name} from '${vf.path}'\n`;
        let importLine = line;

        if (line < countLine) {
          let prorityInsertLine = 0;
          let secondInsertLine = 0;
          let hasComponents = false;
          let baseEmpty = '';
          while (!/\s*<\/script>\s*/gi.test(editor.document.lineAt(line).text.trim())) {
            if (/\s*components\s*:\s*{.*}.*/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line).text;
              let preText = text.replace(/\s*}.*$/, '');
              let insertPos = preText.length;
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, '/');
                editBuilder.insert(new Position(importLine, 0), importString);
                editBuilder.insert(new Position(line, insertPos), ', ' + name);
              });
              break;
            }
            if (hasComponents && /\s*},?\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line - 1).text;
              let insertPos = text.indexOf(text.trim());
              let empty = '';
              for (let i = 0; i < insertPos; i++) {
                empty += ' ';
              }
              editor.edit((editBuilder) => {
                importString = importString.replace(/\\/gi, '/');
                editBuilder.insert(new Position(importLine, 0), importString);
                editBuilder.insert(new Position(line - 1, editor.document.lineAt(line - 1).text.length), ',\n' + empty + name);
              });
              break;
            }
            if (/\s*components\s*:\s*{\s*$/gi.test(editor.document.lineAt(line).text.trim())) {
              hasComponents = true;
            }
            if (/\s*export\s*default\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
              secondInsertLine = line;
            }
            if (/\s*data\s*\(\s*\)\s*{\s*/gi.test(editor.document.lineAt(line).text.trim())) {
              let text = editor.document.lineAt(line).text;
              let insertPos = text.indexOf(text.trim());
              for (let i = 0; i < insertPos; i++) {
                baseEmpty += ' ';
              }
              prorityInsertLine = line;
            }
            if (countLine > line) {
              line++;
            } else {
              break;
            }
          }
          if (prorityInsertLine > 0) {
            editor.edit((editBuilder) => {
              importString = importString.replace(/\\/gi, '/');
              editBuilder.insert(new Position(importLine - 1, 0), importString);
              editBuilder.insert(new Position(prorityInsertLine - 1, editor.document.lineAt(prorityInsertLine - 1).text.length), `\n\t${baseEmpty}components: { ${name} },`);
            });
            break;
          }
          if (secondInsertLine > 0) {
            let veturConfig = workspace.getConfiguration('vetur');
            const tabSize = workspace.getConfiguration('editor').tabSize;
            let spaceAdd = '';
            if (veturConfig) {
              for (let i = 0; i < veturConfig.format.options.tabSize; i++) {
                spaceAdd += ' ';
              }
            } else {
              for (let i = 0; i < tabSize; i++) {
                spaceAdd += ' ';
              }
            }
            editor.edit((editBuilder) => {
              importString = importString.replace(/\\/gi, '/');
              editBuilder.insert(new Position(importLine, 0), importString);
              editBuilder.insert(new Position(secondInsertLine, editor.document.lineAt(secondInsertLine).text.length), `\n${spaceAdd}components: { ${name} },`);
            });
          }
        }

        break;
      }
    }
  }

  // 遍历组件
  static traverse(poster: string, search: string): FileInfo[] {
    const config = workspace.getConfiguration('vue-daisy');
    const cacheKey = `file_${poster}_${search}`;
    let components = cache.get<FileInfo[]>(cacheKey);
    if (components) {
      return components;
    }
    let vueFiles: FileInfo[] = [];
    let cond = null;

    if (config.componentPath && Array.isArray(config.componentPath) && config.componentPath.length > 0) {
      cond = function (rootPath: any) {
        return config.componentPath.indexOf(rootPath) !== -1;
      };
    } else {
      let ignore = config.componentIgnore || [];
      if (!Array.isArray(ignore)) {
        ignore = [ignore];
      }
      ignore = ignore.concat(this.innerIgonre);
      cond = function (rootPath: string) {
        return !(rootPath.charAt(0) === '.' || ignore.indexOf(rootPath) !== -1);
      };
    }
    if (workspace.workspaceFolders) {
      let rootPathes = fs.readdirSync(workspace.rootPath!);
      let prefix = config.componentPrefix;
      App.tagNameWay = config.tagNameWay;

      for (let i = 0; i < rootPathes.length; i++) {
        const rootPath = rootPathes[i];
        if (cond(rootPath)) {
          let stat = fs.statSync(path.join(workspace.rootPath!, rootPath));
          if (stat.isDirectory()) {
            App.traverseHandle(rootPath, vueFiles, prefix, poster, search);
          } else {
            App.traverseAdd(rootPath, rootPath, vueFiles, prefix, poster, search);
          }
        }
      }
    }
    cache.set(cacheKey, vueFiles);
    return vueFiles;
  }

  // 遍历处理
  static traverseHandle(postPath: string, vueFiles: FileInfo[], prefix: any, poster: string, search: string) {
    const config = workspace.getConfiguration('vue-daisy');
    let fileDirs = fs.readdirSync(path.join(workspace.rootPath!, postPath)).filter(d => !this.innerIgonre.includes(d));
    for (let i = 0; i < fileDirs.length; i++) {
      const rootPath = fileDirs[i];
      if (!(rootPath.charAt(0) === '.')) {
        let dir = path.join(postPath, rootPath);
        let stat = fs.statSync(path.join(workspace.rootPath!, dir));
        if (stat.isDirectory()) {
          App.traverseHandle(dir, vueFiles, prefix, poster, search);
        } else if (config.componentDirRgex && new RegExp(config.componentDirRgex).test(dir)) {
          App.traverseAdd(rootPath, dir, vueFiles, prefix, poster, search);
        }
      }
    }
  }

  // 遍历添加
  static traverseAdd(rootPath: string, dir: string, vueFiles: FileInfo[], prefix: { path: string; alias: string; }, poster: string, search: string) {
    if (rootPath.endsWith(poster)) {
      let posterReg = new RegExp('-?(.*)' + (poster ? poster : '\\.\\w*') + '$', 'gi');
      let name = rootPath;
      if (poster === '.vue') {
        if (App.tagNameWay === 'kebabCase') {
          name = name.replace(/([A-Z_])/g, (_, c) => {
            if (c === '_') {
              return '-';
            } else {
              return c ? ('-' + c.toLowerCase()) : '';
            }
          }).replace(posterReg, '$1');
        } else if (App.tagNameWay === 'camelCase') {
          name = name.replace(/(-[a-z])/g, (_, c) => {
            return c ? c.toUpperCase() : '';
          }).replace(/-/gi, '').replace(posterReg, '$1');
        } else if (App.tagNameWay === 'CamelCase') {
          name = name.replace(/(-[a-z])/g, (_, c) => {
            return c ? c.toUpperCase() : '';
          }).replace(/-/gi, '').replace(posterReg, '$1');
          if (name && name.length > 0) {
            name = name[0].toUpperCase() + name.substr(1, name.length);
          }
        }
      } else {
        name = name.replace(posterReg, '$1');
      }
      dir = dir.replace(posterReg, '$1');
      if (!search || (search && dir.includes(search))) {
        if (prefix.path === './' || prefix.path === '') {
          vueFiles.push({
            name: name,
            path: prefix.alias + '/' + dir
          });
        } else {
          if (name.toLowerCase() === 'index') {

            name = dir.split('/').reverse()[1];
          }
          vueFiles.push({
            name: name,
            path: dir.replace(new RegExp('^' + prefix.path), prefix.alias)
          });
        }
      }
    }
  }

  // 自动补全
  autoComplement() {

    let editor = window.activeTextEditor;
    if (!editor) { return; }
    let txt = editor.document.lineAt(editor.selection.anchor.line).text;
    if (editor.document.lineCount <= editor.selection.anchor.line + 1) { return; }
    // 组件自动导入
    if (/<.*>\s?<\/.*>/gi.test(txt.trim()) || /<.*\/>/gi.test(txt.trim())) {
      this.autoImport(txt, editor, editor.selection.anchor.line);
      return;
    }
    // 本地文件自动导入
    let line = editor.selection.anchor.line;
    let isLocalImport = line === 0;
    let prevExplore = line > 3 ? 3 : line;
    for (let i = 0; i < prevExplore; i++) {
      if (/.*(<script|import|require).*/.test(editor.document.lineAt(line - i).text)) {
        isLocalImport = true;
        break;
      }
    }
    if (isLocalImport) {
      let search = editor.document.lineAt(line).text.trim();
      if (search) {
        let vueFiles = App.traverse('', search);
        let suggestions = [];
        vueFiles.forEach(vf => {
          suggestions.push({
            label: vf.name,
            sortText: `1000${vf.name}`,
            insertText: new SnippetString(`${vf.name}$0></${vf.name}>`),
            kind: CompletionItemKind.Module,
            detail: 'import internal file',
            documentation: 'import internal file: ' + vf.path
          });
        });
      }
      return;
    }

    let nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 1).text;
    let veturConfig = workspace.getConfiguration('vetur');
    const tabSize = workspace.getConfiguration('editor').tabSize;
    let spaceAdd = '';
    if (veturConfig) {
      for (let i = 0; i < veturConfig.format.options.tabSize; i++) {
        spaceAdd += ' ';
      }
    } else {
      for (let i = 0; i < tabSize; i++) {
        spaceAdd += ' ';
      }
    }
    let baseEmpty = txt.replace(/(\s)\S.*/gi, '$1');
    let replaceTxt = ` {\n${baseEmpty}${spaceAdd}\n${baseEmpty}}`;
    // 本行全是空
    if (/^\s*$/gi.test(txt) || txt === '') {
      replaceTxt = 'name (params)' + replaceTxt;
    } else if (/[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi.test(txt)) {
      // key: value
      replaceTxt = ',\n' + baseEmpty;
    } else if (txt.indexOf(')') === -1) {
      replaceTxt = ' (params)' + replaceTxt;
    }
    // 判断下一行是否是单行注释
    if (/\s*\/\/\s+.*/gi.test(nextLineTxt)) {
      if (editor.document.lineCount <= editor.selection.anchor.line + 2) { return; }
      nextLineTxt = editor.document.lineAt(editor.selection.anchor.line + 2).text;
    }
    // 下一行是一个函数
    if (/.*(.*).*{.*/gi.test(nextLineTxt)) {
      let isCond = false;
      let txtTrim = txt.trim();
      const condList = ['if', 'for', 'while', 'switch'];
      condList.forEach(cond => {
        if (txtTrim.indexOf(cond) === 0) {
          isCond = true;
        }
      });
      if (!isCond) {
        replaceTxt += ',';
      }
    }
    editor.edit((editBuilder) => {
      editBuilder.insert(new Position(editor!.selection.anchor.line, txt.length + 1), replaceTxt);
    });
    let newPosition = editor.selection.active.translate(1, (baseEmpty + spaceAdd).length);
    editor.selection = new Selection(newPosition, newPosition);
  }

  // backspace删除处理
  async deleteComplete() {
    let editor = window.activeTextEditor;
    if (!editor) {
      this.asNormal('backspace');
      return;
    }
    // 多选择点删除处理
    if (window.activeTextEditor!.selections.length > 1) {
      let selections = window.activeTextEditor!.selections;
      let selectionList: Array<Selection> = [];
      for (let index = 0; index < selections.length; index++) {
        const selection = selections[index];
        if (selection.start.line === selection.end.line && selection.start.character === selection.end.character) {
          if (selection.anchor.character > 0) {
            selectionList.push(new Selection(new Position(selection.anchor.line, selection.anchor.character - 1), selection.anchor));
          } else if (selection.anchor.line > 0) {
            let len = editor.document.lineAt(selection.anchor.line - 1).text.length;
            selectionList.push(new Selection(new Position(selection.anchor.line - 1, len), selection.anchor));
          }
        } else {
          selectionList.push(selection);
        }
      }
      await editor.edit((editBuilder) => {
        for (let i = 0; i < selectionList.length; i++) {
          editBuilder.delete(selectionList[i]);
        }
      });
      return;
    }
    if (window.activeTextEditor!.selection.start.line === window.activeTextEditor!.selection.end.line
      && window.activeTextEditor!.selection.start.character === window.activeTextEditor!.selection.end.character) {
      // 首行
      if (editor.selection.anchor.line === 0) {
        if (editor.selection.anchor.character > 0) {
          await editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(new Position(editor!.selection.anchor.line, editor!.selection.anchor.character - 1), editor!.selection.anchor));
          });
        }
      } else {
        let isLineEmpty = editor.document.lineAt(editor.selection.anchor.line).text.trim() === '';
        // 整行都是空格
        if (isLineEmpty) {
          let preText = '';
          let line = editor.selection.anchor.line;
          while (preText.trim() === '' && line >= 0) {
            line -= 1;
            preText = editor.document.lineAt(line).text;
          }
          await editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(new Position(line, preText.length), editor!.selection.anchor));
          });
        } else {
          let startPosition: Position;
          let endPosition: Position = editor.selection.anchor;
          let preLineText = editor.document.getText(new Range(new Position(endPosition.line, 0), endPosition));
          if (endPosition.character === 0 || preLineText.trim() === '') {
            startPosition = new Position(endPosition.line - 1, editor.document.lineAt(endPosition.line - 1).text.length);
          } else {
            startPosition = new Position(endPosition.line, endPosition.character - 1);
            // 对{}, (), [], '', "", <>进行成对删除处理
            let txt = editor.document.getText(new Range(new Position(endPosition.line, endPosition.character - 1), endPosition));
            if (editor.document.lineAt(endPosition.line).text.length > endPosition.character) {
              let nextTxt = editor.document.getText(new Range(endPosition, new Position(endPosition.line, endPosition.character + 1)));
              if ((txt === '{' && nextTxt === '}')
                || (txt === '(' && nextTxt === ')')
                || (txt === '\'' && nextTxt === '\'')
                || (txt === '"' && nextTxt === '"')
                || (txt === '[' && nextTxt === ']')
                || (txt === '<' && nextTxt === '>')) {
                endPosition = new Position(endPosition.line, endPosition.character + 1);
              }
            }
          }
          // return commands.executeCommand('deleteLeft')
          await editor.edit((editBuilder) => {
            editBuilder.delete(new Selection(startPosition, endPosition));
          });
        }
      }
    } else {
      // 选择块
      this.asNormal('backspace');
    }
  }

  // 强化格式化html标签
  tagFormat() {
    let editor = window.activeTextEditor;
    if (!editor) {
      this.asNormal('enter');
      return;
    }
    if (editor.selections.length === 1) {
      let veturConfig = workspace.getConfiguration('vetur');
      const tabSize = workspace.getConfiguration('editor').tabSize;
      let spaceAdd = '';
      if (veturConfig) {
        for (let i = 0; i < veturConfig.format.options.tabSize; i++) {
          spaceAdd += ' ';
        }
      } else {
        for (let i = 0; i < tabSize; i++) {
          spaceAdd += ' ';
        }
      }
      const spaceAddLen = spaceAdd.length;
      let text = editor.document.lineAt(editor.selection.anchor.line).text;
      if (/^\s*<[A-Z][A-Za-z0-9_-]*.*>.*<\/[A-Z][A-Za-z0-9_-]*>\s*$/g.test(text)) {
        let space = text.replace(/^(\s*)[a-zA-Z-_<].*/g, '$1');
        let content = `\n${space}${spaceAdd}\n${space}`;
        editor.edit((editBuilder) => {
          editBuilder.insert(editor!.selection.anchor, content);
        });
        let newPosition = editor.selection.active.translate(1, space.length + spaceAddLen);
        editor.selection = new Selection(newPosition, newPosition);
      } else {
        this.asNormal('enter');
      }
    } else {
      this.asNormal('enter');
    }
  }

  // 选择html代码块
  selectHtmlBlock(editor: TextEditor, lineText: string, startPosition: Position) {
    const ncname = '[a-zA-Z_][\\w\\-\\.]*';
    const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
    const startTagOpen = new RegExp('^<' + qnameCapture);
    const endTag = new RegExp('^(<\\/' + qnameCapture + '[^>]*>)');
    const comment = /^<!--/;
    const commentEnd = '-->';
    const lineCount = editor.document.lineCount;
    let lineCurrent = startPosition.line;

    let isNoIncludeTag = false;
    let tagStack = null;
    let col = lineText.indexOf(lineText.trim()) + startPosition.character;
    let beginPosition = new Position(startPosition.line, startPosition.character + lineText.length - lineText.replace(/\s*(.*)/, '$1').length);
    lineText = lineText.trim();
    let noIncludeTags = ['input', 'img'];

    while (lineText) {
      let textTagPos = lineText.indexOf('<');
      if (textTagPos === 0) {
        let hasEndTag = false;
        let hasTag = false;
        if (comment.test(lineText)) {
          let commentIndex = lineText.indexOf(commentEnd);
          while (commentIndex === -1 && lineCurrent < lineCount) {
            lineText = editor.document.lineAt(++lineCurrent).text;
            commentIndex = lineText.indexOf(commentEnd);
          }
          lineText = lineText.substr(commentIndex + 3, lineText.length);
        }
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

        const startTagMatch = lineText.match(startTagOpen);
        if (startTagMatch) {
          hasTag = true;
          if (isNoIncludeTag) {
            let lineTextCur = editor.document.lineAt(lineCurrent).text;
            lineText = lineTextCur.substr(0, col);
            let indexLast = lineText.lastIndexOf('>');
            while (indexLast === -1 && lineCurrent > 0) {
              --lineCurrent;
              lineText = editor.document.lineAt(lineCurrent).text;
              indexLast = lineText.lastIndexOf('>');
            }
            editor.selection = new Selection(beginPosition, new Position(lineCurrent, indexLast + 2));
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
        if (lineText.indexOf('/>') !== -1 && Array.isArray(tagStack) && tagStack.length === 1) {
          let tagCloseIndex = lineText.indexOf('/>');
          let prevText = lineText.substr(0, tagCloseIndex + 2);
          let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
          if (!tagReg.test(prevText)) {
            tagStack.pop();
          }
          editor.selection = new Selection(beginPosition, new Position(lineCurrent, col + tagCloseIndex + 2));
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
          // 一行最前面是否有 />
          if (lineText.indexOf('/>') !== -1 && Array.isArray(tagStack) && tagStack.length > 0) {
            let tagCloseIndex = lineText.indexOf('/>');
            let prevText = lineText.substr(0, tagCloseIndex + 2);
            let tagReg = /<([\w-]+)(\s*|(\s+[\w-_:@\.]+(=("[^"]*"|'[^']*'))?)+)\s*(\/)?>/gim;
            if (!tagReg.test(prevText)) {
              tagStack.pop();
            }
            if (tagStack.length === 0) {
              editor.selection = new Selection(beginPosition, new Position(lineCurrent, col + tagCloseIndex + 2));
              break;
            }
          }
          do {
            ++lineCurrent;
            lineText = editor.document.lineAt(lineCurrent).text;
            if (lineText.replace(/\s/gi, '') === '') {
              lineText = '';
            }
          } while (!lineText && lineCurrent < lineCount);
          col = lineText.indexOf(lineText.trim());
          lineText = lineText.trim();
        } else {
          lineText = '';
        }
      }
    }
  }

  // 选择函数块
  selectJsBlock(editor: TextEditor, lineText: string, startPosition: Position, type: string) {
    let lineCount = editor.document.lineCount;
    let lineCurrent = startPosition.line;
    let braceLeftCount = 0;
    let tagLeft = '{';
    let tagRight = '}';
    if (type === 'array') {
      tagLeft = '[';
      tagRight = ']';
    }
    while (lineCurrent <= lineCount) {
      let pos: number = 0;
      while ((lineText.indexOf(tagLeft, pos) !== -1 || lineText.indexOf(tagRight, pos) !== -1) && pos < lineText.length) {
        let i = -1;
        // 左标签
        if (lineText.indexOf(tagLeft, pos) !== -1) {
          i = lineText.indexOf(tagLeft, pos);
        }
        // 右标签
        if (lineText.indexOf(tagRight, pos) !== -1) {
          if (i === -1 || i > lineText.indexOf(tagRight, pos)) {
            // 左标签不存在、左右标签都存在，右标签在前
            --braceLeftCount;
            pos = lineText.indexOf(tagRight, pos) + 1;
          } else {
            ++braceLeftCount;
            pos = i + 1;
          }
        } else {
          // 存在左标签
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
        if (type === 'function' && textExtra[pos + extra - 1] === '}' && textExtra[pos + extra] === ')') {
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
    return;
  }

  selectLineBlock(editor: TextEditor, lineText: String, startPosition: Position) {
    // "" '' () {}, >< 空格
    // 1. 遍历左侧查询结束标签
    const TAGS = ["\"", "'", "(", "{", "[", " ", "`", ">"];
    const TAGS_CLOSE: any = {
      "\"": "\"",
      "'": "'",
      "(": ")",
      "{": "}",
      "[": "]",
      " ": " ",
      "`": "`",
      ">": "<"
    };
    let pos = startPosition.character - 1;
    let endTag = '',
      beginPos = 0,
      endPos = 0,
      inBeginTags: (string | number)[] = [],
      includeTags = false;
    beginPos = pos;
    while (pos >= 0) {
      if (TAGS.indexOf(lineText[pos]) !== -1) {
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
    // 存在结束标签
    if (endTag.length > 0) {
      pos = startPosition.character;
      if (endTag === '>') {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos];
          if ((txt === TAGS_CLOSE[endTag] || txt === '>') && pos > beginPos) {
            break;
          }
          ++pos;
        }
      } else {
        while (pos <= lineText.length && pos >= 0) {
          let txt = lineText[pos];
          if (inBeginTags.length === 0 && (txt === TAGS_CLOSE[endTag] || txt === '>') && pos > beginPos) {
            break;
          }
          if (inBeginTags.length > 0 && TAGS_CLOSE[inBeginTags[inBeginTags.length - 1]] === txt) {
            inBeginTags.pop();
          } else if (TAGS.indexOf(txt) !== -1 && txt !== ' ') {
            inBeginTags.push(txt);
          }

          ++pos;
        }
      }
    }
    includeTags ? (endPos = pos + 1) : (endPos = pos);
    editor.selection = new Selection(new Position(startPosition.line, beginPos), new Position(startPosition.line, endPos));
  }

  // 块选择
  blockSelect() {
    let editor = window.activeTextEditor;
    if (!editor) { return; }

    let startPosition = editor.selection.start;
    let lineTextObj = editor.document.lineAt(startPosition.line);
    let lineText = lineTextObj.text;
    if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'array');
    } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new Position(startPosition.line, startPosition.character - 1), 'array');
    } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === '[') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'array');
    } else if (lineText.length > 0 && startPosition.character === 0 && lineText[startPosition.character] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'json');
    } else if (lineText.length > 0 && startPosition.character > 0 && lineText[startPosition.character - 1] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character - 1, lineText.length), new Position(startPosition.line, startPosition.character - 1), 'json');
    } else if (lineText.length > 0 && startPosition.character < lineText.length && lineText[startPosition.character] === '{') {
      this.selectJsBlock(editor, lineText.substring(startPosition.character, lineText.length), startPosition, 'json');
    } else if (lineText.trim().length > 0 && lineText.trim()[0] === '<' && startPosition.character <= lineText.indexOf('<')) {
      lineText = lineText.substring(startPosition.character, lineText.length);
      this.selectHtmlBlock(editor, lineText, startPosition);
    } else if (lineText.trim().length > 0 && lineText.trim()[0] === '<' && startPosition.character <= lineText.indexOf('<')) {
      lineText = lineText.substring(startPosition.character, lineText.length);
      this.selectHtmlBlock(editor, lineText, startPosition);
    } else if (/^\s*[\sa-zA-Z:_-]*\s*\[\s*$/gi.test(lineText)) {
      this.selectJsBlock(editor, lineText, new Position(startPosition.line, lineText.length - lineText.replace(/\s*/, '').length), 'array');
    } else if ((lineText.trim().length > 0 && /(function|if|for|while)?.+\(.*\)\s*{/gi.test(lineText) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character)))
      || (/^(\s*[\sa-zA-Z_-]*\([\sa-zA-Z_-]*\)\s*{\s*)|(\s*[\sa-zA-Z:_-]*\s*{\s*)$/gi.test(lineText)) && /^\s*(function|if|for|while)?\s*$/g.test(lineText.substr(0, startPosition.character))) {
      this.selectJsBlock(editor, lineText, new Position(startPosition.line, lineText.length - lineText.replace(/\s*/, '').length), 'function');
    } else {
      // 在本行选择
      this.selectLineBlock(editor, lineText, startPosition);
    }
    return;
  }

  dispose() {
    this._disposable.dispose();
  }
}
