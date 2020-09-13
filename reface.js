var obj = JSON.parse($response.body);
obj= {
  "receipt_response": {
    "status": 0,
    "environment": "Production",
    "receipt": {
      "receipt_type": "Production",
      "adam_id": 1488782587,
      "app_item_id": 1488782587,
      "bundle_id": "com.neocortext.doublicatapp",
      "application_version": "268",
      "download_id": 110056888879335,
      "version_external_identifier": 837601895,
      "receipt_creation_date": "2020-09-06 15:19:43 Etc/GMT",
      "receipt_creation_date_ms": "1599405583000",
      "receipt_creation_date_pst": "2020-09-06 08:19:43 America/Los_Angeles",
      "request_date": "2020-09-06 15:26:29 Etc/GMT",
      "request_date_ms": "1599405989608",
      "request_date_pst": "2020-09-06 08:26:29 America/Los_Angeles",
      "original_purchase_date": "2020-08-09 03:45:14 Etc/GMT",
      "original_purchase_date_ms": "1596944714000",
      "original_purchase_date_pst": "2020-08-08 20:45:14 America/Los_Angeles",
      "original_application_version": "245",
      "in_app": [
        {
          "quantity": "1",
          "product_id": "com.neocortext.doublicatapp.subscription.promos.annual.50off",
          "transaction_id": "700000550119763",
          "original_transaction_id": "700000550119763",
          "purchase_date": "2020-09-06 15:19:42 Etc/GMT",
          "purchase_date_ms": "1599405582000",
          "purchase_date_pst": "2020-09-06 08:19:42 America/Los_Angeles",
          "original_purchase_date": "2020-09-06 15:19:43 Etc/GMT",
          "original_purchase_date_ms": "1599405583000",
          "original_purchase_date_pst": "2020-09-06 08:19:43 America/Los_Angeles",
          "expires_date": "2099-09-09 15:19:42 Etc/GMT",
          "expires_date_ms": "1599664782000",
          "expires_date_pst": "2099-09-09 08:19:42 America/Los_Angeles",
          "web_order_line_item_id": "700000215449648",
          "is_trial_period": "false",
          "is_in_intro_offer_period": "false"
        }
      ]
    },
    "latest_receipt_info": [
      {
        "quantity": "1",
        "product_id": "com.neocortext.doublicatapp.subscription.promos.annual.50off",
        "transaction_id": "700000550119763",
        "original_transaction_id": "700000550119763",
        "purchase_date": "2020-09-06 15:19:42 Etc/GMT",
        "purchase_date_ms": "1599405582000",
        "purchase_date_pst": "2020-09-06 08:19:42 America/Los_Angeles",
        "original_purchase_date": "2020-09-06 15:19:43 Etc/GMT",
        "original_purchase_date_ms": "1599405583000",
        "original_purchase_date_pst": "2020-09-06 08:19:43 America/Los_Angeles",
        "expires_date": "2099-09-09 15:19:42 Etc/GMT",
        "expires_date_ms": "1599664782000",
        "expires_date_pst": "2099-09-09 08:19:42 America/Los_Angeles",
        "web_order_line_item_id": "700000215449648",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "subscription_group_identifier": "20610456"
      }
    ],
    "latest_receipt": "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",
    "pending_renewal_info": [
      {
        "auto_renew_product_id": "com.neocortext.doublicatapp.subscription.promos.annual.50off",
        "original_transaction_id": "700000550119763",
        "product_id": "com.neocortext.doublicatapp.subscription.promos.annual.50off",
        "auto_renew_status": "1"
      }
    ]
  }
};

$done({body: JSON.stringify(obj)});

//HT
