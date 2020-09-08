var obj = JSON.parse($response.body);

obj= {
  "endAt": 9999999999999,
  "id": "1",
  "name": "普通会员",
  "ownership": "annual",
  "startAt": 1599530007,
  "usageType": "unlimited"
}

$done({body: JSON.stringify(obj)});

//HT
