/**
 * Vue Daisy VSCode 扩展入口文件
 *
 * 该扩展为 Vue.js 开发提供智能提示和代码片段支持
 * 支持的 UI 库: Element UI、@jdcloud/jelement-biz、@jdcloud/dbUI、iView2、VUX
 *
 * @author Ryan Secret
 * @version 1.16.28
 * @since VSCode 1.64.0
 */

import * as vscode from "vscode";
import { App } from "./app";
import DocumentHoverProvider from "./provider/documentHoverProvider";
import ElementCompletionItemProvider from "./provider/elementCompletionItemProvider";

// ============================================================================
// 类型定义和接口
// ============================================================================

/**
 * 扩展状态管理接口
 */
interface ExtensionState {
  app: App | null;
  providers: vscode.Disposable[];
  configWatcher: vscode.Disposable | null;
  isActivated: boolean;
}

/**
 * 扩展配置接口
 */
interface VueDaisyConfiguration {
  alias: Record<string, string>;
  componentPath: string[];
  componentDirRegex: string;
  tagNameWay: "kebabCase" | "camelCase" | "CamelCase";
}

// ============================================================================
// 全局状态管理
// ============================================================================

/**
 * 扩展全局状态
 */
const extensionState: ExtensionState = {
  app: null,
  providers: [],
  configWatcher: null,
  isActivated: false
};

/**
 * 扩展配置键名常量
 */
const CONFIG_SECTION = "vue-daisy";
const EXTENSION_ID = "vue-daisy";

// ============================================================================
// 核心功能函数
// ============================================================================

/**
 * 获取扩展配置
 * @returns Vue Daisy 扩展配置对象
 */
function getExtensionConfiguration(): VueDaisyConfiguration {
  const config = vscode.workspace.getConfiguration(CONFIG_SECTION);

  return {
    alias: config.get("alias", { "@": "src" }),
    componentPath: config.get("componentPath", []),
    componentDirRegex: config.get("componentDirRegex", ".*/components/.*"),
    tagNameWay: config.get("tagNameWay", "CamelCase")
  };
}

/**
 * 初始化核心应用实例
 * @param context VSCode 扩展上下文
 * @returns 初始化的 App 实例
 */
function initializeApp(context: vscode.ExtensionContext): App {
  try {
    const app = new App();
    extensionState.app = app;

    // 记录应用初始化成功
    console.log("[Vue Daisy] App instance initialized successfully");

    return app;
  } catch (error) {
    const errorMessage = `Failed to initialize Vue Daisy app: ${
      error instanceof Error ? error.message : String(error)
    }`;
    console.error("[Vue Daisy]", errorMessage);
    vscode.window.showErrorMessage(errorMessage);
    throw error;
  }
}

/**
 * 注册语言服务提供器
 * @param context VSCode 扩展上下文
 * @returns 注册的 Disposable 数组
 */
function registerLanguageProviders(context: vscode.ExtensionContext): vscode.Disposable[] {
  const providers: vscode.Disposable[] = [];

  try {
    // 注册文档悬停提供器
    const hoverProvider = vscode.languages.registerHoverProvider(
      "vue",
      new DocumentHoverProvider()
    );
    providers.push(hoverProvider);
    console.log("[Vue Daisy] Document hover provider registered");

    // 注册元素补全提供器
    const completionProvider = vscode.languages.registerCompletionItemProvider(
      ["vue", "javascript", "html"],
      new ElementCompletionItemProvider(),
      "",
      " ",
      ":",
      "<",
      '"',
      "'",
      "/",
      "@",
      "(",
      ">",
      "{"
    );
    providers.push(completionProvider);
    console.log("[Vue Daisy] Element completion provider registered");

    extensionState.providers = providers;
    return providers;
  } catch (error) {
    // 清理已注册的提供器
    providers.forEach(provider => {
      try {
        provider.dispose();
      } catch (disposeError) {
        console.error("[Vue Daisy] Error disposing provider:", disposeError);
      }
    });

    const errorMessage = `Failed to register language providers: ${
      error instanceof Error ? error.message : String(error)
    }`;
    console.error("[Vue Daisy]", errorMessage);
    vscode.window.showErrorMessage(errorMessage);
    throw error;
  }
}

