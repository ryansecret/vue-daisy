export default {
  "db-auto-load-select": {
    attributes: ["model-value", "value-key", "lable-key", "get-list", "page-size"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-auto-resize-container": {
    attributes: ["无"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-auto-resize-radio-group": {
    attributes: ["model-value", "items"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-az-select": {
    attributes: ["value", "region-id", "service-code", "min", "type"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-az-text": {
    attributes: [
      "az-ids",
      "region-id",
      "service-code",
      "arch",
      "azs-map-method",
      "is-yj-online",
      "is-open-cloud"
    ],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-charge-mode-radio": {
    attributes: ["model-value", "charge-modes"],
    description: "## 概述",
    framework: "dbUI"
  },
  "db-confirm": {
    attributes: [],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-content-tooltip": {
    attributes: ["info"],
    description: "## 概述",
    framework: "dbUI"
  },
  "db-copy-btn": {
    attributes: ["content", "tip-placement"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-create-account": {
    attributes: [
      "region-id",
      "instance-id",
      "create-action",
      "disabled",
      "dialog-width",
      "validate-option"
    ],
    description: "## 概述",
    framework: "dbUI"
  },
  "db-date-range": {
    attributes: [],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-date-time-range-select": {
    attributes: ["value", "range", "shortcuts", "cell-class-name", "first-day-of-week"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-input-number": {
    attributes: ["model-value", "min", "precision"],
    description: "## 功能描述",
    framework: "dbUI"
  },
  "db-specification": {
    attributes: [
      "model-value",
      "region-id",
      "all-specs",
      "display-type",
      "sold-out-predicate",
      "column-num"
    ],
    description:
      "DbSpecification 是一个用于数据库规格选择的组件，提供了一个可视化的规格选择界面。组件基于 Element UI 的 radio-group 和 radio-button 实现，支持分组",
    framework: "dbUI"
  },
  "db-delete-instance": {
    attributes: [
      "region-id",
      "instance",
      "callback",
      "delete-action",
      "need-validate-id",
      "mfa-action-type",
      "can-delete-status"
    ],
    description:
      "DeleteInstance 是一个用于删除数据库实例的安全操作组件。该组件集成了操作权限检查、实例 ID 验证、MFA 多因子认证、预付费实例保护等多重安全机制，确保删除操作的安全性和可靠性。",
    framework: "dbUI"
  },
  "db-deploy-az": {
    attributes: [
      "value",
      "region-id",
      "service-code",
      "show-deploy-type",
      "support-multi-radio",
      "show-az-tip",
      "show-deploy-tip",
      "label-width",
      "min",
      "max",
      "arch",
      "type",
      "sold-out-method",
      "disable-az-method",
      "azs-map-method",
      "default-select-az-num",
      "filter-arbitration-az"
    ],
    description:
      "DeployAz 是一个用于数据库可用区部署配置的组件，提供了单可用区和多可用区部署模式的选择和配置功能。该组件集成了可用区选择器，支持灵活的部署策略配置，并提供完整的表单验证和用户引导功能。",
    framework: "dbUI"
  },
  "db-dms-login": {
    attributes: ["instance", "db-type", "in-active-status"],
    description: "dbDmsLogin 组件",
    framework: "dbUI"
  },
  "db-drawer": {
    attributes: ["visible", "title", "size", "cb", "can-confirm", "need-confirm", "need-cancel"],
    description: "dbDrawer 组件",
    framework: "dbUI"
  },
  "db-exclude-container": {
    attributes: ["module-id"],
    description: "dbExcludeContainer 组件",
    framework: "dbUI"
  },
  "db-form-item-template": {
    attributes: ["title", "tip", "label-width"],
    description: "dbFormItemTemplate 组件",
    framework: "dbUI"
  },
  "db-group-panel": {
    attributes: ["title"],
    description: "dbGroupPanel 组件",
    framework: "dbUI"
  },
  "db-help-info": {
    attributes: ["info", "tip-placement"],
    description: "DbHelpInfo 组件",
    framework: "dbUI"
  },
  "db-k8s-expose": {
    attributes: [
      "action-type",
      "action",
      "origin-access-type",
      "expose-types",
      "disabled",
      "is-external-access"
    ],
    description: "## 概述",
    framework: "dbUI"
  },
  "db-k8s-help-info": {
    attributes: ["access-type"],
    description: "dbK8sHelpInfo 组件",
    framework: "dbUI"
  },
  "db-lazy-component": {
    attributes: [
      "`timeout`",
      "`tag-name`",
      "`viewport`",
      "`threshold`",
      "`direction`",
      "`max-waiting-time`"
    ],
    description: "dbLazyComponent 组件",
    framework: "dbUI"
  },
  "db-maintain-display": {
    attributes: ["`service-code`", "`type`"],
    description: "dbMaintainDisplay 组件",
    framework: "dbUI"
  },
  "db-maintain-time": {
    attributes: [
      "maintain-time",
      "action",
      "time-start",
      "time-gap",
      "show-tips",
      "is-utc",
      "running-status",
      "instance",
      "time-slot-split"
    ],
    description: "dbMaintainTime 组件",
    framework: "dbUI"
  },
  "db-migration-az": {
    attributes: [
      "instance",
      "region-id",
      "service-code",
      "arch",
      "title",
      "action",
      "label-width",
      "dialog-width",
      "disabled",
      "show-oper-error"
    ],
    description: "DbMigrationAz 组件",
    framework: "dbUI"
  },
  "db-operation-conainer": {
    attributes: ["size", "is-button", "force-reresh"],
    description:
      "操作容器组件用于管理和展示一组操作按钮，当操作按钮数量超过指定限制时，多余的按钮会收纳到下拉菜单中。",
    framework: "dbUI"
  },
  "db-region-quota-tip": {
    attributes: [
      "service-code",
      "quota-info",
      "region-id",
      "is-inject",
      "show-quota-tip",
      "get-quota-method",
      "min-quota"
    ],
    description: "dbRegionQuotaTip 组件",
    framework: "dbUI"
  },
  "db-region-radio": {
    attributes: [
      "value / v-model",
      "service-code",
      "show-quota-tip",
      "get-quota-method",
      "regions",
      "show-region-tip",
      "is-yj-online",
      "is-open-cloud",
      "is-inject",
      "quota-info",
      "min-quota",
      "filter-methods"
    ],
    description: "DbRegionRadio 组件",
    framework: "dbUI"
  },
  "db-region-text": {
    attributes: ["region-id", "service-code", "is-yj-online", "is-open-cloud", "regions-map"],
    description: "DbRegionText 组件",
    framework: "dbUI"
  },
  "db-reset-password": {
    attributes: [
      "region-id",
      "instance-id",
      "account-name",
      "modify-action",
      "disabled",
      "dialog-width",
      "validate-option"
    ],
    description: "dbResetPassword 组件",
    framework: "dbUI"
  },
  "db-selected-tags": {
    attributes: ["model-value"],
    description: "dbSelectedTags 组件",
    framework: "dbUI"
  },
  "db-status": {
    attributes: ["status", "status-text", "middle-status", "error-status", "in-active-status"],
    description: "dbStatus 组件",
    framework: "dbUI"
  },
  "db-switch-external-access": {
    attributes: ["public-domain", "disabled", "action"],
    description: "dbSwitchExternalAccess 组件",
    framework: "dbUI"
  },
  "db-switch-external-access-charge": {
    attributes: [
      "instance",
      "region-id",
      "action",
      "action-type",
      "min-bandwidth",
      "max-bandwidth",
      "default-bandwidth",
      "support-ssl",
      "formula",
      "running-status",
      "need-charge-normal",
      "service-code",
      "bandwidth-charge-code"
    ],
    description: "dbSwitchExternalAccessCharge 组件",
    framework: "dbUI"
  },
  "db-upgrade-to-multi-az": {
    attributes: ["az-id", "region-id", "service-code", "arch", "title", "action", "disabled"],
    description: "DbUpgradeToMultiAz 组件",
    framework: "dbUI"
  },
  "db-vpc-link": {
    attributes: [
      "region-id",
      "vpc-id",
      "subnet-id",
      "disable-link",
      "only-show-id",
      "is-yj-online",
      "is-open-cloud",
      "is-coc"
    ],
    description: "dbVpcLink 组件",
    framework: "dbUI"
  },
  "db-vpc-select": {
    attributes: [
      "region-id",
      "vpc",
      "subnet",
      "need-ip",
      "filters",
      "disabled",
      "is-yj-online",
      "is-open-cloud"
    ],
    description: "dbVpcSelect 组件",
    framework: "dbUI"
  },
  "db-weeks-check": {
    attributes: ["model-value / v-model", "is-text"],
    description: "DbWeeksCheck 组件",
    framework: "dbUI"
  }
};
