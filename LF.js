var obj = JSON.parse($response.body);

obj= {
  "premium": true
};

$done({body: JSON.stringify(obj)});

//HT
