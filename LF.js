var obj = JSON.parse($response.body);

obj= {
  "userid": 48577618,
  "firstname": "",
  "lastname": "",
  "gender": "male",
  "country": "VN",
  "email": "",
  "birthdate": "",
  "registerdate": "2020-09-01",
  "startdate": "2020-09-01",
  "profile_image": null,
  "height": ,
  "water": ,
  "loseweight": ,
  "lossperweek": ,
  "startweight": ,
  "targetweight": ,
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
  "weight": ,
  "premium": true
};

$done({body: JSON.stringify(obj)});

//HT
