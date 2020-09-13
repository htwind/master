var obj = JSON.parse($response.body);

obj= {
  "userid": 48577618,
  "firstname": "Hoàng",
  "lastname": "",
  "gender": "male",
  "country": "VN",
  "email": "ltmoffline@gmail.com",
  "birthdate": "1994-09-01",
  "registerdate": "2020-09-01",
  "startdate": "2020-09-01",
  "profile_image": null,
  "height": 164,
  "water": 2000,
  "loseweight": 0,
  "lossperweek": 0.5,
  "startweight": 59,
  "targetweight": 63,
  "usesmetric": true,
  "useskj": false,
  "usesstones": false,
  "activity": 1.375,
  "custom1name": "",
  "custom1sufix": "",
  "custom2name": "",
  "custom2sufix": "",
  "custom3name": "",
  "custom3sufix": "",
  "custom4name": "",
  "custom4sufix": "",
  "facebook_profile_image": "",
  "facebook_id": null,
  "measurement_type": "eu",
  "user_set_calories": 0,
  "haspassword": true,
  "weight": 59,
  "premium": true
};

$done({body: JSON.stringify(obj)});

//HT
