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
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:4f472d5591974fe294d2d5b3cff0de63",
    "original_application_version": "792",
    "original_purchase_date": "2020-08-11T17:37:53Z",
    "other_purchases": {},
    "subscriptions": {
      "studio.sweet.Strucc.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2021-08-11T17:54:14Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-08-11T17:54:14Z",
        "period_type": "normal",
        "purchase_date": "2020-08-11T17:54:14Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2020-08-11T17:58:19Z"
      }
    }
  }
};

$done({body: JSON.stringify(obj)});
