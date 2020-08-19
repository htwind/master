var obj = JSON.parse($response.body);

obj= {
  "result": {
    "period": "12",
    "createDate": "2020-08-18T16:40:07+0000",
    "startDate": "2020-08-18T16:40:04+0000",
    "endDate": "2099-08-22T16:40:04+0000"
  };
 
 $done({body: JSON.stringify(obj)});
