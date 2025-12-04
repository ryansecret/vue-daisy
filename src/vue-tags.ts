/**
 * Vue 标签定义聚合模块
 *
 * 该模块负责聚合所有支持的 UI 库的标签定义，为 Vue.js 组件提供智能提示支持
 * 支持的 UI 库包括：Element UI、@jdcloud/jelement-biz、@jdcloud/dbUI、iView2、VUX
 *
 * @author Ryan Secret
 * @version 1.16.28
 * @since VSCode 1.64.0
 */

// ============================================================================
// 导入各 UI 库标签定义
// ============================================================================

import elementTags from "./tags/element";
import vuxTags from "./tags/vux";
import iview2Tags from "./tags/iview2";
import vueTags from "./tags/vue";
import jelementBizTags from "./tags/jelement-biz";
import dbUiTags from "./tags/dbUi";

// ============================================================================
// 类型定义和接口
// ============================================================================

/**
 * 标签定义接口
 * 定义每个标签的属性、描述和框架信息
 */
interface TagDefinition {
  /** 标签支持的属性列表 */
  attributes: string[];
  /** 标签描述信息 */
  description: string;
  /** 所属框架 */
  framework: string;
}

/**
 * 标签集合接口
 * 定义标签名到标签定义的映射关系
 */
interface TagCollection {
  [tagName: string]: TagDefinition;
}

/**
 * UI 库标签模块接口
 * 确保所有导入的标签模块都符合统一的结构
 */
interface UILibraryTags {
  default: TagCollection;
}

// ============================================================================
// 常量定义
// ============================================================================

/**
 * 支持的 UI 库列表
 * 用于日志记录和调试信息
 */
const SUPPORTED_UI_LIBRARIES = [
  "Element UI",
  "@jdcloud/jelement-biz",
  "@jdcloud/dbUI",
  "iView2",
  "VUX",
  "Vue Router"
] as const;

/**
 * 标签合并优先级
 * 数字越大优先级越高，后导入的标签会覆盖先导入的同名标签
 */
const MERGE_PRIORITY = {
  vue: 1, // Vue 核心标签，优先级最低
  vux: 2, // VUX 组件库
  iview2: 3, // iView2 组件库
  element: 4, // Element UI 组件库
  dbUi: 5, // @jdcloud/dbUI 组件库
  jelementBiz: 6 // @jdcloud/jelement-biz 组件库，优先级最高
} as const;

// ============================================================================
// 工具函数
// ============================================================================

/**
 * 验证标签模块结构
 * @param moduleData 标签模块数据
 * @param moduleName 模块名称
 * @returns 是否为有效的标签模块
 */
function validateTagModule(moduleData: any, moduleName: string): boolean {
  try {
    if (!moduleData || typeof moduleData !== "object") {
      console.warn(`[Vue Tags] Invalid module structure for ${moduleName}: not an object`);
      return false;
    }

    // 检查是否包含有效的标签定义
    const tagCount = Object.keys(moduleData).length;
    if (tagCount === 0) {
      console.warn(`[Vue Tags] Empty tag module: ${moduleName}`);
      return false;
    }

    // 验证标签格式（抽样检查前几个标签）
    const sampleTags = Object.entries(moduleData).slice(0, 3);
    for (const [key, value] of sampleTags) {
      if (typeof key !== "string" || !value || typeof value !== "object") {
        console.warn(`[Vue Tags] Invalid tag format in ${moduleName}: ${key}`);
        return false;
      }

      const tag = value as any;
      if (
        !Array.isArray(tag.attributes) ||
        typeof tag.description !== "string" ||
        typeof tag.framework !== "string"
      ) {
        console.warn(`[Vue Tags] Invalid tag structure in ${moduleName}: ${key}`);
        return false;
      }
    }

    console.log(`[Vue Tags] Module ${moduleName} validated successfully (${tagCount} tags)`);
    return true;
  } catch (error) {
    console.error(`[Vue Tags] Error validating module ${moduleName}:`, error);
    return false;
  }
}

