export default {
    "jcb-charge-info": `[element：http://pro.tangram.jdcloud.com/docs/zh/components/charge-info.html) \n
    | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
    | --- | --- | --- | --- | --- | --- |
    | chargeInfo | 计费信息 | Object | true | -   | -   |
    | deadlineTimeSpan | 包年包月计费模式下，需要check的时间段，到期时间-当前时间< deadlineTimeSpan 到期时间会标红。单位天 | Number | true | -   |   30   |`,
    "jcb-operation-check": `[element：http://pro.tangram.jdcloud.com/docs/zh/components/operation-check.html) \n
    | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
    | --- | --- | --- | --- | --- | --- |
    | instanceInfo | 实例信息 | Object | true | -   | -   |
    | runningStatus | 运行状态 | Array | false | -   | ['RUNNING', 'ACTIVE']  |
    | needInstanceStatus | 是否需要check 实例状态，99%场景需要 | Bool | false | -   | true  |
    | needChargeNormal | 是否需要计费状态为正常,有些操作不需要check 计费 | Bool | false | -   | true  |
    | externalCheck | 外部的check逻辑，method 返回禁止操作的tips,可以操作返回空字符 | Function | false | -   | null  |
    | tipPlacement | tooltip 的显示位置，继承于tooltip prop | String | top | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end  | null  |`,
    "jcb-edit-white-list": `[element：http://pro.tangram.jdcloud.com/docs/zh/components/edit-white-list.html) \n
    | 参数  | 描述  | 类型  | require | 可选值 | 默认值 |
    | regionId | 地域ID | String | true | -   | -   |
    | instance | 实例信息 | Object | true | -   | -   |
    | ipList | 初始化的值 | Array | false | -   | []   |
    | groupName | 分组 | String | false |  -  | default  |
    | editAction | 具体的设置白名单请求，各个业务线接口 | Function | true | -   | -  |
    | singleGroupMaxIpCount | 单分组最大的IP个数 | Number | false | -   | -  |
    | maxTotalIpCount | 所有分组最大的IP个数，默认为0 不检测 | Number | false | -   | 0  |
    | otherGroupTotalIpCount | 其他分组总IP个数 | Number | false | -   | 0  |`,
};