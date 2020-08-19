var obj = JSON.parse($response.body);

obj= {
  "result": {
    "user": {
      "login": "_62d6a16d01008b676178752bf587087f",
      "lang": "vi",
      "activeProfile": "en",
      "registerBySocNet": false,
      "subscription": "premium",
      "hasAcceptedAccounts": false,
      "onboardingFinished": true
    },
    "plans": [
      {
        "_id": "1864ca6d-3800-4f33-a3b8-510d95319cbe",
        "name": "com.ewa.unlimited",
        "description": "iOS unlimited 5990",
        "packageName": "com.ewa.ewaapp",
        "platform": "iOS",
        "type": "Unlimited",
        "currency": "RUB",
        "currencyPrices": {}
      }
    ]
  }
};
 
 $done({body: JSON.stringify(obj)});

