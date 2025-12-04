/**
 * 核心类型定义文件
 */

/**
 * 文件信息接口
 */
export interface FileInfo {
  name: string;
  path: string;
}

/**
 * 组件配置接口
 */
export interface ComponentConfig {
  path?: string;
  alias?: string;
}

/**
 * Vue组件配置检查结果
 */
export interface ComponentsConfigCheck {
  isInlineComponents: boolean;
  isComponentsStart: boolean;
  isComponentsEnd: boolean;
}

/**
 * 编辑器位置信息
 */
export interface EditorPosition {
  line: number;
  character: number;
}

/**
 * 代码块类型
 */
export type CodeBlockType = "function" | "array" | "json" | "html";

/**
 * 标签命名方式
 */
export type TagNameWay = "kebabCase" | "camelCase" | "CamelCase";

/**
 * 错误处理结果
 */
export interface ErrorResult {
  success: boolean;
  error?: Error;
  message?: string;
}

/**
 * 缓存配置
 */
export interface CacheConfig {
  max: number;
  maxAge: number;
}

/**
 * VSCode配置接口
 */
export interface VueDaisyConfig {
  alias?: { [key: string]: string };
  componentPath?: string[];
  componentDirRgex?: string;
  tagNameWay?: TagNameWay;
  componentPrefix?: ComponentConfig;
  componentIgnore?: string | string[];
}

/**
 * 遍历条件函数类型
 */
export type TraverseCondition = (rootPath: string) => boolean;

/**
 * 删除操作选项
 */
export interface DeleteOptions {
  preserveSelection?: boolean;
  handleMultipleSelections?: boolean;
}

/**
 * 格式化选项
 */
export interface FormatOptions {
  tabSize?: number;
  useSpaces?: boolean;
  insertFinalNewline?: boolean;
}