/**
 * 安全合并标签对象
 * @param target 目标对象
 * @param source 源对象
 * @param sourceName 源对象名称（用于日志）
 * @returns 合并后的对象
 */
function safelyMergeTags(target: TagCollection, source: any, sourceName: string): TagCollection {
  try {
    if (!validateTagModule(source, sourceName)) {
      console.warn(`[Vue Tags] Skipping invalid module: ${sourceName}`);
      return target;
    }

    let mergedCount = 0;
    let overriddenCount = 0;

    for (const [key, value] of Object.entries(source)) {
      if (target.hasOwnProperty(key)) {
        overriddenCount++;
        console.debug(`[Vue Tags] Overriding tag: ${key} (from ${sourceName})`);
      } else {
        mergedCount++;
      }

      target[key] = value as TagDefinition;
    }

    console.log(
      `[Vue Tags] Merged ${sourceName}: +${mergedCount} new, ~${overriddenCount} overridden`
    );
    return target;
  } catch (error) {
    console.error(`[Vue Tags] Error merging ${sourceName}:`, error);
    return target;
  }
}

/**
 * 生成标签统计信息
 * @param tags 标签集合
 * @returns 统计信息对象
 */
function generateTagStats(tags: TagCollection) {
  try {
    const totalTags = Object.keys(tags).length;
    const frameworkStats: Record<string, number> = {};
    const libraryStats: Record<string, number> = {};

    // 统计各框架和库的标签数量
    for (const [tagName, tagDef] of Object.entries(tags)) {
      // 按框架统计
      frameworkStats[tagDef.framework] = (frameworkStats[tagDef.framework] || 0) + 1;

      // 按标签前缀统计（推测所属库）
      const prefix = tagName.split("-")[0] || "unknown";
      libraryStats[prefix] = (libraryStats[prefix] || 0) + 1;
    }

    const stats = {
      total: totalTags,
      frameworks: frameworkStats,
      libraries: libraryStats,
      supportedLibraries: SUPPORTED_UI_LIBRARIES.length,
      timestamp: new Date().toISOString()
    };

    console.log("[Vue Tags] Statistics:", stats);
    return stats;
  } catch (error) {
    console.error("[Vue Tags] Error generating statistics:", error);
    return {
      total: 0,
      frameworks: {},
      libraries: {},
      supportedLibraries: 0,
      timestamp: new Date().toISOString()
    };
  }
}

// ============================================================================
// 标签聚合逻辑
// ============================================================================

/**
 * 创建聚合标签集合
 * 按照优先级顺序合并各 UI 库的标签定义
 * @returns 聚合后的标签集合
 */
function createAggregatedTags(): TagCollection {
  try {
    console.log("[Vue Tags] Starting tag aggregation...");

    // 初始化空的标签集合
    let aggregatedTags: TagCollection = {};

    // 按优先级顺序合并标签（优先级低的先合并，高的后合并以实现覆盖）
    const mergeSequence = [
      { data: vueTags, name: "Vue Core", priority: MERGE_PRIORITY.vue },
      { data: vuxTags, name: "VUX", priority: MERGE_PRIORITY.vux },
      { data: iview2Tags, name: "iView2", priority: MERGE_PRIORITY.iview2 },
      { data: elementTags, name: "Element UI", priority: MERGE_PRIORITY.element },
      { data: dbUiTags, name: "@jdcloud/dbUI", priority: MERGE_PRIORITY.dbUi },
      { data: jelementBizTags, name: "@jdcloud/jelement-biz", priority: MERGE_PRIORITY.jelementBiz }
    ];

    // 按优先级排序并合并
    mergeSequence
      .sort((a, b) => a.priority - b.priority)
      .forEach(({ data, name }) => {
        aggregatedTags = safelyMergeTags(aggregatedTags, data, name);
      });

    // 生成统计信息
    generateTagStats(aggregatedTags);

    console.log("[Vue Tags] Tag aggregation completed successfully");
    return aggregatedTags;
  } catch (error) {
    console.error("[Vue Tags] Fatal error during tag aggregation:", error);

    // 返回空对象作为降级方案
    return {};
  }
}

// ============================================================================
// 导出聚合标签
// ============================================================================

