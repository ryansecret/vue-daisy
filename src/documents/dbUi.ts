export default {
    "db-date-range": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| defaultShortcutsIndex | 默认选择的1小时 | number | - | 0-6  |  0  |
| needDatePicker | 是否显示DatePicker | Boolean | - | -  |  true |
| timeDefault | 默认选中的时间段 | Date[] | - | -   |   []   |`,
    "db-auto-load-select": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| v-model |  | [Array, Object] | true | -   | []   |
| valueKey | select 多选并绑定Object时指定的valuekey | String | false | -   | ''  |
| lableKey |  select item 绑定Object 时显示的key | String | true | -   | -  |
| getList | 获取数据的方法，此方法需要返回数据结构：{ data, totalCount } | Function | true | -   | -  |
| pageSize | 每次请求的数量 | Function | false | -   | null  |`,
    "db-vpc-link": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| regionId | region Id | String | true | -   | ''   |
| vpcId | vpcId | String | true | -   | ''  |
| subnetId | subnetId | String | true | -   | ''  |
| onlyShowId | 只是显示id,用于没有vpc 接口的环境 | Boolean | true | -   | ''  |`,
    "db-specification": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- | --- |
| v-model  | vmodel | Object | true | -   | -   |
| regionId | region Id | String | true | -   | ''   |
| allSpecs | 要展示的规格 | Array | true | -   | []  |
| displayType | 是否展示规格类型，目前有共享和独享 | Boolean | false | -   | true  |
| columnNum | 每行展示个数 | Number | false | -   | 5  |
| soldOutFilter | 是否售罄的断言 | Function | true | -   | ()=>false  |`,
    "db-create-account": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| regionId | region Id | String | true | -   | ''   |
| instanceId | instanceId | String | true | -   | ''   |
| createAction | 创建的接口调用及其相关操作 | Function | true | -   | -  |
| dialogWidth |  弹框宽度 | String | true | -   | 620px |
| validateOption | 账号密码验证的配置 | Object | false | -   | {} |
| disabled | 是否禁用 | Boolean | false | -   | false |
    
**validateOption**
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nameReg | 账号名regex | Regex | true | -   | /^(?=.*[a-z])[a-zA-Z0-9_]{1,16}$/   |
| pwdReg | 密码regex | Regex | true | -   | /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z\d=!@#$%^&*()+\-_?]{8,32}$/  |
| keepWords | 账号名保留字 | Regex | true | -   | ['jacdb_operator', 'default']  |
| customNameValidate | 账号自定义验证，用户更精细化的验证和提示 | Function | true | -   | - |
| customPwdValidate | 密码自定义验证，用户更精细化的验证和提示 | Function | true | -   | - |

| Slot  | 描述  | 
| :--- | :--- | 
| accountTips  | 表单中的账号描述  |  
| passwordTips  | 表单中的密码描述  |  
    `,
    "db-reset-password": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| regionId | region Id | String | true | -   | ''   |
| instanceId | instanceId | String | true | -   | ''   |
| modifyAction | 修改密码的接口调用及其相关操作 | Function | true | -   | -  |
| dialogWidth |  弹框宽度 | String | true | -   | 620px |
| validateOption | 账号密码验证的配置 | Object | false | -   | {} |
| disabled | 是否禁用 | Boolean | false | -   | false |
    
**validateOption**
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nameReg | 账号名regex | Regex | true | -   | /^(?=.*[a-z])[a-zA-Z0-9_]{1,16}$/   |
| pwdReg | 密码regex | Regex | true | -   | /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z\d=!@#$%^&*()+\-_?]{8,32}$/  |
| keepWords | 账号名保留字 | Regex | true | -   | ['jacdb_operator', 'default'] |
| customNameValidate | 账号自定义验证，用户更精细化的验证和提示 | Function | true | -   | - |
| customPwdValidate | 密码自定义验证，用户更精细化的验证和提示 | Function | true | -   | - |

| Slot  | 描述  | 
| :--- | :--- | 
| passwordTips  | 表单中的密码描述  |  
    `,
  "db-delete-instance": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| regionId | region Id | String | true | -   | ''   |
| instance | instance 对象 | Object | true | -   | -   |
| deleteAction | 删除实例的接口调用及其相关操作 | Function | true | -   | -  |
| callback | 删除之后的回调，比如列表刷新等，也可以在deleteAction 中处理 | Function | true | -   | -  |
| needValidateId | 是否需要输入ID验证 | Boolean | true | -   | true |
| mfaActionType | mfa 时的传参 | String | false | -   | '' |

| Slot  | 描述  | 
| :--- | :--- | 
| info  | 信息展示插槽  |  
`,    
"db-copy-btn": `[dbUI://404.html) \n
| 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
| content | 需要复制的内容 | String | true | -   | ''   |
| tipPlacement | tooltip显示的位置，继承tooltip placement | String | true | -   | -   |

| Slot  | 描述  | 
| :--- | :--- | 
| slot  | 默认插槽，用于布局  |  
 `,    
   "db-confirm": `[dbUI://404.html) \n
 | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
 | --- | --- | --- | --- | --- | --- |
 | title |标题| Sting | - | - |  提示  |
 | visible | 弹框显示与否，为了兼容之前代码，请使用 visible.sync 绑定 | Boolean | - | -  |  fasle |
 | needConfirm | 是否需要显示confirm 按钮 | Boolean | - | -  |  true |
 | needCancel | 是否需要显示cancel 按钮| Boolean | - | -  |  true |
 | canConfirm |  用来控制确定按钮的禁用启用 | Boolean | - | -  |  true |
 | width | 弹框的宽度 | String | - | -  |  480px |
 | cb | 点击确定时触发的操作，成功时需要 return true，否则弹框不能正确关闭  | Function | - | -   |   null   |

 | Slot  | 描述  | 
| :--- | :--- | 
| footer-left  | 弹框底部左侧  |  
| footer | 弹框底部右侧，用来替换确定、取消 按钮 |  
 `, 
  "db-k8sExpose": `[dbUI://404.html) \n
 | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
 | --- | --- | --- | --- | --- | --- |
 | actionType |操作类型| Sting | - | open,close,modify |  open  |
 | action | 各业务线调用的方法  | Function, Promise | true | -  |  - |
 | originAccessType | 现在的对外服务类型 | String | true | 'NodePort','LoadBalancer','HybridExpose'  |  true |
 | exposeTypes | 所有支持的对外服务类型 | Array | - | -  |  ['NodePort'] |
 | disabled |  是否可用 | Boolean | - | -  |  true |
 
 | Slot  | 描述  | 
 | :--- | :--- | 
 | slot | 默认是 button  |  
 `,  
 "db-K8sHelpInfo": `[dbUI://404.html) \n
 | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
 | --- | --- | --- | --- | --- | --- |
 | accessType | 现在的对外服务类型 | String | false | 'NodePort','LoadBalancer','HybridExpose'  |  - |
 `,
};