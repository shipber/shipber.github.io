# Rate

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/rate</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   √     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   √     | Api Key, please log in to the system and find it in My Profile |


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

| Parameter                  |   Type    | Required | Description                                                  | Example                              |
| :------------------------- | :-------: | :------: | ------------------------------------------------------------ | ------------------------------------ |
| shipment                   | [object]  |    √     |                                                              |                                      |
| ﹂service_code             | [string]  |          | Filter out the required services                             | ups_ground                           |
| ﹂ship_from                | [object]  |          |                                                              |                                      |
| ﹂﹂uuid                   |  [array]  |    √     | Address unique id                                            | 7b572b8d-08a3-4cc7-a711-1aae28e9ffcf |
| ﹂﹂postal_code            | [string]  |    √     |                                                              | 90045-6275                           |
| ﹂﹂country_code           | [string]  |    √     |                                                              | US                                   |
| ﹂﹂state_or_province_code | [string]  |    √     | State shortcode                                              | CA                                   |
| ﹂﹂is_residential         | [boolean] |          | If you send true,this address is residintial.If you send false,this address is commercial | false                                |
| ﹂﹂addresses              |  [array]  |          |                                                              | ["5353 W IMPERIAL HWY STE 900"]      |
| ﹂﹂city                   | [string]  |    √     |                                                              | LOS ANGELES                          |
| ﹂﹂name                   | [string]  |          | Company name or sender name                                  | Test Company                         |
| ﹂﹂phone                  | [boolean] |          |                                                              | 0123456789                           |
| ﹂﹂attention              | [string]  |    √     | Sender's name or notes                                       | Tom                                  |
| ﹂ship_to                  | [object]  |    √     |                                                              |                                      |
| ﹂﹂addresses              |  [array]  |          |                                                              | ["200 Ymca Way #438"]                |
| ﹂﹂city                   | [string]  |    √     |                                                              | Penfield                             |
| ﹂﹂state_province_code    | [string]  |    √     | State shortcode                                              | NY                                   |
| ﹂﹂postal_code            | [string]  |    √     |                                                              | 14526                                |
| ﹂﹂country_code           | [string]  |    √     |                                                              | US                                   |
| ﹂﹂name                   | [string]  |          |                                                              | 123456                               |
| ﹂﹂phone                  | [string]  |          |                                                              | 1234567890                           |
| ﹂﹂is_residential         | [boolean] |          |                                                              | false                                |
| ﹂﹂attention              | [string]  |          | Recipient name or remarks                                    |                                      |
| ﹂packages                 |  [array]  |    √     |                                                              |                                      |
| ﹂﹂dimension              | [object]  |    √     |                                                              |                                      |
| ﹂﹂﹂width                | [number]  |    √     |                                                              | 10                                   |
| ﹂﹂﹂height               | [number]  |    √     |                                                              | 10                                   |
| ﹂﹂﹂length               | [number]  |    √     |                                                              | 10                                   |
| ﹂﹂﹂code                 | [string]  |    √     | Dimension unit                                               | IN                                   |
| ﹂﹂weight                 | [object]  |    √     |                                                              |                                      |
| ﹂﹂﹂code                 | [string]  |    √     | Weight unit                                                  | lb                                   |
| ﹂﹂﹂value                | [number]  |    √     | Weight                                                       | 20                                   |
| ﹂﹂insurance              | [object]  |          |                                                              |                                      |
| ﹂﹂﹂code                 | [string]  |          | Currency type                                                | USD                                  |
| ﹂﹂﹂value                | [number]  |          | Cost                                                         | 10                                   |
| ﹂﹂confirmation           | [string]  |    √     |                                                              | None                                 |
| ﹂﹂quantity               | [number]  |    √     |                                                              | 1                                    |
| ﹂package_type             | [object]  |    √     |                                                              |                                      |
| ﹂﹂type                   | [string]  |    √     |                                                              | common                               |
| ﹂﹂name                   | [string]  |    √     |                                                              | Package                              |
| ﹂pickup_date              | [string]  |    √     |                                                              | 20210416                             |

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


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|       Parameter       |   Type   | Required |
| :-------------------: | :------: | :------: |
|         data          | [object] |    √     |
|         rates         | [array]  |    √     |
|        charge         | [object] |    √     |
|         code          | [string] |    √     |
|         value         | [number] |    √     |
|  estimate_ship_time   | [object] |    √     |
|  delivery_time_to_tz  | [string] |    √     |
| delivery_time_from_tz | [string] |    √     |
|         days          | [number] |          |
|        carrier        | [string] |    √     |
|     service_code      | [string] |    √     |
|     service_name      | [string] |    √     |
|    carrier_service    | [string] |    √     |
|     account_alias     | [string] |    √     |
|        rate_id        | [string] |    √     |

:::
::::
