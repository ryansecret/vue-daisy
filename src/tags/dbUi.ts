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
};