var obj = JSON.parse($response.body);

obj= {
{
  "result": {
    "user": {
      "_id": "",
      "bill": {
        "_id": "1864ca6d-3800-4f33-a3b8-510d95319cbe",
        "ownerId": "",
        "subscriptionId": null,
        "permissions": null,
        "createDate": "2020-08-18T16:40:07+0000",
        "startDate": "2020-08-18T16:40:04+0000",
        "endDate": "2099-08-22T16:40:04+0000"
      },
   
      "login": "_62d6a16d01008b676178752bf587087f",
      "role": "user",
      "lang": "vi",
      "activeProfile": "en",
      "learnedToday": 0,
      "registerBySocNet": false,
      "hasAcceptedAccounts": false,
      "onboardingFinished": true,
      "subscription": "premium"
    },
    "plans": [
      {
        "_id": "1864ca6d-3800-4f33-a3b8-510d95319cbe",
        "name": "com.ewa.unlimited",
        "description": "iOS unlimited 5990",
        "packageName": "com.ewa.ewaapp",
        "platform": "iOS",
        "type": "Unlimited",
        "discount": 70,
        "price": 5990,
        "currency": "RUB",
        "currencyPrices": {}
      }
    ]
  }
}

$done({body: JSON.stringify(obj)});

//HT
