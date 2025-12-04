# Vue Daisy

<p align="center">
  <img src="logo.png" alt="Vue Daisy Logo" width="200">
</p>

<p align="center">
  <strong>🌼 专为 Vue.js 开发者打造的智能代码提示扩展</strong>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=ryansecreat.vue-daisy">
    <img src="https://img.shields.io/visual-studio-marketplace/v/ryansecreat.vue-daisy.svg?style=flat-square&label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=ryansecreat.vue-daisy">
    <img src="https://img.shields.io/visual-studio-marketplace/d/ryansecreat.vue-daisy.svg?style=flat-square" alt="Visual Studio Marketplace Downloads">
  </a>
  <a href="https://github.com/ryansecret/vue-daisy">
    <img src="https://img.shields.io/github/stars/ryansecret/vue-daisy.svg?style=flat-square&logo=github" alt="GitHub Stars">
  </a>
  <a href="https://github.com/ryansecret/vue-daisy/blob/main/LICENSE.txt">
    <img src="https://img.shields.io/github/license/ryansecret/vue-daisy.svg?style=flat-square" alt="License">
  </a>
</p>

## ✨ 功能特性

Vue Daisy 是一个功能强大的 VSCode 扩展，专为提升 Vue.js 开发效率而设计。它为多个主流 UI 组件库提供了智能代码提示、悬停文档和丰富的代码片段。

### 🎯 核心功能

- **🚀 智能代码提示**: 为组件属性、事件和插槽提供精确的自动完成
- **📖 悬停文档**: 鼠标悬停即可查看组件的详细文档和使用说明
- **📝 代码片段**: 丰富的代码片段库，快速生成常用组件模板
- **🔍 自定义组件识别**: 自动识别项目中的自定义 Vue 组件
- **⚡ 高性能缓存**: 使用 LRU 缓存机制，确保流畅的开发体验
- **🎨 多 UI 库支持**: 支持多个主流 UI 组件库

### 🎨 支持的 UI 库

| UI 库                     | 版本支持 | 功能完整度  |
| ------------------------- | -------- | ----------- |
| **Element UI**            | 2.x      | ✅ 完整支持 |
| **@jdcloud/jelement-biz** | 最新版   | ✅ 完整支持 |
| **@jdcloud/dbUI**         | 最新版   | ✅ 完整支持 |
| **iView 2**               | 2.x      | ✅ 完整支持 |
| **VUX**                   | 2.x      | ✅ 完整支持 |

### 🛠️ 技术特性

- **TypeScript 编写**: 类型安全，易于维护
- **模块化架构**: 支持扩展和自定义
- **智能缓存**: LRU 缓存机制提升性能
- **正则匹配**: 精确的上下文识别
- **Vue 2/3 兼容**: 同时支持 Vue 2.x 和 3.x

## 📦 安装

### 从 VSCode 市场安装

1. 打开 VSCode
2. 按 `Ctrl+Shift+X` 打开扩展面板
3. 搜索 "Vue Daisy"
4. 点击 "安装"

### 从命令行安装

```bash
code --install-extension ryansecreat.vue-daisy
```

## 🚀 快速开始

安装完成后，Vue Daisy 将自动激活并为以下文件类型提供支持：

- `.vue` 文件
- `.html` 文件（包含 Vue 组件）
- `.js` / `.ts` 文件（Vue 组件定义）

### 💡 使用示例

#### 1. Element UI 代码片段

在 Vue 模板中输入 `el-` 前缀，即可看到智能提示：

```vue
<template>
  <div>
    <!-- 输入 "el-button" -->
    <el-button type="primary" @click="handleClick"> 点击按钮 </el-button>

    <!-- 输入 "el-form" -->
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
```

#### 2. 组件属性智能提示

在组件标签内输入空格或 `:` 时，会自动显示可用属性：

```vue
<!-- 在 el-button 标签内按空格 -->
<el-button |
           ↑ 这里会显示所有可用属性：type, size, icon, loading 等
```

