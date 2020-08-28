var obj = JSON.parse($response.body);

obj= {
  "result" : {
    "result" : "success",
    "msTime" : 1598627381780,
    "accountCreatedMillis" : 1598626456000,
    "licenses" : [
      {
        "period" : "1y",
        "orderNumber" : "544381869440001",
        "benefits" : [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing"
        ],
        "productId" : "com.alightcreative.motion.sub.yearly",
        "valid" : true,
        "type" : "subscription",
        "expires" : 9999999999999,
        "store" : "apple_app_store"
      }
    ],
  }
};

$done({body: JSON.stringify(obj)});

//HT
