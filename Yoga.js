var obj = JSON.parse($response.body);

obj= {
  "request_date": "2020-08-10T18:52:50Z",
  "request_date_ms": 1597085570578,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2020-08-10T18:40:31Z",
    "last_seen": "2020-08-10T18:40:31Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_application_version": "30",
    "original_purchase_date": "2020-08-10T18:36:44Z",
    "other_purchases": {},
    "subscriptions": {
      "1M.sub.yoga.trial7.10": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-08-17T18:51:29Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-08-10T18:51:29Z",
        "period_type": "trial",
        "purchase_date": "2020-08-10T18:51:29Z",
        "store": "app_store"
      }
    }
  }
};

 $done({body: JSON.stringify(obj)});
