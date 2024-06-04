export default {
     "db-status": {
        "attributes": ["status","statusText", "middleStatus","errorStatus"],
        "description": "instance status",
        "framework": "dbUI"
      },
      "db-auto-load-select": {
        "attributes": ["v-model","valueKey","lableKey", "getList","pageSize"],
        "description": "下拉自动加载的select",
        "framework": "dbUI"
      },
      "db-date-range": {
        "attributes": ["defaultShortcutsIndex","timeDefault","enabledInit", "needDatePicker"],
        "description": "时间选择",
        "framework": "dbUI"
      },
      "db-deploy-az": {
        "attributes": ["regionId","serviceCode","supportMultiRadio", "showAzTip","labelWidth","min","max","arch","type","soldOutMethod","disableAzMethod","azsMapMethod","defaultSelectAzNum"],
        "description": "az 部署",
        "framework": "dbUI"
      },
      "db-specification": {
        "attributes": ["regionId","v-model","all-specs", "soldOutFilter","displayType","columnNum"],
        "description": "规格展示",
        "framework": "dbUI"
      },
      "db-confirm": {
        "attributes": ["title","visible","cb", "canConfirm","needConfirm","needCancel","width"],
        "description": "dialog wrapper",
        "framework": "dbUI"
      },
      "db-delete-instance": {
        "attributes": ["regionId","instance","deleteAction", "callback","needValidateId","mfaActionType"],
        "description": "删除实例",
        "framework": "dbUI"
      },
      "db-reset-password": {
        "attributes": ["regionId","instanceId","modifyAction", "dialogWidth","validateOption","disabled"],
        "description": "重置密码",
        "framework": "dbUI"
      },
      "db-create-account": {
        "attributes": ["regionId","instanceId","createAction", "dialogWidth","validateOption","disabled"],
        "description": "创建账号",
        "framework": "dbUI"
      },
      "db-vpc-link": {
        "attributes": ["regionId","vpcId","subnetId", "onlyShowId"],
        "description": "Vpc 链接",
        "framework": "dbUI"
      },
      "db-vpc-select": {
        "attributes": ["regionId","vpc","subnet", "disableVpc","needIp","filters"],
        "description": "vpc Select",
        "framework": "dbUI"
      },
      "db-k8s-expose": {
        "attributes": ["actionType","action","originAccessType", "exposeTypes","disabled"],
        "description": "k8s 对外服务",
        "framework": "dbUI"
      },
      "db-k8sinfo": {
        "attributes": ["accessType"],
        "description": "k8s 对外服务help图标",
        "framework": "dbUI"
      },
      "db-weeks-check": {
        "attributes": ["v-model","isText"],
        "description": "周选择checkbox",
        "framework": "dbUI"
      },
      "db-switch-external-access": {
        "attributes": ["public-domain","disabled","action"],
        "description": "周选择checkbox",
        "framework": "dbUI"
      },
      "db-region-radio": {
        "attributes": ["serviceCode","showQuotaTip","getQuotaMethod","showRegionTip",'regions'],
        "description": "周选择checkbox",
        "framework": "dbUI"
      },
     
};