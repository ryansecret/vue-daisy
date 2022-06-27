'use strict';
import * as vscode from 'vscode';
import {App, ElementCompletionItemProvider, DocumentHoverProvider } from './app';
import { vueHelperDefinitionProvider } from './definitionProvider'
import { JsCompletionItemProvider } from './js-complete'
import { PxRem } from './px-rem';

export function activate(context: vscode.ExtensionContext) {
    let app = new App();
    let completionItemProvider = new ElementCompletionItemProvider();
    let registrationHover = vscode.languages.registerHoverProvider('vue', new DocumentHoverProvider)
    let pxRem = new PxRem()
    let jsCompletionItemProvider = new JsCompletionItemProvider();

    // 为标签、属性提示提供自动完成功能, 关闭标签功能
    let completion = vscode.languages.registerCompletionItemProvider(['vue', 'javascript', 'html'], completionItemProvider, '' ,':', '<', '"', "'", '/', '@', '(', '>', '{');
    let vueLanguageConfig = vscode.languages.setLanguageConfiguration('vue', {wordPattern: app.WORD_REG});

    let jsCompletion = vscode.languages.registerCompletionItemProvider(['javascript', 'html', 'vue'], jsCompletionItemProvider, '.', '(')

    // 函数补全函数
    let functionCompletionDisposable = vscode.commands.registerCommand('vue-dasiy.functionCompletion', () => {
        app.autoComplement()
    })

    // 删除处理函数
    let deleteCompleteDisposable = vscode.commands.registerCommand('vue-dasiy.deleteComplete', () => {
        app.deleteComplete()
    })

    // 格式化html标签
    // let tagFormatDisposable = vscode.commands.registerCommand('vue-dasiy.tagFormat', () => {
    //     app.tagFormat()
    // })

    // 代码块选择
    let blockSelectDisposable = vscode.commands.registerCommand('vue-dasiy.blockSelect', () => {
        app.blockSelect()
    })

    // px、rem转化函数
    let pxRemDisposable = vscode.commands.registerCommand('vue-dasiy.pxRem', () => {
        pxRem.handle()
    })

    // pxToRem
    let pxToRemDisposable = vscode.commands.registerCommand('vue-dasiy.pxToRem', () => {
        pxRem.handlePxToRem('px')
    })

    // remToPx
    let remToPxDisposable = vscode.commands.registerCommand('vue-dasiy.remToPx', () => {
        pxRem.handlePxToRem('rem')
    })

    // 到达定义函数
    let vueHelperDefinition = vscode.languages.registerDefinitionProvider(['vue', 'javascript', 'html'], new vueHelperDefinitionProvider())
    context.subscriptions.push(app, completion, vueLanguageConfig, registrationHover, functionCompletionDisposable, deleteCompleteDisposable, vueHelperDefinition, pxRemDisposable, pxToRemDisposable, remToPxDisposable, blockSelectDisposable, jsCompletion);
}

// this method is called when your extension is deactivated
export function deactivate() {
}