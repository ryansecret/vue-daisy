export default {
    "jcb-charge-info": {
        "attributes": ["chargeInfo", "deadlineTimeSpan"],
        "description": "chargeInfo",
        "framework": "jelement-biz"
      },
     "jcb-operation-check": {
        "attributes": ["instanceInfo", "deadlineTimeSpan","externalCheck","needInstanceStatus","needChargeNormal","tipPlacement"],
        "description": "操作是否可用check",
        "framework": "jelement-biz"
      },
      "jcb-edit-white-list": {
        "attributes": ["instance", "regionId","ipList","groupName","editAction","singleGroupMaxIpCount","maxTotalIpCount","otherGroupTotalIpCount"],
        "description": "编辑白名单",
        "framework": "jelement-biz"
      },
      "jcb-az-selector": {
        "attributes": [
          "v-model",
          "serviceCode",
          "regionId",
          "type",
          "supportSale",
          "autoSelect",
          "disabled"
        ],
        "description": "使用商业平台`resourcecenter/getAzMapping`接口获取可用区数据，支持地域和可用区的关联映射、售罄等逻辑",
        "framework": "jelement-biz"
      },
      "jcb-bill-period-radio": {
        "attributes": [
          "v-model",
          "regionId",
          "serviceCode",
          "minMonth",
          "maxMonth",
          "minYear",
          "maxYear"
        ],
        "description": "购买时长选择组件",
        "framework": "jelement-biz"
      },
      "jcb-bucket-select": {
        "attributes": [
          "v-model",
          "regionId",
          "selectable",
          "showRefresh",
          "noDataText",
          "defaultFirstOption",
          "disabled",
          "clearable"
        ],
        "description": "bucket下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-buy-list": {
        "description": "购物清单"
      },
      "jcb-cidr": {
        "attributes": [
          "v-model",
          "masks"
        ],
        "description": "CIDR输入组件,支持传入自定义CIDR和0~32范围内掩码",
        "framework": "jelement-biz"
      },
      "jcb-cloud-disk-pack": {
        "attributes": [
          "renderConfig",
          "regionId",
          "needChangeToDefaultVal",
          "i18nKey",
          "serviceCode",
          "lAz",
          "diskItem",
          "diskSizeOption",
          "diskType"
        ],
        "description": "",
        "framework": "jelement-biz"
      },
      "jcb-coc-subnet-select": {
        "attributes": [
          "v-model",
          "regionId",
          "vpcId",
          "subnetId",
          "labelFilter",
          "selectedByDefault",
          "refetchInFocus",
          "disabled",
          "subnetDisabled",
          "searchable",
          "clearable",
          "refreshable",
          "defaultFirstOption",
          "noDataText",
          "filters"
        ],
        "description": "coc子网下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-coc-vpc-select": {
        "attributes": [
          "v-model",
          "regionId",
          "vpcId",
          "labelFilter",
          "selectedByDefault",
          "refetchInFocus",
          "disabled",
          "searchable",
          "clearable",
          "refreshable",
          "defaultFirstOption",
          "noDataText",
          "filters"
        ],
        "description": "cocvpc下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-combined-search": {
        "attributes": [
          "filterGroup",
          "defaultKey",
          "tags",
          "matchKeyFunction",
          "noMatchedSearchKeyTip",
          "matchSearchKeyIntroduction"
        ],
        "description": "联合搜索:允许添加多个条件标签进行搜索",
        "framework": "jelement-biz"
      },
      "jcb-d-form": {
        "description": "动态表单组件可以通过json定义呈现出组件"
      },
      "jcb-datetime-range-selector": {
        "attributes": [
          "v-model",
          "relativeTimeRange"
        ],
        "description": "",
        "framework": "jelement-biz"
      },
      "jcb-doc-help": {
        "description": "帮助文档"
      },
      "jcb-fail-result": {
        "attributes": [
          "status",
          "backUrl",
          "backText"
        ],
        "description": "异常组件",
        "framework": "jelement-biz"
      },
      "jcb-hosted-account-cascader": {
        "attributes": [
          "v-model"
        ],
        "description": "此组件适用于接入`安全运营中心-安全托管`功能的产品线，支持在控制台显示所有被托管账号以及当前登录的账号，并进行切换。",
        "framework": "jelement-biz"
      },
      "jcb-hosted-bill": {
        "attributes": [
          "hosted",
          "customerText",
          "price"
        ],
        "description": "",
        "framework": "jelement-biz"
      },
      "jcb-investigate-button": {
        "attributes": [
          "title",
          "url",
          "openNewTab"
        ],
        "description": "控制台调查问卷组件",
        "framework": "jelement-biz"
      },
      "jcb-logset-select": {
        "attributes": [
          "v-model",
          "regionId",
          "showRefresh",
          "showCreate"
        ],
        "description": "日志集选择器",
        "framework": "jelement-biz"
      },
      "jcb-logtopic-select": {
        "attributes": [
          "v-model",
          "regionId",
          "logsetId",
          "logType",
          "showRefresh",
          "showCreate"
        ],
        "description": "日志主题选择器",
        "framework": "jelement-biz"
      },
      "jcb-metirc-select": {
        "attributes": [
          "v-model",
          "regionId",
          "namespaceUuid",
          "selectable",
          "filterable",
          "showRefresh",
          "selectedByDefault",
          "noDataText",
          "defaultFirstOption",
          "disabled",
          "clearable"
        ],
        "description": "namespace下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-monitor-chart": {
        "attributes": [
          "params",
          "enableSwitchAggregates",
          "enableAutoUpdate",
          "enableFullChart",
          "updateChartData"
        ],
        "description": "监控图",
        "framework": "jelement-biz"
      },
      "jcb-monitor-dashboard": {
        "attributes": [
          "params",
          "updateDashboardData"
        ],
        "description": "监控仪表盘",
        "framework": "jelement-biz"
      },
      "jcb-namespace-select": {
        "attributes": [
          "v-model",
          "regionId",
          "selectable",
          "filterable",
          "showRefresh",
          "selectedByDefault",
          "noDataText",
          "defaultFirstOption",
          "disabled",
          "clearable"
        ],
        "description": "namespace下拉框组件",
        "framework": "jelement-biz"
      },
    
      "jcb-operation-protect": {
        "description": "操作保护是指当您在进行敏感操作的时候，在操作最终执行前要求用户进行身份验证，最大程度的防止对资源的误删和误操作，当前支持对主账号和子账号单独设置，提供三种身份验证方式：MFA 验证，短信验证，邮箱验证。敏感操作保护的对接说明及相关文档请见 CF：https://cf.jd.com/pages/viewpage.action?pageId=97080896"
      },
      "jcb-project-select": {
        "attributes": [
          "v-model",
          "defaultSelect"
        ],
        "description": "项目/系统 下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-region-selector": {
        "attributes": [
          "v-model",
          "serviceCode",
          "type",
          "supportSale",
          "disabled"
        ],
        "description": "地域切换组件",
        "framework": "jelement-biz"
      },
      "jcb-renew-button": {
        "attributes": [
          "regionId",
          "resourceId",
          "chargeMode",
          "serviceCode",
          "resourceType",
          "appCode",
          "renewalDomain",
          "disabled"
        ],
        "description": "续费按钮组件",
        "framework": "jelement-biz"
      },
      "jcb-resourcegroup-select": {
        "attributes": [
          "v-model",
          "filterable",
          "showRefresh",
          "showCreate",
          "disableItem"
        ],
        "description": "资源组下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-resourcegroup-tip": {
        "attributes": [
          "showDocsLink"
        ],
        "description": "资源组提示",
        "framework": "jelement-biz"
      },
      "jcb-resourcegroup-transfer-button-with-relation-resources": {
        "attributes": [
          "resourceIds",
          "type",
          "resourcegroupId",
          "appendToBody",
          "showFilterStep"
        ],
        "description": "资源组迁移按钮",
        "framework": "jelement-biz"
      },
      "jcb-resourcegroup-transfer": {
        "attributes": [
          "resources",
          "type",
          "appendToBody"
        ],
        "description": "变更资源组",
        "framework": "jelement-biz"
      },
      "jcb-securityGroup-select": {
        "description": "安全组下拉框组件"
      },
      "jcb-service-code-select": {
        "attributes": [
          "v-model",
          "filterable",
          "clearable",
          "siteId",
          "appId"
        ],
        "description": "产品线下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-services-line-select": {
        "description": "业务线下拉框组件"
      },
      "jcb-ssh-select": {
        "attributes": [
          "v-model",
          "regionId",
          "selectable",
          "filterable",
          "showRefresh",
          "selectedByDefault",
          "noDataText",
          "defaultFirstOption",
          "disabled",
          "clearable"
        ],
        "description": "ssh下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-subnet-select": {
        "attributes": [
          "v-model",
          "regionId",
          "vpcId",
          "subnetId",
          "labelFilter",
          "selectedByDefault",
          "refetchInFocus",
          "disabled",
          "searchable",
          "clearable",
          "refreshable",
          "subnetType",
          "laz",
          "defaultFirstOption",
          "noDataText",
          "filters"
        ],
        "description": "子网下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-tag-creationform": {
        "attributes": [
          "tags",
          "regionId",
          "serviceCodes",
          "strict"
        ],
        "description": "该业务组件用于资源创建的表单中，实现打标签的功能。",
        "framework": "jelement-biz"
      },
      "jcb-tag-edit": {
        "attributes": [
          "visible",
          "regionId",
          "serviceCode",
          "resourceIds",
          "AppendToBody"
        ],
        "description": "用户可通过标签实现对各种应用场景下（产品线控制台、监控、账单）对资源的批量管理及信息分类，但当用户资源量级较大时，存在编辑资源标签较困难的情况，资源批量打标业务组件支持批量编辑用户资源的标签（最多同时编辑100个资源），你可以通过对接此组件便捷的实现对资源批量打标的功能。批量打标对接说明及相关文档请见：",
        "framework": "jelement-biz"
      },
      "jcb-tag-filter": {
        "attributes": [
          "regionId",
          "serviceCode",
          "selectedTagKeys",
          "placement",
          "filterNodeMethod",
          "kind",
          "allowSearchNoTag",
          "displaySystemTag"
        ],
        "description": "该业务组件用于按标签筛选资源的场景",
        "framework": "jelement-biz"
      },
      "jcb-time-offset-selector": {
        "attributes": [
          "v-model",
          "currentTimerange"
        ],
        "description": "时间同比环比选择器",
        "framework": "jelement-biz"
      },
      "jcb-tpaas-app-select": {
        "attributes": [
          "v-model",
          "proIdent",
          "defaultSelect"
        ],
        "description": "应用 下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-vm-select": {
        "attributes": [
          "v-model",
          "regionId",
          "selectedByDefault",
          "searchable",
          "refreshable",
          "extraFilter",
          "customClass",
          "dark",
          "vmDisabled"
        ],
        "description": "主机下拉框组件",
        "framework": "jelement-biz"
      },
      "jcb-vpc-cidr": {
        "attributes": [
          "v-model",
          "parentCidr",
          "netSegment"
        ],
        "description": "VPC CIDR和Subnet CIDR输入组件",
        "framework": "jelement-biz"
      },
      "jcb-vpc-link": {
        "attributes": [
          "regionId",
          "vpcId",
          "vpc",
          "type",
          "textType",
          "showCopy",
          "showModify",
          "host"
        ],
        "description": "",
        "framework": "jelement-biz"
      },
      "jcb-vpc-select": {
        "attributes": [
          "v-model",
          "regionId",
          "vpcId",
          "labelFilter",
          "selectedByDefault",
          "refetchInFocus",
          "disabled",
          "searchable",
          "clearable",
          "refreshable",
          "defaultFirstOption",
          "noDataText",
          "filters"
        ],
        "description": "vpc下拉框组件",
        "framework": "jelement-biz"
      }
      
};