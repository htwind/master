var obj = JSON.parse($response.body);
obj= {
  "request_date": "2020-08-11T18:00:30Z",
  "request_date_ms": 1597168830373,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2021-08-11T17:54:14Z",
        "product_identifier": "studio.sweet.Strucc.yearly",
        "purchase_date": "2020-08-11T17:54:14Z"
      }
    },
    "first_seen": "2020-08-11T17:47:47Z",
    "last_seen": "2020-08-11T17:57:01Z",
    "original_purchase_date": "2020-08-11T17:37:53Z",
    "other_purchases": {},
    "subscriptions": {
      "studio.sweet.Strucc.yearly": {
        "expires_date": "2021-08-11T17:54:14Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-08-11T17:54:14Z",
        "period_type": "normal",
        "purchase_date": "2020-08-11T17:54:14Z"
      }
    }
  }
};

$done({body: JSON.stringify(obj)}); 
