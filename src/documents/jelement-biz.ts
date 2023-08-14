export default {
    'jcb-az-selector': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/az-selector.html](http://pro.tangram.jdcloud.com/docs/zh/components/az-selector.html) \n
      | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
      | --- | --- | --- | --- | --- | --- |
      | v-model | 绑定值，可用区ID | String | true | -   | -   |
      | service-code | 业务线 serviceCode | String | true | -   | -   |
      | region-id | 地域ID | String | true | -   | -   |
      | type | 组件选择器的UI样式类型 | String | false | radioButton / select | radioButton |
      | support-sale | 是否支持可售卖逻辑 | Boolean | false | -   | false |
      | auto-select | 是否自动选中一个可用区 | Boolean | false | -   | false |
      | disabled | 是否禁用整个可用区选择器 | Boolean | false | -   | false |`,
  
    'jcb-bucket-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/bucket-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/bucket-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | value    | bucket对象  | Object |               - |   - |
      | selectedByDefault    | 是否默认选中第一项 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | selectable  | Function 的返回值用来决定该option是否可以选中，返回true则可选，返回字符串则显示这个字符串为tooltip提示 | Function(item, index) | -              | false   |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | show-refresh    | 是否显示刷新按钮，刷新按钮可重新加载bucket | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 filterable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |`,
  
    'jcb-buy-list': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/buy-list.html](http://pro.tangram.jdcloud.com/docs/zh/components/buy-list.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | details    | 添加购物车参数，对象数组 | Array |               true |   - |`,
  
    'jcb-charge-info': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/charge-info.html](http://pro.tangram.jdcloud.com/docs/zh/components/charge-info.html) \n
      | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
      | --- | --- | --- | --- | --- | --- |
      | chargeInfo | 计费信息 | Object | true | -   | -   |
      | deadlineTimeSpan | 包年包月计费模式下，需要check的时间段，到期时间-当前时间< deadlineTimeSpan 到期时间会标红。单位天 | Number | true | -   |   30   |`,
  
    'jcb-cidr': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/cidr.html](http://pro.tangram.jdcloud.com/docs/zh/components/cidr.html) \n
      | Attribute         | Description   | Type    | Accepted values  | Default        | Required |
      | ----------------- | ------------ | ------ | --------------- | ------------- | ------- |
      | value             | CIDR          | String  | -                | 0.0.0.0/0      | true     |
      | masks             | 掩码数组       | Array   | 0~32的数字组成的数组 | [0,1,2,...,32] | false   |`,
  
    'jcb-cloud-disk-pack': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/cloud-disk-pack.html](http://pro.tangram.jdcloud.com/docs/zh/components/cloud-disk-pack.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | diskItem    | 云盘信息 | DiskItem |               false |   - |
      | renderConfig    | 展示配置信息，默认为全部展示 | renderConfig |               false |   {} |
      | serviceCode | 暂时先填vm，用于查询iops相关限制                                         |  String |               false |       vm |
      | regionId | region id                                          |  String |               true |       - |
      | i18nKey | 国际化参数 en 英文 cn 中文                                          |  String |               false |       - |
      | lAz | 逻辑AZ信息                                         |  String |               true |       - |
      | isFromImage | 是否来自私有镜像                                        |  boolean |               false |       - |
      | isFromSnapshot | 是否来自快照                                        |  boolean |               false |       - |
      | diskType | systemDisk:系统盘 dataDisk:数据盘 | String |               false |      dataDisk  |
      | diskItem    | 云盘信息 | DiskItem |               ture | -   |
      | diskSizeOption    | 云盘可售上下限配置信息 例如{ssd:{max:1000,min:10,step:10},若不传按接口返回的来}| DiskSizeOption |               false | -   |
      | snapShotDetail    | 快照信息 如果是从快照读取的信息，需要传 | snapShotDetail |               false |   - |
      | diskDetail    | 盘信息，如果是从私有镜像读取的信息，需要传 | diskDetail |               false |   - |
      | needChangeToDefaultVal | 是否需要选择默认第一个未售罄的盘类型                                        |  boolean |               false |       - |`,
  
    'jcb-coc-subnet-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/coc-subnet-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/coc-subnet-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | vpcId    | 私有网络id | string |               - |   - |
      | labelFilter    | 自定义选项的label显示，默认展示vpcName | Function |               - |   - |
      | selectedByDefault    | 默认选中第一项 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | subnetDisabled    | 是否禁用选项 | Function |               - |   - |
      | refetchInFocus    | 是否下拉时重新获取数据 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | searchable    | 是否可搜索 | boolean |   (目前仅支持 subnet 名称、id精确匹配)  |   false |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | refreshable    | 是否显示刷新按钮，刷新按钮可重新加载subnet | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 searchable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | filters    | openAPI筛选项 | Array |               例如[{name:'azs',values:['cn-e2-hbwh1']}]业务组件库服务做了一层封装，最终将此格式转化为filters.1.name=azs&filters.1.values.1=cn-e2-hbwh1 传给Api层 |   [] |`,
  
    'jcb-coc-vpc-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/coc-vpc-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/coc-vpc-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | vpcId    | Vpc ID,默认选中和该ID一致的vpc | string |               - |   - |
      | labelFilter    | 自定义选项的label显示，默认展示vpcName | Function |               - |   - |
      | selectedByDefault    | 是否默认选中第一项 | boolean |               - |   false |
      | refetchInFocus    | 是否下拉时重新获取数据 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | searchable    | 是否可搜索 | boolean |   (目前仅支持 vpc 名称、id精确匹配)  |   false |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | refreshable    | 是否显示刷新按钮，刷新按钮可重新加载vpc | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 searchable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | filters    | openAPI筛选项 | Array |               例如[{name:'azType',values:['edge']}]业务组件库服务做了一层封装，最终将此格式转化为filters.1.name=azType&filters.1.values.1=edge 传给Api层 |   [] |`,
  
    'jcb-combined-search': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/combined-search.html](http://pro.tangram.jdcloud.com/docs/zh/components/combined-search.html) \n
      | Attribute  |      Description       |   Type | Accepted values | Default |
      | ---------- | -------------------- | ----- | -------------- | ------ |
      | filterGroup | 提供多个可配置的搜索选项key | Array |               - |        |
      | defaultKey |  用户输入值默认匹配key,默认空（不匹配）  | String |               - |       - |
      | tags |  初始的标签 | Array |               - |       - |
      | noMatchedSearchKeyTip |  根据用户输入没匹配到搜索项的提示 | String |               - |       '' |
      | matchSearchKeyIntroduction | 帮助文档根据用户输入值匹配搜索选项规则的介绍| String |               - |       '' |
      | matchKeyFunction |  根据用户输入值匹配搜索选项 | Function |               - |      function(userInput){return false} |`,
  
    'jcb-edit-white-list': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/edit-white-list.html](http://pro.tangram.jdcloud.com/docs/zh/components/edit-white-list.html) \n
      | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
      | --- | --- | --- | --- | --- | --- |
      | regionId | 地域ID | String | true | -   | -   |
      | instance | 实例信息 | Object | true | -   | -   |
      | ipList | 初始化的值 | Array | false | -   | []   |
      | groupName | 分组 | String | false |  -  | default  |
      | editAction | 具体的设置白名单请求，各个业务线接口 | Function | true | -   | -  |
      | singleGroupMaxIpCount | 单分组最大的IP个数 | Number | false | -   | -  |
      | maxTotalIpCount | 所有分组最大的IP个数，默认为0 不检测 | Number | false | -   | 0  |
      | otherGroupTotalIpCount | 其他分组总IP个数 | Number | false | -   | 0  |`,
  
    'jcb-fail-result': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/fail-result.html](http://pro.tangram.jdcloud.com/docs/zh/components/fail-result.html) \n
      | Attribute | Description | Required |   Type | Accepted values | Default |
      |-----------|------------| ----- | ----- | -------------- |--------|
      | status    | 异常状态码       | true | String | 403/404/500 |       - |
      | backUrl   | 跳转按钮URL     | false | String | 相对路径/绝对路径(网址) |       / |
      | backText  | 跳转按钮方案      | false | String |  |        返回首页 |`,
  
    'jcb-hosted-account-cascader': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/hosted-account-cascader.html](http://pro.tangram.jdcloud.com/docs/zh/components/hosted-account-cascader.html) \n
      | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
      | --- | --- | --- | --- | --- | --- |
      | value/ v-model | 绑定值 | String | true | 如果是系统账号，则是当前登录的pin；如果是被托管账号，则是 被托管账号的pin/建立托管关系的子账号pin 拼接字符串。（如果当前绑定值为空字符串或者未匹配上返回的被托管账号数据，则默认选中系统账号）   | 当前登录的pin  |`,
  
    'jcb-logset-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/logset-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/logset-select.html) \n
      | Attribute  | Description | Required | Type | Accepted values | Default |
      | ---------- | ---------- | ------- | --- | -------------- | ------ |
      | v-model | 日志集id | True | String | - | '' |
      | region-id | 地域 | True | String | - | |
      | show-refresh | 是否显示刷新按钮 |  False | Boolean | - | false |
      | show-create | 是否显示创建链接 | False | Boolean | - | false |`,
  
    'jcb-logtopic-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/logtopic-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/logtopic-select.html) \n
      | Attribute  | Description | Required | Type | Accepted values | Default |
      | ---------- | ---------- | ------- | --- | -------------- | ------ |
      | v-model | 日志主题id | True | String | - | '' |
      | region-id | 地域 | True | String | - | |
      | logset-id | 日志集id | True | String | - | '' |
      | log-type | 日志主题采集的日志类型 | false | String | - | '' |
      | show-refresh | 是否显示刷新按钮 |  False | Boolean | - | false |
      | show-create | 是否显示创建链接 | False | Boolean | - | false |`,
  
    'jcb-metirc-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/metirc-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/metirc-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | value    | namespace对象 例如:{"namespaceName":"k8s","namespaceUuid":"k8s"}  | Object |               - |   - |
      | selectedByDefault    | 是否默认选中第一项 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | filterable    | 是否可搜索 | boolean |   filters 中支持使用以下关键字进行过滤 namespace: namespace名称，要搜索的namespace,支持前缀匹配 |   false |
      | selectable  | Function 的返回值用来决定该option是否可以选中，返回true则可选，返回字符串则显示这个字符串为tooltip提示 | Function(item, index) | -              | false   |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | show-refresh    | 是否显示刷新按钮，刷新按钮可重新加载namespace | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 filterable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |`,
  
    'jcb-monitor-chart': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/monitor-chart.html](http://pro.tangram.jdcloud.com/docs/zh/components/monitor-chart.html) \n
      | Attribute  |      Description       | Required |   Type | Accepted values | Default |
      | ---------- | -------------------- | ----- | ----- | -------------- | ------ |
      | params | 监控参数 | True | Params |               - |      - |
      | enableFullChart | 是否启用大图展示 | False | Boolean | - | false |
      | enableSwitchAggregates | 切换聚合方式 |  false  |  Boolean |   - |      - |
      | updateOptions | 自定义修改图表的配置项 | Function | - | - |
      | updateChartData | 图表数据预处理 | Function | - | - |`,
  
    'jcb-monitor-dashboard': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/monitor-dashboard.html](http://pro.tangram.jdcloud.com/docs/zh/components/monitor-dashboard.html) \n
      | Attribute  |      Description       | Required |   Type | Accepted values | Default |
      | ---------- | -------------------- | ---- |----- | -------------- | ------ |
      | params | 监控参数 |  True  |  Params |      - |      - |
      | enableSwitchAggregates | 切换聚合方式 |  false  |  Boolean |   - |      - |
      | updateOptions | 自定义修改图表的配置项 | Function | - | - |
      | updateChartData | 图表数据预处理 | Function | - | - |
      | updateDashboardData | dashboard数据预处理 | Function | - | - |`,
  
    'jcb-namespace-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/namespace-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/namespace-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | value    | namespace对象 例如:{"namespaceName":"k8s","namespaceUuid":"k8s"}  | Object |               - |   - |
      | selectedByDefault    | 是否默认选中第一项 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | filterable    | 是否可搜索 | boolean |   filters 中支持使用以下关键字进行过滤 namespace: namespace名称，要搜索的namespace,支持前缀匹配 |   false |
      | selectable  | Function 的返回值用来决定该option是否可以选中，返回true则可选，返回字符串则显示这个字符串为tooltip提示 | Function(item, index) | -              | false   |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | show-refresh    | 是否显示刷新按钮，刷新按钮可重新加载namespace | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 filterable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |`,
  
    'jcb-operation-check': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/operation-check.html](http://pro.tangram.jdcloud.com/docs/zh/components/operation-check.html) \n
      | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
      | --- | --- | --- | --- | --- | --- |
      | instanceInfo | 实例信息 | Object | true | -   | -   |
      | runningStatus | 运行状态 | Array | false | -   | ['RUNNING', 'ACTIVE']  |
      | needInstanceStatus | 是否需要check 实例状态，99%场景需要 | Bool | false | -   | true  |
      | needChargeNormal | 是否需要计费状态为正常,有些操作不需要check 计费 | Bool | false | -   | true  |
      | externalCheck | 外部的check逻辑，method 返回禁止操作的tips,可以操作返回空字符 | Function | false | -   | null  |
      | tipPlacement | tooltip 的显示位置，继承于tooltip prop | String | top | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end  | null  |`,
  
    'jcb-opt-protect': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/operation-protect.html](http://pro.tangram.jdcloud.com/docs/zh/components/operation-protect.html) \n
      | Attribute  |      Description       |   Type | Accepted values | Default |
      | ---------- | -------------------- | ----- | -------------- | ------ |
      | visible | 是否显示操作保护弹出框，支持 .sync 修饰符 | boolean |               - |       false |
      | actionType | serviceName:actionName | String |               - |       - |
      | append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | Boolean |               - |       false |`,
  
    'jcb-project-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/project-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/project-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | value / v-model | 绑定值 |  string | — | — |
      | defaultSelect    | 默认选中第一项 | boolean |               - |   false |
      | disabled | 是否禁用 | boolean | — | false |
      | clearable | 是否可以清空选项 | boolean | — | false |
      | autocomplete | select input 的 autocomplete 属性 | string | — | off |
      | placeholder | 占位符 | string | — | 请选择 |
      | no-match-text | 搜索条件无匹配时显示的文字 | string | — | 无匹配数据 |
      | no-data-text | 选项为空时显示的文字 | string | — | 无数据 |`,
  
    'jcb-region-selector': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/region-selector.html](http://pro.tangram.jdcloud.com/docs/zh/components/region-selector.html) \n
      | Attribute  |      Description       | Required |   Type | Accepted values | Default |
      | ---------- | -------------------- | ----- | ----- | -------------- | ------ |
      | v-model | 地域ID | True | String |               - |      - |
      | serviceCode | 业务线serviceCode | True | String | - |      - |
      | type | 组件选择器的UI样式类型 |  false  |  String |   radioButton/select |      radioButton |
      | supportSale | 是否支持可售卖逻辑 | false | Boolean | - | false |
      | disabled | 是否禁用整个地域选择器 | false | Boolean | - | false |`,
  
    'jcb-renew-button': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/renew-button.html](http://pro.tangram.jdcloud.com/docs/zh/components/renew-button.html) \n
      | Attribute   | Description       | Type    | Default                       | Required | Extra                                      |
      |-------------|-------------------|---------|-------------------------------|----------|--------------------------------------------|
      | regionId    | 地域ID              | String  | -                             | true     | -                                          |
      | serviceCode | 产品线serviceCode    | String  | -                             | true     | -                                          |
      | resourceId  | 资源ID              | String  | -                             | true     | -                                          |
      | chargeMode  | 计费类型，用于确定续费按钮展示文本 | String  | -                             | true     | prepaid_by_duration / postpaid_by_duration |
      | resourceType| 产品线唯一code         | String  | -                             | true     | -                                          |
      | appCode    | 所属业务线             | String  | jcloud                        | false    | -                                          |
      | renewalDomain    | 续费跳转的Domain       | String  | //renewal-console.jdcloud.com | false    | -                                          |
      | disabled    | 是否禁用状态            | Boolean  | false                         | false    | -                                          |`,
  
    'jcb-resourcegroup-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-select.html) \n
      | Attribute    | Description | Type    | Default |
      |--------------|-------------|---------|---------|
      | filterable   | 是否开启搜索      | Boolean | false   |
      | disabled     | 是否禁用        | Boolean | false   |
      | popper-class | 下拉框的类名      | String  |         |
      | multiple     | 是否多选        | Boolean | false   |
      | show-refresh | 是否显示刷新按钮    | Boolean| false|
      | show-create | 是否显示创建链接 | Boolean | false |`,
  
    'jcb-resourcegroup-tip': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-tip.html](http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-tip.html) \n
      | Attribute | Description          |    Type | Accepted values | Default |
      |--------|---------------------|--------| -------------- |--------|
      | showDocsLink       | 是否显示文档链接             | Boolean |               - |    true |`,
  
    'jcb-resourcegroup-transfer-button-with-relation-resources': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-transfer-button-with-relation-resources.html](http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-transfer-button-with-relation-resources.html) \n
      | Attribute          | Description                                                                                     |                Type | Accepted values | Default |
      |--------------------|------------------------------------------------------------------------------------------------|--------------------| -------------- |--------|
      | resourceIds        | 不使用filterStep时，直接指定要迁移的资源                                                                       | Array< resourceId > |               - |      [] |
      | resourcegroupId    | 资源组ID                                                                                           |              String |               - |        '' |
      | showFilterStep     | 是否显示过滤Step                                                                                      |             Boolean |               - |   false |
      | append-to-body     | whether to append Dialog itself to body. A nested Dialog should have this attribute set to true |             Boolean |               - |   false |
      | 其他属性请参考el-button组件 | -                                                                                               |                   - |       - |`,
  
    'jcb-resourcegroup-transfer': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-transfer.html](http://pro.tangram.jdcloud.com/docs/zh/components/resourcegroup-transfer.html) \n
      | Attribute          | Description                                                                                     |                                                                                                                  Type | Accepted values | Default |
      |--------------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------| -------------- |--------|
      | resources          | 资源列表，包含资源ID和资源名称                                   | [{resourceId: string, resourceName: string, groupId: string}] ，resourceId为实例ID，resourceName为实例名称(用于展示)，groupId为原资源组ID |               - |       - |
      | append-to-body     | whether to append Dialog itself to body. A nested Dialog should have this attribute set to true |                                                                                                               Boolean |               - |   false |`,
  
    'jcb-security-group-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/security-group-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/security-group-select.html) \n
      | Attribute   | Description                                                     |    Type | Accepted values | Default |
      | ----------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 地域ID                                                           | string  | -               | -       |
      | value/v-model | 当前绑定的安全组数据                                        | object/array  | -               | -       |
      | vpcId       | 私有网络ID                                                       | string   | -               | -       |
      | multiple    | 是否支持多选                                                      | boolean  | -              | false   |
      | selectable  | Function 的返回值用来决定该option是否可以选中，返回true则可选，返回字符串则显示这个字符串为tooltip提示 | Function(item, index) | -              | false   |
      | selectedByDefault | 是否默认选中第一项                                           | boolean | -               | false   |
      | disabled    | 是否禁用                                                         | boolean | -               | false   |
      | searchable  | 是否可搜索                                             | boolean | (当前支持名称模糊匹配、ID精确匹配) | false |
      | refreshable | 是否显示刷新按钮，刷新按钮可重新加载可选项                             | boolean | -               |   false |
      | default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 searchable使用      | boolean | -               |   false |
      | no-data-text | 选项为空时显示的文字                                               | string | -               |   无数据 |
      | filters     | openAPI筛选项                                   | Array | eg: [{name:'azType',values:['edge']}] | -    |`,
  
    'jcb-service-code-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/service-code-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/service-code-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | filterable    | 是否可搜索(目前仅支持 name 名称) | boolean |               - |   true |
      | clearable    | 是否支持清空 | number |               - | false |
      | siteId    | 站点ID | number |               - | false |
      | appId    | 业务线ID | number |               - | false |
      | v-model    | 绑定的值 | object |               - | true |`,
  
    'jcb-services-line-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/services-line-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/services-line-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | appId    | 业务线ID | number |               - |  -1(全部) |
      | filterable    | 是否可搜索(目前仅支持 name 名称) | boolean |               - |   true |
      | clearable    | 是否支持清空 | number |               - | false |`,
  
    'jcb-ssh-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/ssh-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/ssh-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | value    | ssh对象 例如:{"keyName":"create_keypair_test","keyFingerprint":"ed:f3:89:99:bc:64:07:84:1f:55:a0:91:98:6c:4d:ee","createTime":"2022-07-29 15:50:25","instanceIds":[]}  | Object |               - |   - |
      | selectedByDefault    | 是否默认选中第一项 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | filterable    | 是否可搜索 | boolean |   filters 中支持使用以下关键字进行过滤 keyNames: 密钥对名称，精确匹配，支持多个 |   false |
      | selectable  | Function 的返回值用来决定该option是否可以选中，返回true则可选，返回字符串则显示这个字符串为tooltip提示 | Function(item, index) | -              | false   |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | show-refresh    | 是否显示刷新按钮，刷新按钮可重新加载ssh | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 filterable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | filters    | openAPI筛选项 | Array |               例如[{name:'keyNames',values:['sjnTest']}]业务组件库服务做了一层封装，最终将此格式转化为filters.1.name=azType&filters.1.values.1=edge 传给Api层 |   [] |`,
  
    'jcb-subnet-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/subnet-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/subnet-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | vpcId    | 私有网络id | string |               - |   - |
      | subnetType    | 子网类型 | string |  all，standard，edge             - |   standard |
      | labelFilter    | 自定义选项的label显示，默认展示vpcName | Function |               - |   - |
      | selectedByDefault    | 默认选中第一项 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | refetchInFocus    | 是否下拉时重新获取数据 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | searchable    | 是否可搜索 | boolean |   (目前仅支持 subnet 名称、id精确匹配)  |   false |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | refreshable    | 是否显示刷新按钮，刷新按钮可重新加载subnet | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 searchable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | filters    | openAPI筛选项 | Array |               例如[{name:'azs',values:['cn-e2-hbwh1']}]业务组件库服务做了一层封装，最终将此格式转化为filters.1.name=azs&filters.1.values.1=cn-e2-hbwh1 传给Api层 |   [] |`,
  
    'jcb-tag-creationform': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/tag-creationform.html](http://pro.tangram.jdcloud.com/docs/zh/components/tag-creationform.html) \n
      | Attribute  |      Description       | Required |   Type | Accepted values | Default |
      | ---------- | -------------------- | ----- | ----- | -------------- | ------ |
      | service-codes | service codes  | false | Array |               - |      - |
      | region-id  | region id    | true | String | - | - |
      | strict  | 是否开启严格表单校验模式    | false | Boolean | - | false |`,
  
    'jcb-tag-edit': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/tag-edit.html](http://pro.tangram.jdcloud.com/docs/zh/components/tag-edit.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | visible    | 是否显示批量打标 | boolean |               - |   false |
      | service-code | service code                                          |  String |               - |       - |
      | region-id | region id                                          |  String |               - |       - |
      | resource-ids | 资源 id                                           |  Array |               - |       - |
      | append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | Boolean |               - |       false |`,
  
    'jcb-tag-filter': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/tag-filter.html](http://pro.tangram.jdcloud.com/docs/zh/components/tag-filter.html) \n
      | Attribute  | Description                                                    |   Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | --------------- | ------ |
      | service-code | service code                                          |  String |               - |       - |
      | region-id | region id                                          |  String |               - |       - |
      | selected-tag-keys | 所选标签的 id。 例如: key: 111, value: 222 则 id 为: 111*222                                        |  Array<string\\> |               - |       [] |
      | disabled | disabled                                          |  Boolean |               - |       false |
      | placement | 出现位置	                                          |  String |               top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |    bottom-end |
      | filter-node-method |  **标签**展示的过滤方法, 返回 **true**表示节点可以展示，否则节点被忽略	                                          |  Function(tag) |               Boolean |    - |
      | kind |  按类型搜索标签 (目前仅支持查询所有类型标签及费用属性标签，后期会逐步添加.默认不需要配置)	                                          |  String |               all | cost |    all |
      | display-system-tag | 显示系统标签                                       |  Boolean |               - |       false |`,
  
    'jcb-time-offset-selector': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/time-offset-selector.html](http://pro.tangram.jdcloud.com/docs/zh/components/time-offset-selector.html) \n
      | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
      | --- | --- | --- | --- | --- | --- |
      | v-model | 时间偏移量（秒为单位） | Number | true | -   | 0   |
      | current-timerange | 当前的时间范围 | Array [from, to] | true | -   | -   |`,
  
    'jcb-tpaas-app-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/tpaas-app-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/tpaas-app-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | value / v-model | 绑定值 |  string | — | — |
      | proIdent | 项目/系统 ID（必传字段） | string |  — |   — |
      | defaultSelect    | 默认选中第一项 | boolean |               — |   false |
      | disabled | 是否禁用 | boolean | — | false |
      | clearable | 是否可以清空选项 | boolean | — | false |
      | autocomplete | select input 的 autocomplete 属性 | string | — | off |
      | placeholder | 占位符 | string | — | 请选择 |
      | no-match-text | 搜索条件无匹配时显示的文字 | string | — | 无匹配数据 |
      | no-data-text | 选项为空时显示的文字 | string | — | 无数据 |`,
  
    'jcb-vm-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/vm-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/vm-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | extraFilter    | 过滤主机的参数 | Object |               - |   {} |
      | searchable    | 是否可搜索 | boolean |     |   false |
      | refreshable    | 是否显示刷新按钮，刷新按钮可重新加载vm | boolean |               - |   false |
      | selectedByDefault    | 是否默认选中第一项,仅适用于 searchable 为false 时 | boolean |               - |   false |
      | vmDisabled    | 是否禁用选项 | Function |               - |   - |`,
  
    'jcb-vpc-cidr': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/vpc-cidr.html](http://pro.tangram.jdcloud.com/docs/zh/components/vpc-cidr.html) \n
      | Attribute         | Description   | Type    | Accepted values  | Default        | Required |
      | ----------------- | ------------ | ------ | --------------- | ------------- | ------- |
      | value             | CIDR          | String  | -                | 0.0.0.0/16     | true     |
      | netSegment        | 可选网段数组    | Array   | -                | [10, 172, 192] | false    |
      | vpcCidr           | 创建子网时，需传入VPC CIDR，用以限制子网网段范围 | String  | - | -  | false    |`,
  
    'jcb-vpc-link': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/vpc-link.html](http://pro.tangram.jdcloud.com/docs/zh/components/vpc-link.html) \n
      | Attribute  |      Description       |   Type | Accepted values | Default | Required |
      | ---------- | -------------------- | ----- | -------------- | ------ | ------  |
      |regionId | 地域ID | String | -  | - | true |
      | vpcId | 私有网络ID  | String | -  | - | true |
      | vpc | 私有网络 | Object | -  | {} | false |
      | type | 以链接形式或文本形式显示Id | String |  link, text | link | false |
      | textType | 以ID或Name显示 | String | name, id  | name| false |
      | hostName | 兼容jdStack域名跳转 | String | - | jdcloud.com | false |
      | showCopy | 是否显示复制按钮 | Boolean | true, false | false | false |
      | showModify | 是否显示修改按钮（textType为name时才允许修改） | Boolean | true, false | false | false |`,
  
    'jcb-vpc-select': `[element:http://pro.tangram.jdcloud.com/docs/zh/components/vpc-select.html](http://pro.tangram.jdcloud.com/docs/zh/components/vpc-select.html) \n
      | Attribute  | Description                                                     |    Type | Accepted values | Default |
      | ---------- | -------------------------------------------------------------- | ------ | -------------- | ------ |
      | regionId    | 区域ID | string |               - |   - |
      | vpcId    | Vpc ID,默认选中和该ID一致的vpc | string |               - |   - |
      | labelFilter    | 自定义选项的label显示，默认展示vpcName | Function |               - |   - |
      | selectedByDefault    | 是否默认选中第一项 | boolean |               - |   false |
      | refetchInFocus    | 是否下拉时重新获取数据 | boolean |               - |   false |
      | disabled    | 是否禁用 | boolean |               - |   false |
      | searchable    | 是否可搜索 | boolean |   (目前仅支持 vpc 名称、id精确匹配)  |   false |
      | clearable    | 是否可以清空选项 | boolean |               - |   false |
      | refreshable    | 是否显示刷新按钮，刷新按钮可重新加载vpc | boolean |               - |   false |
      | default-first-option    | 在输入框按下回车，选择第一个匹配项。需配合 searchable使用 | boolean |               - |   false |
      | no-data-text   | 选项为空时显示的文字 | string |               - |   无数据 |
      | filters    | openAPI筛选项 | Array |               例如[{name:'azType',values:['edge']}]业务组件库服务做了一层封装，最终将此格式转化为filters.1.name=azType&filters.1.values.1=edge 传给Api层 |   [] |`,
  }  