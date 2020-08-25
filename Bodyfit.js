var obj = JSON.parse($response.body);

obj= {
  "givenExpiration": 1595741353427,
  "isFreeTrialEligible": false,
  "active": true,
  "inGracePeriod": true
};

$done({body: JSON.stringify(obj)});

//HT
