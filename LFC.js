var obj = JSON.parse($response.body);
obj= {
  "result": "ok",
  "message": "",
  "user_info": {
    "user_phone": "",
    "user_email": "ltmoffline@gmail.com",
    "user_birth": "",
    "user_sex": " ",
    "user_name": "",
    "user_nickname": "Wind95"
  },
  "list": [],
  "access_token": "bb6896f7921b99ad9662273744a729a2fa7a7d80",
  "payment_status": "SUBS",
  "code": "200"
};

$done({body: JSON.stringify(obj)});


//HT
