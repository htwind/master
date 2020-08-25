var obj = JSON.parse($response.body);

obj= {
  "isFreeTrialEligible": false,
  "active": true,
  "inGracePeriod": true
};

$done({body: JSON.stringify(obj)});

//HT
