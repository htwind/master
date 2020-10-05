var obj = JSON.parse($response.body);
obj= {
  "entitlements": [
    {
      "entitlement_id": "premium",
      "expires_date_ms": 9999999999999,
      "purchase_date_ms": 1601890378000,
      "product_identifier": "SpeedTest_Lifetime_Premium_20190920",
      "is_in_trial_period": false,
      "is_in_intro_offer_period": false,
      "environment": "Production",
      "redeem": {},
      "auto_renew": true
    }
  ],
  "is_valid": true
};



$done({body: JSON.stringify(obj)});


//HT
