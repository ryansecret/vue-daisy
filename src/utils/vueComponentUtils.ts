import { RegexPatterns } from "./regexPatterns";

/**
 * Vue 组件解析工具类
 */
export class VueComponentUtils {
  /**
   * 从标签文本中提取组件名称
   */
  static extractComponentName(tagText: string): string {
    return tagText.trim().replace(RegexPatterns.VUE_PATTERNS.COMPONENT_TAG, "$1");
  }

  /**
   * 将 kebab-case 转换为 camelCase
   */
  static kebabToCamelCase(name: string): string {
    return name
      .replace(/(-[a-z])/g, (_, c) => {
        return c ? c.toUpperCase() : "";
      })
      .replace(/-/gi, "");
  }

  /**
   * 将 camelCase 转换为 kebab-case
   */
  static camelToKebabCase(name: string): string {
    return name.replace(/([A-Z_])/g, (_, c) => {
      if (c === "_") {
        return "-";
      } else {
        return c ? "-" + c.toLowerCase() : "";
      }
    });
  }

  /**
   * 将首字母大写
   */
  static capitalizeFirstLetter(name: string): string {
    if (name && name.length > 0) {
      return name[0].toUpperCase() + name.substr(1, name.length);
    }
    return name;
  }

  /**
   * 根据配置的命名方式转换组件名
   */
  static convertComponentName(name: string, tagNameWay: string, poster: string): string {
    const posterReg = new RegExp("-?(.*)(" + (poster ? poster : "\\.\\w*") + ")$", "gi");

    if (poster === ".vue") {
      if (tagNameWay === "kebabCase") {
        name = this.camelToKebabCase(name).replace(posterReg, "$1");
      } else if (tagNameWay === "camelCase") {
        name = this.kebabToCamelCase(name).replace(posterReg, "$1");
      } else if (tagNameWay === "CamelCase") {
        name = this.kebabToCamelCase(name).replace(posterReg, "$1");
        name = this.capitalizeFirstLetter(name);
      }
    } else {
      name = name.replace(posterReg, "$1");
    }

    return name;
  }

  /**
   * 检查文本是否包含完整的组件标签
   */
  static hasCompleteComponentTag(text: string): boolean {
    return (
      RegexPatterns.VUE_PATTERNS.COMPLETE_TAG.test(text.trim()) ||
      RegexPatterns.VUE_PATTERNS.SELF_CLOSING_TAG.test(text.trim())
    );
  }

  /**
   * 检查是否是脚本相关的导入行
   */
  static isScriptImportContext(lineText: string): boolean {
    return RegexPatterns.SCRIPT_PATTERNS.SCRIPT_RELATED.test(lineText);
  }

  /**
   * 检查是否匹配组件目录规则
   */
  static matchesComponentDirectory(dirPath: string, componentDirRegex?: string): boolean {
    if (componentDirRegex) {
      return new RegExp(componentDirRegex).test(dirPath);
    }
    return RegexPatterns.SCRIPT_PATTERNS.COMPONENT_DIR.test(dirPath);
  }

  /**
   * 生成导入语句
   */
  static generateImportStatement(componentName: string, filePath: string): string {
    const importName = this.kebabToCamelCase(componentName);
    const cleanPath = filePath.replace(/\\/gi, "/");
    return `import ${importName} from '${cleanPath}'\n`;
  }

  /**
   * 检查是否是Vue组件配置的components部分
   */
  static isComponentsConfig(lineText: string): {
    isInlineComponents: boolean;
    isComponentsStart: boolean;
    isComponentsEnd: boolean;
  } {
    return {
      isInlineComponents: RegexPatterns.VUE_CONFIG_PATTERNS.COMPONENTS_INLINE.test(lineText.trim()),
      isComponentsStart: RegexPatterns.VUE_CONFIG_PATTERNS.COMPONENTS_START.test(lineText.trim()),
      isComponentsEnd: RegexPatterns.VUE_CONFIG_PATTERNS.COMPONENTS_END.test(lineText.trim())
    };
  }

  /**
   * 检查是否是export default语句
   */
  static isExportDefault(lineText: string): boolean {
    return RegexPatterns.VUE_CONFIG_PATTERNS.EXPORT_DEFAULT.test(lineText.trim());
  }

  /**
   * 检查是否是data函数
   */
  static isDataFunction(lineText: string): boolean {
    return RegexPatterns.VUE_CONFIG_PATTERNS.DATA_FUNCTION.test(lineText.trim());
  }
}
