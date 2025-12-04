/**
 * Vue 属性定义聚合模块
 *
 * 该模块负责聚合所有支持的 UI 库的属性定义，为 Vue.js 组件提供智能提示支持
 * 支持的 UI 库包括：Element UI、@jdcloud/jelement-biz、@jdcloud/dbUI、iView2、VUX
 *
 * @author Ryan Secret
 * @version 1.16.28
 * @since VSCode 1.64.0
 */

// ============================================================================
// 导入各 UI 库属性定义
// ============================================================================

import vuxAttributes from "./attributes/vux";
import elementAttributes from "./attributes/element";
import iview2Attributes from "./attributes/iview2";
import vueAttributes from "./attributes/vue";
import jelementBizAttributes from "./attributes/jelement-biz";

// ============================================================================
// 类型定义和接口
// ============================================================================

/**
 * 属性选项接口
 * 定义每个属性的可选值和描述信息
 */
interface AttributeOption {
  /** 可选值数组 */
  options: string[];
  /** 属性描述信息 */
  description: string;
}

/**
 * 属性集合接口
 * 定义属性名到属性选项的映射关系
 */
interface AttributeCollection {
  [attributeName: string]: AttributeOption;
}

/**
 * UI 库属性模块接口
 * 确保所有导入的属性模块都符合统一的结构
 */
