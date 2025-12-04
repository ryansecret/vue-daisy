export default {
  "db-auto-load-select": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| modelValue | 组件双向绑定值 | Array/Object | false | - | [] |
| valueKey | 用于标识选项的 key | String | false | - | '' |
| lableKey | 用于显示的字段名 | String | true | - | - |
| getList | 获取选项列表的函数 | Function | true | - | - |
| pageSize | 每页加载数量 | Number | false | - | 10 |`,
  "db-auto-resize-container": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| 无 | 无需额外 Props | - | - | - | - |`,
  "db-auto-resize-radio-group": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| modelValue | 组件双向绑定值 | String/Object | false | - | null |
| items | 单选项列表 | Array | false | - | [] |`,
  "db-az-select": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| value | 选中的可用区（多选/单选模式） | Array | false | - | [] |
| regionId | 区域 ID | String | true | - | - |
| serviceCode | 服务编码 | String | false | - | - |
| min | 多选模式下最小选择数量 | Number | false | - | 0 |
| type | 选择类型（multiple/single） | String | false | - | - |`,
  "db-az-text": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| azIds | 可用区 ID 列表 | Array | false | - | [] |
| regionId | 区域 ID | String | true | - | - |
| serviceCode | 服务编码 | String | true | - | - |
| arch | 架构类型 | String | false | - | '' |
| azsMapMethod | 可用区映射方法 | Function | false | - | null |
| isYjOnline | 是否京简在线 | Boolean | false | - | false |
| isOpenCloud | 是否开放云 | Boolean | false | - | false |`,
  "db-charge-mode-radio": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| modelValue | 当前选中的计费模式 | String | false | - | - |
| chargeModes | 支持的计费模式列表 | Array | false | - | [] |`,
  "db-confirm": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| - | 弹窗标题 | String | false | - | t('info') |
| - | 弹窗显示状态（双向绑定） | Boolean | false | - | false |
| - | 点击确认后的回调，支持异步 | Function | false | - | null |
| - | 是否允许点击确认 | Boolean | false | - | true |
| - | 禁用确认时的提示 | String | false | - | '' |
| - | 是否显示确认按钮 | Boolean | false | - | true |
| - | 是否显示取消按钮 | Boolean | false | - | true |
| - | 弹窗宽度 | String | false | - | '480px' |
| - | 确认按钮 loading 状态 | Boolean | false | - | false |
| - | 是否消息弹窗样式 | Boolean | false | - | false |
| - | 消息弹窗类型（info/success/warning/error） | String | false | - | 'info' |`,
  "db-content-tooltip": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| info | 要显示的文本内容 | String | false | - | '' |`,
  "db-copy-btn": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| content | 要复制的文本内容 | String | false | - | '' |
| tipPlacement | 提示框位置，支持 Element UI Tooltip 的所有位置选项 | String | false | - | 'right' |`,
  "db-create-account": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| region-id | 地域 ID | String | false | — | — |
| instance-id | 实例 ID | String | false | — | — |
| create-action | 创建账户的方法 | Function | false | — | — |
| disabled | 是否禁用 | Boolean | false | — | false |
| dialog-width | 弹窗宽度 | String | false | — | '600px' |
| validate-option | 验证选项 | Object | false | — | {} |`,
  "db-date-range": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| - | 默认选中的快捷时间按钮索引 | Number | false | - | 0 |
| - | 默认时间范围 [开始时间, 结束时间] | Array | false | - | [] |
| - | 是否在组件初始化时触发快捷时间选择 | Boolean | false | - | true |
| - | 是否显示日期选择器 | Boolean | false | - | true |
| - | 自定义时间间隔配置，格式：[{text, value}] | Array | false | - | [] |
| - | 强制时间范围模式，始终返回计算后的时间范围 | Boolean | false | - | false |
| - | 日期选择器类型 | String | false | - | 'daterange' |
| - | 日期选择器配置选项 | Object | false | - | null |`,
  "db-date-time-range-select": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| value | 绑定值，日期时间范围数组 | Array | false | - | [] |
| range | 可选择的时间范围限制 | Array | false | - | [7天前, 当前时间] |
| shortcuts | 快捷选项配置 | Object | false | - | null |
| cellClassName | 自定义日期单元格的类名 | Function | false | - | - |
| firstDayOfWeek | 周起始日（1-7，周一到周日） | Number | false | - | 7 |`,
  "db-input-number": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| modelValue | 绑定值，支持 v-model | Number | false | - | 0 |
| min | 允许的最小值 | Number | false | - | 1 |
| precision | 数值精度，即小数点后保留的位数 | Number | false | - | 0 |`,
  "db-specification": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| - | 当前选中的规格对象，支持 v-model | Object | false | - | \`{}\` |
| - | 地域 ID | String | true | - | \`''\` |
| - | 所有可用规格列表 | Array | false | - | \`[]\` |
| - | 是否显示规格类型（共享型/独占型） | Boolean | false | - | \`true\` |
| - | 售罄判断函数，接收规格对象作为参数 | Function | false | - | \`() => false\` |
| - | 每行显示的列数 | Number | false | - | \`5\` |`,
  "db-delete-instance": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| - | 地域 ID | String | true | - | - |
| - | 实例对象信息 | Object | true | - | - |
| - | 删除成功后的回调函数 | Function | false | - | \`null\` |
| - | 删除操作的 API 函数 | Function/Promise | true | - | - |
| - | 是否需要验证实例 ID | Boolean | false | - | \`true\` |
| - | MFA 操作类型标识 | String | false | - | \`''\` |
| - | 允许删除的实例状态列表 | Array | false | - | \`['RUNNING']\` |`,
  "db-deploy-az": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| - | 当前选中的可用区列表，支持 v-model | Array | false | - | \`[]\` |
| - | 地域 ID | String | true | - | - |
| - | 服务代码 | String | true | - | - |
| - | 是否显示部署类型选择 | Boolean | false | - | \`true\` |
| - | 是否支持多可用区选择 | Boolean | false | - | \`true\` |
| - | 是否显示可用区选择提示 | Boolean | false | - | \`true\` |
| - | 是否显示部署类型提示 | Boolean | false | - | \`true\` |
| - | 表单标签宽度 | String | false | - | \`'156px'\` |
| - | 最少选择的可用区数量 | Number | false | - | \`1\` |
| - | 最多选择的可用区数量 | Number | false | - | \`null\` |
| - | 架构类型 | String | false | - | \`''\` |
| - | 部署类型：'single' \ | String | false | - | \`'single'\` |
| - | 售罄状态检查方法 | Function | false | - | \`null\` |
| - | 可用区禁用检查方法 | Function | false | - | \`null\` |
| - | 可用区映射获取方法 | Function | false | - | \`null\` |
| - | 默认选中的可用区数量（多可用区模式） | Number | false | - | \`1\` |
| - | 是否过滤仲裁区 | Boolean | false | - | \`true\` |`,
  "db-dms-login": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| instance | 数据库实例信息对象 | Object | false | - | {} |
| dbType | 数据库类型编号 | Number | false | 见数据库类型常量 | - |
| inActiveStatus | 不可操作的状态列表 | Array | false | - | ['BUILDING'] |`,
  "db-drawer": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| visible | 是否显示抽屉，支持 v-model | Boolean | false | - | false |
| title | 抽屉标题 | String | false | - | '信息' |
| size | 抽屉宽度 | String | false | - | '720px' |
| cb | 确认按钮回调函数，返回 true 关闭抽屉 | Function | false | - | null |
| canConfirm | 是否可以确认，控制确认按钮禁用状态 | Boolean | false | - | true |
| needConfirm | 是否显示确认按钮 | Boolean | false | - | true |
| needCancel | 是否显示取消按钮 | Boolean | false | - | true |`,
  "db-exclude-container": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| moduleId | 模块标识符，用于权限检查 | String | false | - | '' |`,
  "db-form-item-template": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| title | 表单项标题 | String | false | — | 'TiDB' |
| tip | 帮助提示信息 | String | false | — | '' |
| labelWidth | 标签宽度 | String | false | — | '90px' |`,
  "db-group-panel": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| title | 面板标题 | String | false | — | — |`,
  "db-help-info": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| info | 帮助信息文本内容 | String | false | — | '' |
| tipPlacement | Tooltip 显示位置 | String | false | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | 'right' |`,
  "db-k8s-expose": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| actionType | 操作类型 | String | false | 'open' / 'close' / 'modify' | 'open' |
| action | 执行操作的函数 | Function / Promise | false | — | — |
| originAccessType | 当前的访问类型 | String | false | 'NodePort' / 'LoadBalancer' / 'HybridExpose' | '' |
| exposeTypes | 可选的暴露类型列表 | Array | false | — | ['NodePort'] |
| disabled | 是否禁用 | Boolean | false | — | false |
| isExternalAccess | 是否为外网访问模式 | Boolean | false | — | false |`,
  "db-k8s-help-info": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| accessType | 访问类型，用于控制显示内容 | String | false | - | \`''\` |`,
  "db-lazy-component": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| \`timeout\` | 延迟加载时间（毫秒），设置后将不使用 IntersectionObserver | \`Number\` | false | - | - |
| \`tagName\` | 根元素标签名 | \`String\` | false | - | \`'div'\` |
| \`viewport\` | 指定视口元素，默认为浏览器视口 | \`HTMLElement\` | false | - | \`null\` |
| \`threshold\` | 触发懒加载的距离阈值 | \`String\` | false | - | \`'0px'\` |
| \`direction\` | 滚动方向，可选值：\`'vertical'\` \ | \`String\` | false | - | \`'vertical'\` |
| \`maxWaitingTime\` | 最大等待时间（毫秒） | \`Number\` | false | - | \`50\` |`,
  "db-maintain-display": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| \`serviceCode\` | 服务代码，用于获取对应服务的维护信息 | \`String\` | false | - | \`''\` |
| \`type\` | 通知类型，可选值：\`'success'\` \ | \`String\` | false | - | \`'warning'\` |`,
  "db-maintain-time": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| maintainTime | 维护时间对象，包含 weekDays 和 timeSlot | Object | false | - | null |
| action | 更新维护时间的回调函数 | Function | true | - | - |
| timeStart | 时间选择的起始小时 | Number | false | - | 0 |
| timeGap | 时间间隔（小时） | Number | false | - | 1 |
| showTips | 是否显示提示信息 | Boolean | false | - | true |
| isUtc | 是否使用 UTC 时间 | Boolean | false | - | true |
| runningStatus | 允许操作的实例状态列表 | Array | false | - | ['RUNNING', 'ACTIVE'] |
| instance | 实例对象，用于权限检查 | Object | false | - | - |
| timeSlotSplit | 时间段分隔符 | String | false | - | '-' |`,
  "db-migration-az": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| instance | 实例对象，必须包含 azId 属性 | Object | true | - | - |
| regionId | 地域 ID | String | true | - | - |
| serviceCode | 服务代码 | String | true | - | - |
| arch | 架构类型，如 'x86_64', 'arm64' | String | false | - | '' |
| title | 对话框标题，默认使用国际化文本 | String | false | - | '' |
| action | 迁移操作的回调函数 | Function/Promise | true | - | - |
| labelWidth | 表单标签宽度 | String | false | - | '120px' |
| dialogWidth | 对话框宽度 | String | false | - | '30%' |
| disabled | 是否禁用触发器 | Boolean | false | - | false |
| showOperError | 是否显示操作成功/失败消息 | Boolean | false | - | true |`,
  "db-operation-conainer": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| size | 直接显示的操作按钮数量，超出部分收纳到下拉菜单 | Number | false | — | 2 |
| is-button | 下拉触发器是否使用按钮样式 | Boolean | false | true / false | false |
| force-reresh | 是否强制刷新下拉菜单项的 key，用于动态内容更新 | Boolean | false | true / false | false |`,
  "db-region-quota-tip": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| service-code | 服务代码，用于获取对应服务的配额信息 | String | false | — | '' |
| quota-info | 外部传入的配额信息对象，必须包含 availableQuota 字段 | Object | false | — | null |
| region-id | 区域 ID，用于获取指定区域的配额信息 | String | false | — | '' |
| is-inject | 是否使用外部传入的配额数据 | Boolean | false | true / false | false |
| show-quota-tip | 是否显示配额提示信息 | Boolean | false | true / false | true |
| get-quota-method | 自定义配额获取方法，返回值必须包含 availableQuota 字段 | Function | false | — | null |
| min-quota | 最小配额要求，当可用配额小于此值时显示提示 | Number | false | — | 1 |`,
  "db-region-radio": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| value / v-model | 当前选中的地域 ID | String | false | — | '' |
| service-code | 服务代码，用于获取地域列表 | String | false | — | — |
| show-quota-tip | 是否显示配额提示 | Boolean | false | — | false |
| get-quota-method | 获取配额信息的方法 | Function | false | — | null |
| regions | 自定义地域列表 | Array | false | — | [] |
| show-region-tip | 是否显示地域提示信息 | Boolean | false | — | false |
| is-yj-online | 是否为易捷版在线环境 | Boolean | false | — | 根据 feature 自动判断 |
| is-open-cloud | 是否为开放云环境 | Boolean | false | — | 根据 feature 自动判断 |
| is-inject | 是否使用外部注入的配额数据 | Boolean | false | — | false |
| quota-info | 配额信息对象（支持 .sync 修饰符） | Object | false | — | null |
| min-quota | 最小配额要求 | Number | false | — | 1 |
| filter-methods | 地域过滤方法，用于自定义地域列表过滤逻辑 | Function | false | — | null |`,
  "db-region-text": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| region-id | 地域 ID | String | false | — | — |
| service-code | 服务代码，用于获取地域映射 | String | false | — | — |
| is-yj-online | 是否为易捷版在线环境 | Boolean | false | — | 根据 feature 自动判断 |
| is-open-cloud | 是否为开放云环境 | Boolean | false | — | 根据 feature 自动判断 |
| regions-map | 外部传入的地域映射关系（支持 .sync 修饰符） | Object | false | — | {} |`,
  "db-reset-password": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| regionId | 地域 ID | \`string\` | ✅ | - | - |
| instanceId | 实例 ID | \`string\` | ✅ | - | - |
| accountName | 账户名称 | \`string\` | ✅ | - | - |
| modifyAction | 修改密码的 API 方法 | \`Function\` | ✅ | - | - |
| disabled | 是否禁用 | \`boolean\` | ❌ | - | \`false\` |
| dialogWidth | 对话框宽度 | \`string\` | ❌ | - | \`'620px'\` |
| validateOption | 密码验证选项 | \`object\` | ❌ | - | \`{}\` |`,
  "db-selected-tags": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| modelValue | 已选标签数据（支持 v-model） | \`TagItem[]\` | ❌ | - | \`[]\` |`,
  "db-status": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| status | 当前状态值 | \`String\` | ❌ | - | \`''\` |
| statusText | 状态文本映射对象 | \`Object\` | ✅ | - | - |
| middleStatus | 进行中状态数组（蓝色+闪烁） | \`Array\` | ❌ | - | \`['BUILDING']\` |
| errorStatus | 错误状态数组（红色） | \`Array\` | ❌ | - | \`['ERROR']\` |
| inActiveStatus | 非活跃状态数组（灰色） | \`Array\` | ❌ | - | \`[]\` |`,
  "db-switch-external-access": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| publicDomain | 外网访问域名 | \`String\` | ❌ | - | \`''\` |
| disabled | 是否禁用操作 | \`Boolean\` | ❌ | - | \`false\` |
| action | 切换操作的异步函数 | \`Function\` \ | \`Promise\` | - | ✅ |`,
  "db-switch-external-access-charge": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| instance | 实例数据对象 | \`Object\` | ✅ | - | \`{}\` |
| regionId | 地域 ID | \`string\` | ✅ | - | - |
| action | 操作处理函数 | \`Function \ | Promise\` | - | ✅ |
| actionType | 操作类型 | \`string\` | ❌ | - | \`'open'\` |
| minBandwidth | 最小带宽值 | \`number\` | ❌ | - | \`3\` |
| maxBandwidth | 最大带宽值 | \`number\` | ❌ | - | \`2000\` |
| defaultBandwidth | 默认带宽值 | \`number\` | ❌ | - | \`20\` |
| supportSSL | 是否支持 SSL | \`boolean\` | ❌ | - | \`true\` |
| formula | 自定义计费公式 | \`Array\` | ❌ | - | \`[]\` |
| runningStatus | 允许操作的运行状态 | \`Array\` | ❌ | - | \`['running']\` |
| needChargeNormal | 是否需要正常计费检查 | \`boolean\` | ❌ | - | \`true\` |
| serviceCode | 服务代码 | \`string\` | ✅ | - | - |
| bandwidthChargeCode | 带宽计费代码 | \`string\` | ❌ | - | \`'bwp'\` |`,
  "db-upgrade-to-multi-az": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| azId | 当前实例的可用区 ID 列表 | \`Array\` | ✅ | - | \`[]\` |
| regionId | 地域 ID | \`string\` | ✅ | - | - |
| serviceCode | 服务代码 | \`string\` | ✅ | - | - |
| arch | 架构类型 | \`string\` | ❌ | - | \`''\` |
| title | 对话框标题 | \`string\` | ❌ | - | \`''\` |
| action | 升级操作的 API 方法 | \`Function \ | Promise\` | - | ✅ |
| disabled | 是否禁用 | \`boolean\` | ❌ | - | \`false\` |`,
  "db-vpc-link": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| regionId | 地域 ID | \`string\` | ❌ | - | \`''\` |
| vpcId | VPC ID | \`string\` | ❌ | - | \`''\` |
| subnetId | 子网 ID | \`string\` | ❌ | - | \`''\` |
| disableLink | 是否禁用链接 | \`boolean\` | ❌ | - | \`false\` |
| onlyShowId | 是否仅显示 ID | \`boolean\` | ❌ | - | 根据 \`createNetWork\` 功能特性决定 |
| isYjOnline | 是否为易捷线上环境 | \`boolean\` | ❌ | - | 根据 \`yjOnline\` 功能特性决定 |
| isOpenCloud | 是否为开放云环境 | \`boolean\` | ❌ | - | 根据 \`openCloud\` 功能特性决定 |
| isCoc | 是否为 COC 环境 | \`boolean\` | ❌ | - | \`false\` |`,
  "db-vpc-select": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| regionId | 地域 ID | String | false | — | '' |
| vpc | 当前选中的 VPC 对象 | Object | false | — | {} |
| subnet | 当前选中的子网对象 | Object | false | — | null |
| needIp | 需要的 IP 数量，用于子网筛选 | Number | false | — | 0 |
| filters | VPC 过滤条件数组 | Array | false | — | [] |
| disabled | 是否禁用 | Boolean | false | — | false |
| isYjOnline | 是否为应急在线环境 | Boolean | false | — | 根据 feature 检测 |
| isOpenCloud | 是否为开放云环境 | Boolean | false | — | 根据 feature 检测 |`,
  "db-weeks-check": `[dbUI://404.html) 
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| modelValue / v-model | 选中的星期数组 | Array | false | Monday-Sunday | ['Monday'] |
| isText | 是否为文本显示模式 | Boolean | false | true/false | false |`
};
