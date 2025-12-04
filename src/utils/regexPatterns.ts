/**
 * 正则表达式模式工具类 - 集中管理所有正则表达式
 */
export class RegexPatterns {
  /**
   * 单词匹配正则表达式
   */
  static readonly WORD_REG: RegExp =
    /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;

  /**
   * Vue 组件相关正则表达式
   */
  static readonly VUE_PATTERNS = {
    // 匹配 <script> 标签
    SCRIPT_TAG: /^\s*<script.*>\s*$/,
    // 匹配 </script> 标签
    SCRIPT_END_TAG: /\s*<\/script>\s*/gi,
    // 匹配 import 语句
    IMPORT_STATEMENT: /import /gi,
    // 匹配组件标签
    COMPONENT_TAG: /<([\w-]*)[\s>].*/gi,
    // 匹配自闭合标签或成对标签
    COMPLETE_TAG: /<.*>\s?<\/.*>/gi,
    SELF_CLOSING_TAG: /<.*\/>/gi,
    // 匹配 HTML 标签
    HTML_TAG: /^\s*<[A-Z][A-Za-z0-9_-]*.*>.*<\/[A-Z][A-Za-z0-9_-]*>\s*$/g
  };

  /**
   * Vue 组件配置相关正则表达式
   */
  static readonly VUE_CONFIG_PATTERNS = {
    // 匹配 components 配置（单行）
    COMPONENTS_INLINE: /\s*components\s*:\s*{.*}.*/gi,
    // 匹配 components 配置（多行开始）
    COMPONENTS_START: /\s*components\s*:\s*{\s*$/gi,
    // 匹配 components 配置（多行结束）
    COMPONENTS_END: /\s*},?\s*$/gi,
    // 匹配 export default
    EXPORT_DEFAULT: /\s*export\s*default\s*{\s*/gi,
    // 匹配 data 函数
    DATA_FUNCTION: /\s*data\s*\(\s*\)\s*{\s*/gi
  };

  /**
   * 代码格式化相关正则表达式
   */
  static readonly FORMATTING_PATTERNS = {
    // 匹配空行
    EMPTY_LINE: /^\s*$/gi,
    // 匹配 key: value 格式
    KEY_VALUE: /[0-9a-zA-Z]\s{0,1}:\s{0,1}[\w\"\']/gi,
    // 匹配单行注释
    SINGLE_LINE_COMMENT: /\s*\/\/\s+.*/gi,
    // 匹配函数定义
    FUNCTION_DEFINITION: /.*(.*).*{.*/gi,
    // 匹配行首空白
    LINE_INDENT: /^(\s*)[a-zA-Z-_<].*/g
  };

  /**
   * 代码块识别相关正则表达式
   */
  static readonly BLOCK_PATTERNS = {
    // 匹配数组块
    ARRAY_BLOCK: /^\s*[\sa-zA-Z:_-]*\s*\[\s*$/gi,
    // 匹配函数块
    FUNCTION_BLOCK: /^(\s*[\sa-zA-Z_-]*\([\sa-zA-Z_-]*\)\s*{\s*)|(\s*[\sa-zA-Z:_-]*\s*{\s*)$/gi,
    // 匹配条件语句
    CONDITION_STATEMENT: /^\s*(function|if|for|while)?\s*$/g,
    // 匹配函数或条件语句
    FUNCTION_OR_CONDITION: /(function|if|for|while)?.+\(.*\)\s*{/gi
  };

  /**
   * 脚本和导入相关正则表达式
   */
  static readonly SCRIPT_PATTERNS = {
    // 匹配脚本相关标签
    SCRIPT_RELATED: /.*(<script|import|require).*/,
    // 匹配组件目录
    COMPONENT_DIR: /.*\/components\/.*/
  };

  /**
   * 条件语句关键字列表
   */
  static readonly CONDITION_KEYWORDS = ["if", "for", "while", "switch"];

  /**
   * 成对符号配对
   */
  static readonly BRACKET_PAIRS = [
    ["{", "}"],
    ["(", ")"],
    ["'", "'"],
    ['"', '"'],
    ["[", "]"],
    ["<", ">"]
  ];

  /**
   * 标签选择器
   */
  static readonly TAG_SELECTORS = ['"', "'", "(", "{", "[", " ", "`", ">"];

  /**
   * 标签关闭映射
   */
  static readonly TAG_CLOSE_MAP: { [key: string]: string } = {
    '"': '"',
    "'": "'",
    "(": ")",
    "{": "}",
    "[": "]",
    " ": " ",
    "`": "`",
    ">": "<"
  };
}
