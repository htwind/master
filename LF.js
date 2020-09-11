var obj = JSON.parse($response.body);

obj= {
  "registerdate": "2020-09-01",
  "startdate": "2020-09-01",
  "usesmetric": true,
  "useskj": false,
  "usesstones": false,
  "activity": 1.375,
  "measurement_type": "eu",
  "haspassword": true,
  "premium": true
};

$done({body: JSON.stringify(obj)});

//HT
