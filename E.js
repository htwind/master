var obj = JSON.parse($response.body);
obj= {
"result": {
    "_id": "1864ca6d-3800-4f33-a3b8-510d95319cbe",
    "period": "6",
    "subscriptionId": premium,
    "ownerId": null,
    "startDate": "2020-09-03T03:53:20+0000",
    "endDate": "2099-09-07T03:53:20+0000",
    "createDate": "2020-09-03T03:53:25+0000",
    "permissions": unlimited
  }
};

$done({body: JSON.stringify(obj)});


//HT
