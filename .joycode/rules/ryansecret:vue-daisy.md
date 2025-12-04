---
globs: *
alwaysApply: true
---

# Vue Daisy VSCode 扩展项目开发规则

## 项目概览

### 项目类型与定位

- **项目类型**: VSCode 扩展插件
- **主要功能**: 为 Vue.js 开发提供智能提示和代码片段支持
- **支持的 UI 库**: Element UI、@jdcloud/jelement-biz、@jdcloud/dbUI、iView2、VUX
- **目标用户**: Vue.js 前端开发者

### 技术栈

- **核心语言**: TypeScript 4.3.2
- **运行环境**: Node.js 16.18.0 (Volta 管理)
- **编译工具**: Webpack 5.38.1 + ts-loader
- **代码规范**: ESLint + @typescript-eslint
- **测试框架**: Mocha 8.4.0
- **发布工具**: 自定义 release 脚本 (esno + zx)

## 代码架构与模块设计

### 核心架构模式

- **Provider 模式**: 使用 VSCode Provider API 提供智能提示和悬停文档
- **模块化设计**: 按功能和 UI 库分离模块
- **插件式架构**: 支持多个 UI 库的可扩展设计
- **缓存机制**: 使用 LRU 缓存提升性能

### 目录结构规范

```
src/
├── extension.ts          # 扩展入口文件
├── app.ts               # 核心应用类
├── vue-tags.ts          # 标签定义聚合
├── vue-attributes.ts    # 属性定义聚合
├── provider/            # VSCode Provider 实现
│   ├── documentHoverProvider.ts
│   └── elementCompletionItemProvider.ts
├── documents/           # 文档定义模块
│   ├── index.ts
│   ├── element-ui.ts
│   ├── dbUi.ts
│   ├── jelement-biz.ts
│   └── iview2.ts
├── tags/               # 标签定义模块
│   ├── element.ts
│   ├── dbUi.ts
│   ├── jelement-biz.ts
│   ├── iview2.ts
│   └── vue.ts
├── attributes/         # 属性定义模块
│   ├── element.ts
│   ├── dbUi.ts
│   ├── jelement-biz.ts
│   ├── iview2.ts
│   └── vue.ts
└── common/            # 公共工具模块
    └── commonProps.js
```

## 代码风格与规范

### TypeScript 编码规范

- **严格模式**: 关闭 strict 模式以保持兼容性
- **模块系统**: 使用 CommonJS (target: Node.js 环境)
- **编译目标**: ES6
- **命名约定**:
  - 类名使用 PascalCase: `ElementCompletionItemProvider`
  - 方法名使用 camelCase: `getPreTag()`, `autoImport()`
  - 常量使用 UPPER_SNAKE_CASE: `WORD_REG`, `innerIgonre`
  - 文件名使用 camelCase: `documentHoverProvider.ts`

### ESLint 规则

- 使用 `@typescript-eslint/parser` 解析器
- 启用 `@typescript-eslint/naming-convention` 警告
- 启用 `@typescript-eslint/semi` 分号检查
- 禁用 `@typescript-eslint/no-explicit-any` 允许 any 类型
- 启用 `curly`, `eqeqeq`, `no-throw-literal` 规则

### 代码组织原则

- **单一职责**: 每个模块专注单一功能
- **依赖注入**: 通过构造函数或方法参数传递依赖
- **接口定义**: 使用 TypeScript 接口定义数据结构
- **错误处理**: 统一的错误处理机制
- **性能优化**: 使用 LRU 缓存和懒加载

## 开发约束与最佳实践

### 文件操作规范

- **新增 UI 库支持**:

  1. 在 `src/tags/` 创建对应的标签定义文件
  2. 在 `src/attributes/` 创建对应的属性定义文件
  3. 在 `src/documents/` 创建对应的文档定义文件
  4. 更新 `vue-tags.ts` 和 `vue-attributes.ts` 聚合文件
  5. 在 `snippets/` 目录添加对应的代码片段

- **Provider 扩展**:
  - 继承 VSCode 官方 Provider 接口
  - 实现 `provideCompletionItems` 和 `provideHover` 方法
  - 使用正则表达式精确匹配上下文
  - 提供详细的错误处理和边界检查