#### 3. 悬停文档

将鼠标悬停在组件名称上，即可查看详细的组件文档：

![hover 组件提示](https://pic.imgdb.cn/item/62c285c55be16ec74a04a2cc.gif)

#### 4. 常用正则表达式片段

输入以下前缀快速插入常用正则：

- `reg-phone`: 手机号码验证
- `reg-email`: 邮箱地址验证
- `reg-domain`: 域名验证

## ⚙️ 配置选项

Vue Daisy 提供了丰富的配置选项来自定义扩展行为。在 VSCode 设置中搜索 "vue-daisy" 即可找到所有配置项。

### 📋 配置项详解

#### `vue-daisy.alias`

- **类型**: `Object`
- **默认值**: `{ "@": "src" }`
- **描述**: Webpack alias 配置，用于解析组件路径

```json
{
  "vue-daisy.alias": {
    "@": "src",
    "@components": "src/components",
    "@views": "src/views"
  }
}
```

#### `vue-daisy.componentPath`

- **类型**: `Array<string>`
- **默认值**: `[]`
- **描述**: 指定组件搜索的根目录，提高搜索效率

```json
{
  "vue-daisy.componentPath": ["src/components", "src/views/components"]
}
```

#### `vue-daisy.componentDirRgex`

- **类型**: `String`
- **默认值**: `".*/components/.*"`
- **描述**: 组件目录的正则表达式匹配规则

#### `vue-daisy.componentIgnore`

- **类型**: `Array<string>`
- **默认值**: `[]`
- **描述**: 指定忽略搜索的目录

```json
{
  "vue-daisy.componentIgnore": ["node_modules", "dist", ".git"]
}
```

#### `vue-daisy.componentPrefix`

- **类型**: `Object`
- **默认值**: `{ "alias": "@", "path": "client/src" }`
- **描述**: 组件路径前缀替换配置

#### `vue-daisy.tagNameWay`

- **类型**: `String`
- **默认值**: `"CamelCase"`
- **可选值**: `"kebabCase"`, `"camelCase"`, `"CamelCase"`
- **描述**: 组件名称格式化方式

#### `vue-daisy.indent-size`

- **类型**: `Number`
- **默认值**: `2`
- **描述**: 代码片段的缩进大小

#### `vue-daisy.quotes`

- **类型**: `String`
- **默认值**: `"double"`
- **可选值**: `"single"`, `"double"`
- **描述**: 自动完成时使用的引号类型

### 🔧 推荐配置

以下是一个推荐的完整配置示例：

```json
{
  "vue-daisy.alias": {
    "@": "src",
    "@components": "src/components",
    "@views": "src/views",
    "@utils": "src/utils"
  },
  "vue-daisy.componentPath": ["src/components", "src/views"],
  "vue-daisy.componentIgnore": ["node_modules", "dist", ".git", "coverage"],
  "vue-daisy.tagNameWay": "CamelCase",
  "vue-daisy.indent-size": 2,
  "vue-daisy.quotes": "double"
}
```

## 🎯 使用场景

### 💼 企业级项目开发

Vue Daisy 特别适合使用 Element UI 或企业内部组件库的大型项目：

- **快速原型开发**: 丰富的代码片段加速页面搭建
- **团队协作**: 统一的组件使用规范
- **代码质量**: 减少属性名拼写错误
- **开发效率**: 智能提示减少查阅文档的时间

### 🎨 UI 组件库开发

如果你正在开发自己的 Vue 组件库，Vue Daisy 可以：

- **自动识别组件**: 自动扫描项目中的组件
- **属性提示**: 为组件属性提供智能提示
- **文档集成**: 支持 JSDoc 注释的悬停显示

### 🚀 快速学习

对于 Vue.js 初学者：

- **组件探索**: 通过智能提示了解组件的可用属性
- **最佳实践**: 代码片段展示了组件的标准用法
- **即时文档**: 悬停文档帮助理解组件功能

## 🔧 开发指南

### 📁 项目结构

```
vue-daisy/
├── src/                          # 源代码目录
│   ├── extension.ts              # 扩展入口文件
│   ├── app.ts                   # 核心应用类
│   ├── vue-tags.ts              # 标签定义聚合
│   ├── vue-attributes.ts        # 属性定义聚合
│   ├── provider/                # VSCode Provider 实现
│   │   ├── documentHoverProvider.ts
│   │   └── elementCompletionItemProvider.ts
│   ├── documents/               # 文档定义模块
│   │   ├── index.ts
│   │   ├── element-ui.ts
│   │   ├── dbUi.ts
│   │   ├── jelement-biz.ts
│   │   └── iview2.ts
│   ├── tags/                    # 标签定义模块
│   │   ├── element.ts
│   │   ├── dbUi.ts
│   │   ├── jelement-biz.ts
│   │   ├── iview2.ts
│   │   └── vue.ts
│   ├── attributes/              # 属性定义模块
│   │   ├── element.ts
│   │   ├── dbUi.ts
│   │   ├── jelement-biz.ts
│   │   ├── iview2.ts
│   │   └── vue.ts
│   └── common/                  # 公共工具模块
│       └── commonProps.js
├── snippets/                    # 代码片段定义
│   ├── element-html.json
│   ├── element.json
│   ├── iview-html.json
│   ├── iview2.json
│   ├── javascript.json
│   ├── vue-html.json
│   └── vue.json
├── scripts/                     # 构建脚本
├── package.json                 # 项目配置
├── webpack.config.js            # Webpack 配置
├── tsconfig.json               # TypeScript 配置
└── README.md                   # 项目文档
```

### 🛠️ 本地开发

#### 环境要求

- **Node.js**: 16.18.0+ (推荐使用 Volta 管理)
- **VSCode**: 1.64.0+
- **TypeScript**: 4.3.2+

#### 开发步骤

1. **克隆仓库**

```bash
git clone https://github.com/ryansecret/vue-daisy.git
cd vue-daisy
```

2. **安装依赖**

```bash
npm install
```

3. **开发模式编译**

```bash
npm run compile
```

4. **监听模式**

```bash
npm run watch
```

5. **调试扩展**

- 按 `F5` 启动扩展开发主机
- 在新窗口中测试扩展功能

#### 🧪 测试

```bash
# 运行所有测试
npm test

# 代码检查
npm run lint

# 类型检查
npm run test-compile
```

### 🔄 添加新 UI 库支持

如果你想为 Vue Daisy 添加新的 UI 库支持，请按照以下步骤：

#### 1. 创建标签定义

在 `src/tags/` 目录下创建新文件，例如 `antd-vue.ts`：

```typescript
export const antdVueTags = {
  "a-button": {
    attributes: ["type", "size", "shape", "icon", "loading"],
    description: "Ant Design Vue Button Component"
  }
  // 更多组件定义...
};
```

#### 2. 创建属性定义

在 `src/attributes/` 目录下创建对应文件：

```typescript
export const antdVueAttributes = {
  "a-button": {
    type: ["primary", "default", "dashed", "text", "link"],
    size: ["large", "middle", "small"]
    // 更多属性定义...
  }
};
```

#### 3. 创建文档定义

在 `src/documents/` 目录下添加文档：

```typescript
export const antdVueDocs = {
  "a-button": {
    description: "按钮用于开始一个即时操作。",
    attributes: {
      type: "设置按钮类型",
      size: "设置按钮大小"
      // 更多属性文档...
    }
  }
};
```

#### 4. 更新聚合文件

在 `vue-tags.ts` 和 `vue-attributes.ts` 中导入并合并新的定义。

#### 5. 添加代码片段

在 `snippets/` 目录下创建对应的 JSON 文件。

#### 6. 更新配置

修改 `package.json` 中的 `contributes.snippets` 部分。

### 📝 贡献指南

我们欢迎所有形式的贡献！请阅读以下指南：

#### 🐛 报告 Bug

1. 在 [GitHub Issues](https://github.com/ryansecret/vue-daisy/issues) 中搜索是否已存在相同问题
2. 创建新 Issue，详细描述问题和重现步骤
3. 提供相关的环境信息（VSCode 版本、扩展版本等）

#### ✨ 功能请求

1. 在 Issues 中描述你的功能需求
2. 说明使用场景和预期效果
3. 如果可能，提供设计稿或示例

#### 🔧 代码贡献

1. **Fork** 项目到你的 GitHub 账户
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 创建 **Pull Request**

#### 📏 代码规范

- 使用 TypeScript 编写代码
- 遵循 ESLint 规则
- 添加适当的注释和文档
- 确保所有测试通过

### 🔄 发布流程

```bash
# 生成变更日志
npm run changelog

# 执行发布脚本
npm run release

# 打包生产版本
npm run package
```

## 🤔 常见问题

### ❓ 为什么智能提示不工作？

**可能原因和解决方案：**

1. **文件类型不支持**

   - 确保文件扩展名为 `.vue`, `.html`, `.js`, 或 `.ts`
   - 检查 VSCode 是否正确识别文件类型

2. **扩展未激活**

   - 重启 VSCode
   - 检查扩展是否已启用

3. **配置问题**
   - 检查 `vue-daisy.componentPath` 配置
   - 验证 `vue-daisy.alias` 设置

### ❓ 自定义组件无法识别？

**解决步骤：**

1. **检查组件路径配置**

```json
{
  "vue-daisy.componentPath": [
    "src/components" // 确保路径正确
  ]
}
```

2. **验证组件目录正则**

```json
{
  "vue-daisy.componentDirRgex": ".*/components/.*"
}
```

3. **清除缓存**
   - 重启 VSCode
   - 重新加载窗口（`Ctrl+Shift+P` > `Developer: Reload Window`）

### ❓ 代码片段不显示？

**检查项目：**

1. **语言模式**

   - 确保文件的语言模式正确设置
   - 在状态栏查看当前语言模式

2. **片段设置**
   - 检查 VSCode 的片段设置
   - 确保 `editor.suggest.snippetsPreventQuickSuggestions` 为 `false`

### ❓ 性能问题？

**优化建议：**

1. **限制搜索范围**

```json
{
  "vue-daisy.componentPath": ["src/components"],
  "vue-daisy.componentIgnore": ["node_modules", "dist"]
}
```

2. **调整缓存设置**
   - 扩展使用 LRU 缓存，通常无需手动调整
   - 如遇问题，可重启 VSCode 清除缓存

### ❓ 与其他扩展冲突？

**排查步骤：**

1. **禁用其他 Vue 相关扩展**

   - 临时禁用其他扩展测试
   - 逐个启用确定冲突源

2. **检查快捷键冲突**
   - 查看 VSCode 快捷键设置
   - 解决键位冲突

## 🔗 相关链接

- **GitHub 仓库**: [https://github.com/ryansecret/vue-daisy](https://github.com/ryansecret/vue-daisy)
- **VSCode 市场**: [Vue Daisy 扩展页面](https://marketplace.visualstudio.com/items?itemName=ryansecreat.vue-daisy)
- **问题反馈**: [GitHub Issues](https://github.com/ryansecret/vue-daisy/issues)
- **更新日志**: [CHANGELOG.md](CHANGELOG.md)

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE.txt)。

## 🙏 致谢

感谢所有为 Vue Daisy 做出贡献的开发者和用户！

### 🌟 特别感谢

- **Element UI 团队** - 提供了优秀的 Vue 组件库
- **Vue.js 社区** - 持续推动前端技术发展
- **VSCode 团队** - 提供了强大的扩展 API
- **所有贡献者** - 让 Vue Daisy 变得更好

---

<p align="center">
  如果 Vue Daisy 对你有帮助，请考虑给我们一个 ⭐️
</p>

<p align="center">
  <strong>让 Vue.js 开发更加高效愉快！🚀</strong>
</p>