interface UILibraryAttributes {
  default: AttributeCollection;
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
 * 属性合并优先级
 * 数字越大优先级越高，后导入的属性会覆盖先导入的同名属性
 */
const MERGE_PRIORITY = {
  vue: 1, // Vue 核心属性，优先级最低
  vux: 2, // VUX 组件库
  iview2: 3, // iView2 组件库
  element: 4, // Element UI 组件库
  jelementBiz: 5 // @jdcloud/jelement-biz 组件库，优先级最高
} as const;

// ============================================================================
// 工具函数
// ============================================================================

/**
 * 验证属性模块结构
 * @param moduleData 属性模块数据
 * @param moduleName 模块名称
 * @returns 是否为有效的属性模块
 */
function validateAttributeModule(moduleData: any, moduleName: string): boolean {
  try {
    if (!moduleData || typeof moduleData !== "object") {
      console.warn(`[Vue Attributes] Invalid module structure for ${moduleName}: not an object`);
      return false;
    }

    // 检查是否包含有效的属性定义
    const attributeCount = Object.keys(moduleData).length;
    if (attributeCount === 0) {
      console.warn(`[Vue Attributes] Empty attribute module: ${moduleName}`);
      return false;
    }

    // 验证属性格式（抽样检查前几个属性）
    const sampleAttributes = Object.entries(moduleData).slice(0, 3);
    for (const [key, value] of sampleAttributes) {
      if (typeof key !== "string" || !value || typeof value !== "object") {
        console.warn(`[Vue Attributes] Invalid attribute format in ${moduleName}: ${key}`);
        return false;
      }

      const attr = value as any;
      if (!Array.isArray(attr.options) || typeof attr.description !== "string") {
        console.warn(`[Vue Attributes] Invalid attribute structure in ${moduleName}: ${key}`);
        return false;
      }
    }

    console.log(
      `[Vue Attributes] Module ${moduleName} validated successfully (${attributeCount} attributes)`
    );
    return true;
  } catch (error) {
    console.error(`[Vue Attributes] Error validating module ${moduleName}:`, error);
    return false;
  }
}

/**
 * 安全合并属性对象
 * @param target 目标对象
 * @param source 源对象
 * @param sourceName 源对象名称（用于日志）
 * @returns 合并后的对象
 */
function safelyMergeAttributes(
  target: AttributeCollection,
  source: any,
  sourceName: string
): AttributeCollection {
  try {
    if (!validateAttributeModule(source, sourceName)) {
      console.warn(`[Vue Attributes] Skipping invalid module: ${sourceName}`);
      return target;
    }

    let mergedCount = 0;
    let overriddenCount = 0;

    for (const [key, value] of Object.entries(source)) {
      if (target.hasOwnProperty(key)) {
        overriddenCount++;
        console.debug(`[Vue Attributes] Overriding attribute: ${key} (from ${sourceName})`);
      } else {
        mergedCount++;
      }

      target[key] = value as AttributeOption;
    }

    console.log(
      `[Vue Attributes] Merged ${sourceName}: +${mergedCount} new, ~${overriddenCount} overridden`
    );
    return target;
  } catch (error) {
    console.error(`[Vue Attributes] Error merging ${sourceName}:`, error);
    return target;
  }
}

/**
 * 生成属性统计信息
 * @param attributes 属性集合
 * @returns 统计信息对象
 */
function generateAttributeStats(attributes: AttributeCollection) {
  try {
    const totalAttributes = Object.keys(attributes).length;
    const libraryStats: Record<string, number> = {};

    // 统计各库的属性数量（基于属性名前缀）
    for (const attributeName of Object.keys(attributes)) {
      const prefix = attributeName.split("/")[0] || "unknown";
      libraryStats[prefix] = (libraryStats[prefix] || 0) + 1;
    }

    const stats = {
      total: totalAttributes,
      libraries: libraryStats,
      supportedLibraries: SUPPORTED_UI_LIBRARIES.length,
      timestamp: new Date().toISOString()
    };

    console.log("[Vue Attributes] Statistics:", stats);
    return stats;
  } catch (error) {
    console.error("[Vue Attributes] Error generating statistics:", error);
    return { total: 0, libraries: {}, supportedLibraries: 0, timestamp: new Date().toISOString() };
  }
}

// ============================================================================
// 属性聚合逻辑
// ============================================================================

/**
 * 创建聚合属性集合
 * 按照优先级顺序合并各 UI 库的属性定义
 * @returns 聚合后的属性集合
 */
function createAggregatedAttributes(): AttributeCollection {
  try {
    console.log("[Vue Attributes] Starting attribute aggregation...");

    // 初始化空的属性集合
    let aggregatedAttributes: AttributeCollection = {};

    // 按优先级顺序合并属性（优先级低的先合并，高的后合并以实现覆盖）
    const mergeSequence = [
      { data: vueAttributes, name: "Vue Core", priority: MERGE_PRIORITY.vue },
      { data: vuxAttributes, name: "VUX", priority: MERGE_PRIORITY.vux },
      { data: iview2Attributes, name: "iView2", priority: MERGE_PRIORITY.iview2 },
      { data: elementAttributes, name: "Element UI", priority: MERGE_PRIORITY.element },
      {
        data: jelementBizAttributes,
        name: "@jdcloud/jelement-biz",
        priority: MERGE_PRIORITY.jelementBiz
      }
    ];

    // 按优先级排序并合并
    mergeSequence
      .sort((a, b) => a.priority - b.priority)
      .forEach(({ data, name }) => {
        aggregatedAttributes = safelyMergeAttributes(aggregatedAttributes, data, name);
      });

    // 生成统计信息
    generateAttributeStats(aggregatedAttributes);

    console.log("[Vue Attributes] Attribute aggregation completed successfully");
    return aggregatedAttributes;
  } catch (error) {
    console.error("[Vue Attributes] Fatal error during attribute aggregation:", error);

    // 返回空对象作为降级方案
    return {};
  }
}

// ============================================================================
// 导出聚合属性
// ============================================================================

/**
 * Vue Daisy 扩展支持的所有属性定义
 *
 * 这个对象包含了所有支持的 UI 库的属性定义，用于提供智能提示功能
 * 属性按照优先级进行合并，@jdcloud/jelement-biz 具有最高优先级
 *
 * 支持的 UI 库：
 * - Vue Router (核心路由属性)
 * - VUX (移动端 UI 组件库)
 * - iView2 (桌面端 UI 组件库)
 * - Element UI (流行的桌面端 UI 组件库)
 * - @jdcloud/jelement-biz (京东云业务组件库)
 *
 * @example
 * ```typescript
 * // 使用示例
 * import VueAttributes from './vue-attributes';
 *
 * // 获取特定属性的选项
 * const buttonTypeOptions = VueAttributes['el-button/type'];
 * console.log(buttonTypeOptions.options); // ['primary', 'success', 'warning', 'danger', 'info', 'text']
 * ```
 */
const VueAttributes = createAggregatedAttributes();

// ============================================================================
// 附加导出（用于调试和扩展）
// ============================================================================

/**
 * 获取属性统计信息
 * @returns 当前属性集合的统计信息
 */
export function getAttributeStatistics() {
  return generateAttributeStats(VueAttributes);
}

/**
 * 获取支持的 UI 库列表
 * @returns 支持的 UI 库名称数组
 */
export function getSupportedLibraries(): readonly string[] {
  return SUPPORTED_UI_LIBRARIES;
}

/**
 * 检查是否包含特定属性
 * @param attributeName 属性名称
 * @returns 是否包含该属性
 */
export function hasAttribute(attributeName: string): boolean {
  return attributeName in VueAttributes;
}

/**
 * 获取特定前缀的所有属性
 * @param prefix 属性前缀（如 'el-button'）
 * @returns 匹配前缀的属性集合
 */
export function getAttributesByPrefix(prefix: string): AttributeCollection {
  const result: AttributeCollection = {};

  for (const [key, value] of Object.entries(VueAttributes)) {
    if (key.startsWith(prefix)) {
      result[key] = value;
    }
  }

  return result;
}

/**
 * 验证属性值是否有效
 * @param attributeName 属性名称
 * @param value 属性值
 * @returns 是否为有效值
 */
export function isValidAttributeValue(attributeName: string, value: string): boolean {
  const attribute = VueAttributes[attributeName];
  if (!attribute) {
    return false;
  }

  return attribute.options.includes(value) || attribute.options.includes("");
}

// ============================================================================
// 向后兼容性支持
// ============================================================================

/**
 * 创建向后兼容的属性访问代理
 * 为了保持与现有代码的兼容性，我们需要支持旧的访问方式
 *
 * 旧格式: ATTRS["icons"] 返回 string[]
 * 新格式: ATTRS["icons"] 返回 { options: string[], description: string }
 */
const CompatibilityProxy = new Proxy(VueAttributes, {
  get(target: AttributeCollection, prop: string | symbol): any {
    if (typeof prop === "string") {
      const attribute = target[prop];

      if (attribute) {
        // 如果属性存在，返回 AttributeOption 对象
        // 但同时添加向后兼容的数组访问支持
        const compatibleAttribute = attribute.options;

        // 为数组添加 AttributeOption 的属性，实现双重兼容性
        Object.defineProperty(compatibleAttribute, "options", {
          value: attribute.options,
          enumerable: false,
          writable: false
        });

        Object.defineProperty(compatibleAttribute, "description", {
          value: attribute.description,
          enumerable: false,
          writable: false
        });

        return compatibleAttribute;
      }

      // 如果属性不存在，返回空数组以保持兼容性
      return [];
    }

    return target[prop as unknown as string];
  },

  has(target: AttributeCollection, prop: string | symbol): boolean {
    return typeof prop === "string" && prop in target;
  },

  ownKeys(target: AttributeCollection): (string | symbol)[] {
    return Object.keys(target);
  }
});

// 重新导出兼容性代理作为默认导出
export default CompatibilityProxy;
