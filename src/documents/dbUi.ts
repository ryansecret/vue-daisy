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
    | --- | --- | --- | --- | --- | --- |
    | v-model  | vmodel | Object | true | -   | -   |
    | regionId | region Id | String | true | -   | ''   |
    | allSpecs | 要展示的规格 | Array | true | -   | []  |
    | displayType | 是否展示规格类型，目前有共享和独享 | Boolean | false | -   | true  |
    | columnNum | 每行展示个数 | Number | false | -   | 5  |
    | soldOutFilter | 是否售罄的断言 | Function | true | -   | ()=>false  |`
};