/**
 * Vue Daisy 扩展支持的所有标签定义
 *
 * 这个对象包含了所有支持的 UI 库的标签定义，用于提供智能提示功能
 * 标签按照优先级进行合并，@jdcloud/jelement-biz 具有最高优先级
 *
 * 支持的 UI 库：
 * - Vue Router (核心路由标签)
 * - VUX (移动端 UI 组件库)
 * - iView2 (桌面端 UI 组件库)
 * - Element UI (流行的桌面端 UI 组件库)
 * - @jdcloud/dbUI (京东云数据库 UI 组件库)
 * - @jdcloud/jelement-biz (京东云业务组件库)
 *
 * @example
 * ```typescript
 * // 使用示例
 * import VueTags from './vue-tags';
 *
 * // 获取特定标签的定义
 * const buttonTag = VueTags['el-button'];
 * console.log(buttonTag.attributes); // ['type', 'size', 'plain', ...]
 * console.log(buttonTag.description); // 'Button 按钮'
 * console.log(buttonTag.framework); // 'element-ui'
 * ```
 */
const VueTags = createAggregatedTags();

// 导出默认对象
export default VueTags;

// ============================================================================
// 附加导出（用于调试和扩展）
// ============================================================================

/**
 * 获取标签统计信息
 * @returns 当前标签集合的统计信息
 */
export function getTagStatistics() {
  return generateTagStats(VueTags);
}

/**
 * 获取支持的 UI 库列表
 * @returns 支持的 UI 库名称数组
 */
export function getSupportedLibraries(): readonly string[] {
  return SUPPORTED_UI_LIBRARIES;
}

/**
 * 检查是否包含特定标签
 * @param tagName 标签名称
 * @returns 是否包含该标签
 */
export function hasTag(tagName: string): boolean {
  return tagName in VueTags;
}

/**
 * 获取特定前缀的所有标签
 * @param prefix 标签前缀（如 'el'、'i'、'db'）
 * @returns 匹配前缀的标签集合
 */
export function getTagsByPrefix(prefix: string): TagCollection {
  const result: TagCollection = {};

  for (const [key, value] of Object.entries(VueTags)) {
    if (key.startsWith(prefix + "-") || key === prefix) {
      result[key] = value;
    }
  }

  return result;
}

/**
 * 获取特定框架的所有标签
 * @param framework 框架名称（如 'element-ui'、'vue'、'iview2'）
 * @returns 匹配框架的标签集合
 */
export function getTagsByFramework(framework: string): TagCollection {
  const result: TagCollection = {};

  for (const [key, value] of Object.entries(VueTags)) {
    if (value.framework === framework) {
      result[key] = value;
    }
  }

  return result;
}

/**
 * 验证标签是否支持特定属性
 * @param tagName 标签名称
 * @param attribute 属性名称
 * @returns 是否支持该属性
 */
export function tagSupportsAttribute(tagName: string, attribute: string): boolean {
  const tag = VueTags[tagName];
  if (!tag) {
    return false;
  }

  return tag.attributes.includes(attribute);
}

/**
 * 搜索标签
 * @param query 搜索关键词
 * @param options 搜索选项
 * @returns 匹配的标签集合
 */
export function searchTags(
  query: string,
  options: {
    framework?: string;
    caseSensitive?: boolean;
    searchInDescription?: boolean;
  } = {}
): TagCollection {
  const result: TagCollection = {};
  const searchQuery = options.caseSensitive ? query : query.toLowerCase();

  for (const [key, value] of Object.entries(VueTags)) {
    // 框架过滤
    if (options.framework && value.framework !== options.framework) {
      continue;
    }

    const tagName = options.caseSensitive ? key : key.toLowerCase();
    const description = options.caseSensitive ? value.description : value.description.toLowerCase();

    // 标签名匹配
    if (tagName.includes(searchQuery)) {
      result[key] = value;
      continue;
    }

    // 描述匹配（如果启用）
    if (options.searchInDescription && description.includes(searchQuery)) {
      result[key] = value;
      continue;
    }
  }

  return result;
}