### 性能优化要求

- **缓存策略**:

  - 使用 LRU 缓存 (max: 30, maxAge: 5000ms)
  - 缓存文件遍历结果和组件信息
  - 避免重复的文件系统操作

- **内存管理**:
  - 及时释放不需要的资源
  - 使用 `dispose()` 方法清理订阅
  - 避免内存泄漏和循环引用

### 兼容性要求

- **VSCode 版本**: 最低支持 1.64.0
- **Node.js 版本**: 推荐使用 16.18.0 (Volta 管理)
- **Vue 版本**: 支持 Vue 2.x 和 Vue 3.x
- **浏览器兼容**: 不适用 (VSCode 扩展环境)

## 配置管理

### 扩展配置项

```typescript
"vue-daisy.alias": {
  "type": "object",
  "default": { "@": "src" },
  "description": "webpack alias 配置"
}

"vue-daisy.componentPath": {
  "type": "array",
  "description": "组件搜索路径"
}

"vue-daisy.componentDirRgex": {
  "type": "string",
  "default": ".*/components/.*",
  "description": "组件目录正则表达式"
}

"vue-daisy.tagNameWay": {
  "type": "string",
  "default": "CamelCase",
  "enum": ["kebabCase", "camelCase", "CamelCase"],
  "description": "组件名称格式"
}
```

### Webpack 配置原则

- **目标环境**: Node.js (`target: 'node'`)
- **模式设置**: 开发模式使用 'none'，生产模式使用 'production'
- **外部依赖**: 排除 'vscode' 模块 (`externals: { vscode: 'commonjs vscode' }`)
- **文件扩展**: 支持 `.ts` 和 `.js` 文件
- **输出配置**: 使用 CommonJS2 格式

## 开发工作流

### 本地开发

```bash
# 安装依赖
npm install

# 开发模式编译
npm run compile

# 监听模式编译
npm run watch

# 代码检查
npm run lint

# 运行测试
npm test
```

### 发布流程

```bash
# 生成变更日志
npm run changelog

# 执行发布脚本
npm run release

# 打包生产版本
npm run package
```

### Git 提交规范

- 使用 `conventional-changelog` 规范
- 配置 `commitizen` 和 `cz-git` 工具
- 提交信息格式: `type(scope): description`
- 支持的类型: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 测试与质量保证

### 测试策略

- **单元测试**: 使用 Mocha 框架
- **集成测试**: VSCode 扩展 API 测试
- **手动测试**: 在真实 VSCode 环境中验证功能
- **性能测试**: 监控内存使用和响应时间

### 代码质量检查

- **静态分析**: ESLint + TypeScript 编译检查
- **格式化**: 统一的代码格式规范
- **依赖检查**: 定期更新和安全审计
- **文档同步**: 保持 README 和代码注释的一致性

## 扩展开发指南

### 添加新 UI 库支持

1. **创建标签定义**: 在 `src/tags/` 目录创建新文件
2. **创建属性定义**: 在 `src/attributes/` 目录创建新文件
3. **创建文档定义**: 在 `src/documents/` 目录创建新文件
4. **更新聚合文件**: 修改 `vue-tags.ts` 和 `vue-attributes.ts`
5. **添加代码片段**: 在 `snippets/` 目录添加对应文件
6. **更新配置**: 修改 `package.json` 中的 contributes 部分

### 性能优化建议

- 使用懒加载减少启动时间
- 实现增量更新机制
- 优化正则表达式性能
- 合理使用缓存策略
- 避免阻塞主线程操作

### 调试技巧

- 使用 VSCode 扩展调试功能
- 添加详细的日志输出
- 使用 Chrome DevTools 调试
- 监控内存和 CPU 使用情况
- 测试边界条件和异常情况

## 注意事项

### 兼容性维护

- 定期更新 VSCode API 版本
- 保持向后兼容性
- 测试不同操作系统环境
- 关注 Vue.js 版本更新
- 监控依赖库的安全更新

### 社区贡献

- 遵循开源协议要求
- 提供清晰的贡献指南
- 维护详细的更新日志
- 及时响应用户反馈
- 保持代码库的活跃度
