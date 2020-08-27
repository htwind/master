var obj = JSON.parse($response.body);

obj= {
  "guide": null,
  "finished_no": 0,
  "study_no": 0,
  "test_level": -1,
  "user_level_exp": 0,
  "email": null,
  "mobile": "382818701",
  "username": null,
  "perfect": 1,
  "visitor": 2,
  "vip": 0,
  "vip_expired": 12,
  "vip_label": "Thời gian trải nghiệm đến: 2099-09-03",
  "free_time": 600,
  "trial_time_left": 9999999999999,
  "usage_date": "",
  "usage_time": 0,
  "serverTime": 1598541843,
  "followers": 0,
  "fans": 0,
  "grammar_count": 0,
  "word_count": 0,
  "over_students": "",
  "dict_words": 1,
  "vip_buy_action": "superchinese://pay",
  "vip_buy_url": {
    "local": "index.html?h5=1&v=1#/?lang=vi&access_token=J_5Rc9P_ok-rmBgTs81X5Iewy2ILtwPn",
    "web": "http://f.hskcdn.com/h5/scvip/index.html?h5=1#/?lang=vi&access_token=J_5Rc9P_ok-rmBgTs81X5Iewy2ILtwPn"
  },
  "vip_buy_guide": {
    "interval": 1,
    "daily_limit": 9999
  },
  "ploy": {
    "value": 0,
    "is_old": 0,
    "name": "原长版"
  },
  "voice": 2
};

$done({body: JSON.stringify(obj)});

//HT
