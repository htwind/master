var obj = JSON.parse($response.body);

obj= {
  "status": "OK",
  "msg": "",
  "code": 200,
  "data": {
    "isAuthorized": true
  }
};
$done({body: JSON.stringify(obj)});
