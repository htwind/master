var obj = JSON.parse($response.body);

obj= {
  "code": 200,
  "data": {
    "hasFreedTrialProds": [
      "com.vivacut.videoeditor.yearlypro"
    ],
    "hasPurchasedProds": [
      "com.vivacut.videoeditor.yearlypro"
    ],
    "list": [
      {
        "autoRenewStatus": true,
        "endTime": 1597072071000,
        "isTrialPeriod": true,
        "orderId": "700000535186055",
        "orderStatus": 1,
        "originalOrderId": "700000535186055",
        "productId": "com.vivacut.videoeditor.yearlypro",
        "productType": 3,
        "sign": "1ab586e44f75d36ebe46dde34f329859",
        "startTime": 1596812871000
      }
    ],
    "systemDate": 1597039242083
  },
  "message": "successful",
  "success": true
};

$done({body: JSON.stringify(obj)});
