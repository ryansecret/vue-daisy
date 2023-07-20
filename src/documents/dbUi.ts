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
    | onlyShowId | 只是显示id,用于没有vpc 接口的环境 | Boolean | true | -   | ''  |`
};