/**
 * 注册扩展命令
 * @param context VSCode 扩展上下文
 * @returns 注册的命令 Disposable 数组
 */
function registerCommands(context: vscode.ExtensionContext): vscode.Disposable[] {
  const commands: vscode.Disposable[] = [];

  try {
    // 注册测试命令
    const testCommand = vscode.commands.registerCommand(`${EXTENSION_ID}.ryan`, () => {
      try {
        vscode.window.showInformationMessage("Hello World from Vue Daisy!");
        console.log("[Vue Daisy] Test command executed successfully");
      } catch (error) {
        console.error("[Vue Daisy] Error executing test command:", error);
        vscode.window.showErrorMessage("Failed to execute Vue Daisy test command");
      }
    });
    commands.push(testCommand);

    // 可以在这里添加更多命令
    // const anotherCommand = vscode.commands.registerCommand(`${EXTENSION_ID}.anotherCommand`, () => {
    //   // 命令实现
    // });
    // commands.push(anotherCommand);

    console.log(`[Vue Daisy] ${commands.length} commands registered successfully`);
    return commands;
  } catch (error) {
    // 清理已注册的命令
    commands.forEach(command => {
      try {
        command.dispose();
      } catch (disposeError) {
        console.error("[Vue Daisy] Error disposing command:", disposeError);
      }
    });

    const errorMessage = `Failed to register commands: ${
      error instanceof Error ? error.message : String(error)
    }`;
    console.error("[Vue Daisy]", errorMessage);
    vscode.window.showErrorMessage(errorMessage);
    throw error;
  }
}

/**
 * 设置配置监听器
 * @param context VSCode 扩展上下文
 * @returns 配置监听器 Disposable
 */
function setupConfigurationWatcher(context: vscode.ExtensionContext): vscode.Disposable {
  try {
    const configWatcher = vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration(CONFIG_SECTION)) {
        try {
          console.log("[Vue Daisy] Configuration changed, reloading...");

          // 获取新配置
          const newConfig = getExtensionConfiguration();

          // 通知用户配置已更新
          vscode.window.showInformationMessage("Vue Daisy configuration updated");

          // 这里可以添加配置更新后的处理逻辑
          // 例如：重新初始化某些组件、更新缓存等
        } catch (error) {
          console.error("[Vue Daisy] Error handling configuration change:", error);
          vscode.window.showErrorMessage("Failed to handle Vue Daisy configuration change");
        }
      }
    });

    extensionState.configWatcher = configWatcher;
    console.log("[Vue Daisy] Configuration watcher setup successfully");

    return configWatcher;
  } catch (error) {
    const errorMessage = `Failed to setup configuration watcher: ${
      error instanceof Error ? error.message : String(error)
    }`;
    console.error("[Vue Daisy]", errorMessage);
    vscode.window.showErrorMessage(errorMessage);
    throw error;
  }
}

/**
 * 记录扩展激活信息
 * @param context VSCode 扩展上下文
 */
