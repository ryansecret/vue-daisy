// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import DocumentHoverProvider from './provider/documentHoverProvider';
import ElementCompletionItemProvider from './provider/elementCompletionItemProvider';
import { App } from './app';
import { appendFile } from 'fs';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const app = new App();

  let disposable = vscode.commands.registerCommand('vue-daisy.ryan', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from ryan!');
  });

  const functionCompletionDisposable = vscode.commands.registerCommand('vue-daisy.functionCompletion', () => {
    app.autoComplement();
  });

  let registrationHover = vscode.languages.registerHoverProvider('vue', new DocumentHoverProvider());
  const elementCompletion = vscode.languages.registerCompletionItemProvider(['vue', 'javascript', 'html'], new ElementCompletionItemProvider(), '', ' ', ':', '<', '"', "'", '/', '@', '(', '>', '{');

  let vueLanguageConfig = vscode.languages.setLanguageConfiguration('vue', { wordPattern: app.WORD_REG });
  context.subscriptions.push(app, disposable, registrationHover, elementCompletion, vueLanguageConfig, functionCompletionDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
