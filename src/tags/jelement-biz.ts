export default {
    "jcb-charge-info": {
        "attributes": ["chargeInfo", "deadlineTimeSpan"],
        "description": "chargeInfo",
        "framework": "jelement-biz"
      },
     "jcb-operation-check": {
        "attributes": ["instanceInfo","runningStatus", "deadlineTimeSpan","externalCheck","needInstanceStatus","needChargeNormal","tipPlacement"],
        "description": "操作是否可用check",
        "framework": "jelement-biz"
      },
      "jcb-edit-white-list": {
        "attributes": ["instance", "regionId","ipList","groupName","editAction","singleGroupMaxIpCount","maxTotalIpCount","otherGroupTotalIpCount"],
        "description": "编辑白名单",
        "framework": "jelement-biz"
      }
};