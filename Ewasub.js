var obj = JSON.parse($response.body);

obj= {
  "result": {
    "_id": "1864ca6d-3800-4f33-a3b8-510d95319cbe",
    "ownerId": null,
    "subscriptionId": premium,
    "permissions": null,
    "createDate": "2020-08-18T16:40:07+0000",
    "startDate": "2020-08-18T16:40:04+0000",
    "endDate": "2099-08-22T16:40:04+0000"
  };

 $done({body: JSON.stringify(obj)});