function logActivationInfo(context: vscode.ExtensionContext): void {
  try {
    const config = getExtensionConfiguration();

    console.log("[Vue Daisy] Extension activation info:", {
      extensionId: EXTENSION_ID,
      version: "1.16.28",
      vsCodeVersion: vscode.version,
      workspaceRoot: vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || "No workspace",
      configuration: config,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("[Vue Daisy] Error logging activation info:", error);
  }
}

// ============================================================================
// 扩展生命周期函数
// ============================================================================

/**
 * 扩展激活函数
 * 当扩展首次被激活时调用
 *
 * @param context VSCode 扩展上下文，包含扩展的生命周期管理和资源
 * @returns Promise<void>
 */
export async function activate(context: vscode.ExtensionContext): Promise<void> {
  try {
    console.log("[Vue Daisy] Starting extension activation...");

    // 防止重复激活
    if (extensionState.isActivated) {
      console.warn("[Vue Daisy] Extension is already activated");
      return;
    }

    // 记录激活信息
    logActivationInfo(context);

    // 初始化核心应用
    const app = initializeApp(context);

    // 注册语言服务提供器
    const providers = registerLanguageProviders(context);

    // 注册扩展命令
    const commands = registerCommands(context);

    // 设置配置监听器
    const configWatcher = setupConfigurationWatcher(context);

    // 将所有 Disposable 添加到上下文订阅中
    context.subscriptions.push(app, configWatcher, ...providers, ...commands);

    // 标记扩展已激活
    extensionState.isActivated = true;

    console.log("[Vue Daisy] Extension activated successfully");

    // 显示激活成功消息（仅在开发模式下）
    if (process.env.NODE_ENV === "development") {
      vscode.window.showInformationMessage("Vue Daisy extension activated successfully!");
    }
  } catch (error) {
    const errorMessage = `Vue Daisy extension activation failed: ${
      error instanceof Error ? error.message : String(error)
    }`;
    console.error("[Vue Daisy]", errorMessage);

    // 尝试清理已初始化的资源
    await deactivate();

    // 显示错误消息给用户
    vscode.window.showErrorMessage(errorMessage);

    // 重新抛出错误以便 VSCode 能够正确处理
    throw error;
  }
}

/**
 * 扩展停用函数
 * 当扩展被停用时调用，用于清理资源
 *
 * @returns Promise<void>
 */
export async function deactivate(): Promise<void> {
  try {
    console.log("[Vue Daisy] Starting extension deactivation...");

    // 防止重复停用
    if (!extensionState.isActivated) {
      console.warn("[Vue Daisy] Extension is not activated");
      return;
    }

    // 清理配置监听器
    if (extensionState.configWatcher) {
      try {
        extensionState.configWatcher.dispose();
        extensionState.configWatcher = null;
        console.log("[Vue Daisy] Configuration watcher disposed");
      } catch (error) {
        console.error("[Vue Daisy] Error disposing configuration watcher:", error);
      }
    }

    // 清理语言服务提供器
    if (extensionState.providers.length > 0) {
      try {
        extensionState.providers.forEach(provider => provider.dispose());
        extensionState.providers = [];
        console.log("[Vue Daisy] Language providers disposed");
      } catch (error) {
        console.error("[Vue Daisy] Error disposing language providers:", error);
      }
    }

    // 清理应用实例
    if (extensionState.app) {
      try {
        extensionState.app.dispose();
        extensionState.app = null;
        console.log("[Vue Daisy] App instance disposed");
      } catch (error) {
        console.error("[Vue Daisy] Error disposing app instance:", error);
      }
    }

    // 重置状态
    extensionState.isActivated = false;

    console.log("[Vue Daisy] Extension deactivated successfully");
  } catch (error) {
    console.error("[Vue Daisy] Error during extension deactivation:", error);

    // 即使出错也要重置状态
    extensionState.isActivated = false;
    extensionState.app = null;
    extensionState.providers = [];
    extensionState.configWatcher = null;
  }
}

// ============================================================================
// 导出模块
// ============================================================================

/**
 * 获取扩展状态（用于测试和调试）
 * @returns 当前扩展状态的只读副本
 */
export function getExtensionState(): Readonly<ExtensionState> {
  return Object.freeze({ ...extensionState });
}

/**
 * 获取当前扩展配置（用于测试和调试）
 * @returns 当前扩展配置
 */
export function getCurrentConfiguration(): VueDaisyConfiguration {
  return getExtensionConfiguration();
}
