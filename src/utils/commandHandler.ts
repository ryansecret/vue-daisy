import { commands, workspace } from "vscode";

/**
 * 命令处理器 - 处理VSCode命令执行
 */
export class CommandHandler {
  /**
   * 执行普通命令
   */
  static asNormal(key: string, modifiers?: string): Thenable<unknown> | undefined {
    switch (key) {
      case "enter":
        if (modifiers === "ctrl") {
          return commands.executeCommand("editor.action.insertLineAfter");
        } else {
          return commands.executeCommand("type", { source: "keyboard", text: "\n" });
        }
      case "tab":
        if (workspace.getConfiguration("emmet").get<boolean>("triggerExpansionOnTab")) {
          return commands.executeCommand("editor.emmet.action.expandAbbreviation");
        } else if (modifiers === "shift") {
          return commands.executeCommand("editor.action.outdentLines");
        } else {
          return commands.executeCommand("tab");
        }
      case "backspace":
        return commands.executeCommand("deleteLeft");
      default:
        return undefined;
    }
  }
}
