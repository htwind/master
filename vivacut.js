var obj = JSON.parse($response.body);

obj= {
  "code": 200,
  "data": {
    "list": [
      {
        "autoRenewProductId": "com.vivacut.videoeditor.yearlypro",
        "autoRenewStatus": true,
        "endTime": 9999999999999,
        "isTrialPeriod": true,
        "orderId": "700000535186055",
        "orderStatus": 1,
        "originalOrderId": "700000535186055",
        "productId": "com.vivacut.videoeditor.yearlypro",
        "productType": 3,
        "sign": "bfeef69ac8b451e3b6b858b7246836ea",
        "startTime": 1596812871000
      }
    ],
    "systemDate": 1596812887588
  },
  "message": "successful",
  "success": true
};

 $done({body: JSON.stringify(obj)});
 