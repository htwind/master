var obj = JSON.parse($response.body);

obj= {
  {
  "status": "ok",
  "receipt": {
    "estimated_renewal": 1598449621,
    "valid": true,
    "timestamp": 1597844826,
    "renewal_info": [
      {
        "product_id": "onlinebackup_h_1y",
        "original_transaction_id": "700000541064469",
        "auto_renew_product_id": "onlinebackup_h_1y",
        "auto_renew_status": "1"
      }
    ],
    "expires": 1599832021,
    "renewal_state": false
  },
  "created": 1597769447,
  "uid": "",
  "sessions": {
    "status": "ok",
    "created": 1597769450,
    "modified": 1597769450,
    "sessions": 0
  }
};
 $done({body: JSON.stringify(obj)});
