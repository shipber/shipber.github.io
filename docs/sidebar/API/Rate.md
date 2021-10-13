# Rate

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/rate</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   √     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   √     | Api Secret, please log in to the system and find it in My Profile |


:::: tabs 
::: tab Curl

```json
curl -X POST  \
  'https://api.sandbox.shipber.app/v1/open-api/rate' \
  -H 'Content-Type:application/json' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \
  -d '{
    "shipment": {
        "ship_from": {
            "postal_code": "90045-6275",
            "country_code": "US",
            "state_or_province_code": "CA",
            "city": "LOS ANGELES"
        },
        "ship_to": {
            "city": "Penfield",
            "state_province_code": "NY",
            "postal_code": "14526",
            "country_code": "US"
        },
        "packages": [
            {
                "dimension": {
                    "width": 10,
                    "height": 10,
                    "length": 10,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 20
                },
                "confirmation": "None",
                "quantity": 1
            }
        ],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20211010"
    }
}'
```


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

| Parameter                  |   Type    | Required | Description                                                  |
| :------------------------- | :-------: | :------: | ------------------------------------------------------------ |
| shipment                   | [object]  |    √     | -                                                            |
| ﹂service_code             | [string]  |          | Filter out the required services                             |
| ﹂ship_from                | [object]  |          | -                                                            |
| ﹂﹂uuid                   |  [array]  |    √     | Address unique id                                            |
| ﹂﹂postal_code            | [string]  |    √     | -                                                            |
| ﹂﹂country_code           | [string]  |    √     | -                                                            |
| ﹂﹂state_or_province_code | [string]  |    √     | State shortcode                                              |
| ﹂﹂is_residential         | [boolean] |          | If you send true,this address is residintial.If you send false,this address is commercial |
| ﹂﹂addresses              |  [array]  |          | -                                                            |
| ﹂﹂city                   | [string]  |    √     | -                                                            |
| ﹂﹂name                   | [string]  |          | Company name or sender name                                  |
| ﹂﹂phone                  | [boolean] |          | -                                                            |
| ﹂﹂attention              | [string]  |    √     | Sender's name or notes                                       |
| ﹂ship_to                  | [object]  |    √     | -                                                            |
| ﹂﹂addresses              |  [array]  |          | -                                                            |
| ﹂﹂city                   | [string]  |    √     | -                                                            |
| ﹂﹂state_province_code    | [string]  |    √     | State shortcode                                              |
| ﹂﹂postal_code            | [string]  |    √     | -                                                            |
| ﹂﹂country_code           | [string]  |    √     | -                                                            |
| ﹂﹂name                   | [string]  |          | -                                                            |
| ﹂﹂phone                  | [string]  |          | -                                                            |
| ﹂﹂is_residential         | [boolean] |          | -                                                            |
| ﹂﹂attention              | [string]  |          | Recipient name or remarks                                    |
| ﹂packages                 |  [array]  |    √     | -                                                            |
| ﹂﹂dimension              | [object]  |    √     | -                                                            |
| ﹂﹂﹂width                | [number]  |    √     | -                                                            |
| ﹂﹂﹂height               | [number]  |    √     | -                                                            |
| ﹂﹂﹂length               | [number]  |    √     | -                                                            |
| ﹂﹂﹂code                 | [string]  |    √     | Dimension unit                                               |
| ﹂﹂weight                 | [object]  |    √     | -                                                            |
| ﹂﹂﹂code                 | [string]  |    √     | Weight unit                                                  |
| ﹂﹂﹂value                | [number]  |    √     | Weight                                                       |
| ﹂﹂insurance              | [object]  |          | -                                                            |
| ﹂﹂﹂code                 | [string]  |          | Currency type                                                |
| ﹂﹂﹂value                | [number]  |          | Cost                                                         |
| ﹂﹂confirmation           | [string]  |    √     | -                                                            |
| ﹂﹂quantity               | [number]  |    √     | -                                                            |
| ﹂package_type             | [object]  |    √     | -                                                            |
| ﹂﹂type                   | [string]  |    √     | -                                                            |
| ﹂﹂name                   | [string]  |    √     | -                                                            |
| ﹂pickup_date              | [string]  |    √     | -                                                            |
:::

::: tab Response

```json
{
    "data": {
        "rates": [{
            "charge": {
                "code": "USD",
                "value": 10.03
            },
            "estimate_ship_time": {
                "delivery_time_to_tz": "2021-04-15T23:00:00-07:00",
                "delivery_time_from_tz": "2021-04-15T23:00:00-07:00",
                "days": 1
            },
            "carrier": "ups",
            "service_code": "ups_ground",
            "service_name": "UPS® Ground",
            "carrier_service": "UPS® Ground",
            "account_alias": "CO:Xu3GDZ5iu_",
            "rate_id": "eyJjaGFpbklkIjo0MzMsInNlcnZpY2VDb2RlIjoidXBzX2dyb3VuZCJ9"
        }]
    }
}
```



:::
::::
