var obj = JSON.parse($response.body);

obj= {
  "subscription": {
    "product_id": "onlinebackup_h_1y",
    "transaction_id": "700000541064469",
    "package_id": "premium",
    "expire_date": 1599832021
  }
};

 $done({body: JSON.stringify(obj)});
