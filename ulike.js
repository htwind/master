var obj = JSON.parse($response.body);

obj= {
  "data": {
    "end_time": 1596700237,
    "uid": "0",
    "start_time": 1596095422,
    "flag": true,
    "is_first_subscribe": true,
    "is_cancel_subscribe": true,
    "subscribe_type": "auto"
  },
  "systime": "",
  "errmsg": "success",
  "ret": "0"
};

$done({body: JSON.stringify(obj)});
