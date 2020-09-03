var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

if(bundle_id == "fitnessworkout.app")
{
obj =
{
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1472638797,
    "app_item_id": 1472638797,
    "bundle_id": "fitnessworkout.app",
    "application_version": "409",
    "download_id": 110056007164017,
    "version_external_identifier": 836262388,
    "receipt_creation_date": "2020-08-25 08:55:14 Etc/GMT",
    "receipt_creation_date_ms": "1598345714000",
    "receipt_creation_date_pst": "2020-08-25 01:55:14 America/Los_Angeles",
    "request_date": "2020-08-25 08:55:16 Etc/GMT",
    "request_date_ms": "1598345716066",
    "request_date_pst": "2020-08-25 01:55:16 America/Los_Angeles",
    "original_purchase_date": "2020-07-28 04:59:22 Etc/GMT",
    "original_purchase_date_ms": "1595912362000",
    "original_purchase_date_pst": "2020-07-27 21:59:22 America/Los_Angeles",
    "original_application_version": "409",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "fitnessworkout.app.subscription.1weekb",
        "transaction_id": "700000537029265",
        "original_transaction_id": "700000537029265",
        "purchase_date": "2020-08-11 08:04:09 Etc/GMT",
        "purchase_date_ms": "1597133049000",
        "purchase_date_pst": "2020-08-11 01:04:09 America/Los_Angeles",
        "original_purchase_date": "2020-08-11 08:04:09 Etc/GMT",
        "original_purchase_date_ms": "1597133049000",
        "original_purchase_date_pst": "2020-08-11 01:04:09 America/Los_Angeles",
        "expires_date": "2099-08-14 08:04:09 Etc/GMT",
        "expires_date_ms": "1597392249000",
        "expires_date_pst": "2099-08-14 01:04:09 America/Los_Angeles",
        "web_order_line_item_id": "700000208434460",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "fitnessworkout.app.subscription.1weekb",
      "transaction_id": "700000537029265",
      "original_transaction_id": "700000537029265",
      "purchase_date": "2020-08-11 08:04:09 Etc/GMT",
      "purchase_date_ms": "1597133049000",
      "purchase_date_pst": "2020-08-11 01:04:09 America/Los_Angeles",
      "original_purchase_date": "2020-08-11 08:04:09 Etc/GMT",
      "original_purchase_date_ms": "1597133049000",
      "original_purchase_date_pst": "2020-08-11 01:04:09 America/Los_Angeles",
      "expires_date": "2099-08-14 08:04:09 Etc/GMT",
      "expires_date_ms": "1597392249000",
      "expires_date_pst": "2099-08-14 01:04:09 America/Los_Angeles",
      "web_order_line_item_id": "700000208434460",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "subscription_group_identifier": "20549436"
    }
  ],
  "latest_receipt": "MIIUQAYJKoZIhvcNAQcCoIIUMTCCFC0CAQExCzAJBgUrDgMCGgUAMIID4QYJKoZIhvcNAQcBoIID0gSCA84xggPKMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAL0wDQIBAwIBAQQFDAM0MDkwDQIBDQIBAQQFAgMCIuAwDQIBEwIBAQQFDAM0MDkwDgIBAQIBAQQGAgRXxq9NMA4CAQkCAQEEBgIEUDI1NTAOAgELAgEBBAYCBAcUgTcwDgIBEAIBAQQGAgQx2Fn0MBACAQ8CAQEECAIGZBhpNmBxMBQCAQACAQEEDAwKUHJvZHVjdGlvbjAYAgEEAgECBBCMahHXk8VEBRi1n8LOcPf4MBwCAQICAQEEFAwSZml0bmVzc3dvcmtvdXQuYXBwMBwCAQUCAQEEFNFIuStmChqjFt3D+b4tq/H1ACSyMB4CAQgCAQEEFhYUMjAyMC0wOC0yNVQwODo1NToxNFowHgIBDAIBAQQWFhQyMDIwLTA4LTI1VDA4OjU1OjE2WjAeAgESAgEBBBYWFDIwMjAtMDctMjhUMDQ6NTk6MjJaMEsCAQcCAQEEQ7iEw7b16pMRpKDTQDHpdG3y30T4PpbqBSTEdj9pD+APM/UvB4oGmdvR0EZwIxT8ZfionYQ8r7pI/oKzHQsc0B4MQW4wYwIBBgIBAQRbvoylQ37bDMbVMOoXAkiGyU/1u42l5NcYN5Ck/jbyOfDXvyavjzZLmaYWVlf5zVf2rj56ncLEfxpEY1dlCivcvZH11YRuJbX7AZvRlDcWXtJ+NTcjn4PUmB0MRzCCAZQCARECAQEEggGKMYIBhjALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAPAgIGrgIBAQQGAgRYLuGZMBICAgavAgEBBAkCBwJ8pX/ENRwwGgICBqcCAQEEEQwPNzAwMDAwNTM3MDI5MjY1MBoCAgapAgEBBBEMDzcwMDAwMDUzNzAyOTI2NTAfAgIGqAIBAQQWFhQyMDIwLTA4LTExVDA4OjA0OjA5WjAfAgIGqgIBAQQWFhQyMDIwLTA4LTExVDA4OjA0OjA5WjAfAgIGrAIBAQQWFhQyMDIwLTA4LTE0VDA4OjA0OjA5WjAxAgIGpgIBAQQoDCZmaXRuZXNzd29ya291dC5hcHAuc3Vic2NyaXB0aW9uLjF3ZWVrYqCCDmUwggV8MIIEZKADAgECAggO61eH554JjTANBgkqhkiG9w0BAQUFADCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0xNTExMTMwMjE1MDlaFw0yMzAyMDcyMTQ4NDdaMIGJMTcwNQYDVQQDDC5NYWMgQXBwIFN0b3JlIGFuZCBpVHVuZXMgU3RvcmUgUmVjZWlwdCBTaWduaW5nMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClz4H9JaKBW9aH7SPaMxyO4iPApcQmyz3Gn+xKDVWG/6QC15fKOVRtfX+yVBidxCxScY5ke4LOibpJ1gjltIhxzz9bRi7GxB24A6lYogQ+IXjV27fQjhKNg0xbKmg3k8LyvR7E0qEMSlhSqxLj7d0fmBWQNS3CzBLKjUiB91h4VGvojDE2H0oGDEdU8zeQuLKSiX1fpIVK4cCc4Lqku4KXY/Qrk8H9Pm/KwfU8qY9SGsAlCnYO3v6Z/v/Ca/VbXqxzUUkIVonMQ5DMjoEC0KCXtlyxoWlph5AQaCYmObgdEHOwCl3Fc9DfdjvYLdmIHuPsB8/ijtDT+iZVge/iA0kjAgMBAAGjggHXMIIB0zA/BggrBgEFBQcBAQQzMDEwLwYIKwYBBQUHMAGGI2h0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtd3dkcjA0MB0GA1UdDgQWBBSRpJz8xHa3n6CK9E31jzZd7SsEhTAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFIgnFwmpthhgi+zruvZHWcVSVKO3MIIBHgYDVR0gBIIBFTCCAREwggENBgoqhkiG92NkBQYBMIH+MIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDYGCCsGAQUFBwIBFipodHRwOi8vd3d3LmFwcGxlLmNvbS9jZXJ0aWZpY2F0ZWF1dGhvcml0eS8wDgYDVR0PAQH/BAQDAgeAMBAGCiqGSIb3Y2QGCwEEAgUAMA0GCSqGSIb3DQEBBQUAA4IBAQANphvTLj3jWysHbkKWbNPojEMwgl/gXNGNvr0PvRr8JZLbjIXDgFnf4+LXLgUUrA3btrj+/DUufMutF2uOfx/kd7mxZ5W0E16mGYZ2+FogledjjA9z/Ojtxh+umfhlSFyg4Cg6wBA3LbmgBDkfc7nIBf3y3n8aKipuKwH8oCBc2et9J6Yz+PWY4L5E27FMZ/xuCk/J4gao0pfzp45rUaJahHVl0RYEYuPBX/UIqc9o2ZIAycGMs/iNAGS6WGDAfK+PdcppuVsq1h1obphC9UynNxmbzDscehlD86Ntv0hgBgw2kivs3hi1EdotI9CO/KBpnBcbnoB7OUdFMGEvxxOoMIIEIjCCAwqgAwIBAgIIAd68xDltoBAwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTEzMDIwNzIxNDg0N1oXDTIzMDIwNzIxNDg0N1owgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKOFSmy1aqyCQ5SOmM7uxfuH8mkbw0U3rOfGOAYXdkXqUHI7Y5/lAtFVZYcC1+xG7BSoU+L/DehBqhV8mvexj/avoVEkkVCBmsqtsqMu2WY2hSFT2Miuy/axiV4AOsAX2XBWfODoWVN2rtCbauZ81RZJ/GXNG8V25nNYB2NqSHgW44j9grFU57Jdhav06DwY3Sk9UacbVgnJ0zTlX5ElgMhrgWDcHld0WNUEi6Ky3klIXh6MSdxmilsKP8Z35wugJZS3dCkTm59c3hTO/AO0iMpuUhXf1qarunFjVg0uat80YpyejDi+l5wGphZxWy8P3laLxiX27Pmd3vG2P+kmWrAgMBAAGjgaYwgaMwHQYDVR0OBBYEFIgnFwmpthhgi+zruvZHWcVSVKO3MA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wLgYDVR0fBCcwJTAjoCGgH4YdaHR0cDovL2NybC5hcHBsZS5jb20vcm9vdC5jcmwwDgYDVR0PAQH/BAQDAgGGMBAGCiqGSIb3Y2QGAgEEAgUAMA0GCSqGSIb3DQEBBQUAA4IBAQBPz+9Zviz1smwvj+4ThzLoBTWobot9yWkMudkXvHcs1Gfi/ZptOllc34MBvbKuKmFysa/Nw0Uwj6ODDc4dR7Txk4qjdJukw5hyhzs+r0ULklS5MruQGFNrCk4QttkdUGwhgAqJTleMa1s8Pab93vcNIx0LSiaHP7qRkkykGRIZbVf1eliHe2iK5IaMSuviSRSqpd1VAKmuu0swruGgsbwpgOYJd+W+NKIByn/c4grmO7i77LpilfMFY0GCzQ87HUyVpNur+cmV6U/kTecmmYHpvPm0KdIBembhLoz2IYrF+Hjhga6/05Cdqa3zr/04GpZnMBxRpVzscYqCtGwPDBUfMIIEuzCCA6OgAwIBAgIBAjANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMDYwNDI1MjE0MDM2WhcNMzUwMjA5MjE0MDM2WjBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDkkakJH5HbHkdQ6wXtXnmELes2oldMVeyLGYne+Uts9QerIjAC6Bg++FAJ039BqJj50cpmnCRrEdCju+QbKsMflZ56DKRHi1vUFjczy8QPTc4UadHJGXL1XQ7Vf1+b8iUDulWPTV0N8WQ1IxVLFVkds5T39pyez1C6wVhQZ48ItCD3y6wsIG9wtj8BMIy3Q88PnT3zK0koGsj+zrW5DtleHNbLPbU6rfQPDgCSC7EhFi501TwN22IWq6NxkkdTVcGvL0Gz+PvjcM3mo0xFfh9Ma1CWQYnEdGILEINBhzOKgbEwWOxaBDKMaLOPHd5lc/9nXmW8Sdh2nzMUZaF3lMktAgMBAAGjggF6MIIBdjAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUK9BpR5R2Cf70a40uQKb3R01/CF4wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wggERBgNVHSAEggEIMIIBBDCCAQAGCSqGSIb3Y2QFATCB8jAqBggrBgEFBQcCARYeaHR0cHM6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvMIHDBggrBgEFBQcCAjCBthqBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMA0GCSqGSIb3DQEBBQUAA4IBAQBcNplMLXi37Yyb3PN3m/J20ncwT8EfhYOFG5k9RzfyqZtAjizUsZAS2L70c5vu0mQPy3lPNNiiPvl4/2vIB+x9OYOLUyDTOMSxv5pPCmv/K/xZpwUJfBdAVhEedNO3iyM7R6PVbyTi69G3cN8PReEnyvFteO3ntRcXqNx+IjXKJdXZD9Zr1KIkIxH3oayPc4FgxhtbCS+SsvhESPBgOJ4V9T0mZyCKM2r3DYLP3uujL/lTaltkwGMzd/c6ByxW69oPIQ7aunMZT7XZNn/Bh1XZp5m5MkL72NVxnn6hUrcbvZNCJBIqxw8dtk2cXmPIS4AXUKqK1drk/NAJBzewdXUhMYIByzCCAccCAQEwgaMwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkCCA7rV4fnngmNMAkGBSsOAwIaBQAwDQYJKoZIhvcNAQEBBQAEggEAOiGulrbxW9vsDCz0aXW9OnOptFCCk7S1rNe3PONUMBQAqM3cniQzM/ws8u3bI32Umls9VpAF5AGgSz1DwX5/9U88fcSTurWJePNVqweooqHm2/RVbU63lZI+Pb8sltnTEcSSPcYEDhZs+bBHLzYTsBEyPHSJhNyZSMicG10aEpKc5c8/mpxQnrgqF4QZtfg8u8gayICIX+CSVzW263I2y3DoA+/36gEfoAdMH44Sx9RlU8UqtDbC4MPkpGDL0Z+/AcLDeHP8F19HH0ceLrR1oQ+KIVLDLv5upnho8bm31hOOhh90ybepCEGJyHoHf9brRUkoW+/lR3m2GR1BjyK8+A==",
  "pending_renewal_info": [
    {
      "expiration_intent": "1",
      "auto_renew_product_id": "fitnessworkout.app.subscription.1weekb",
      "original_transaction_id": "700000537029265",
      "product_id": "fitnessworkout.app.subscription.1weekb",
      "auto_renew_status": "1"
    }
  ]
};

$done({body: JSON.stringify(obj)});
