# Rate

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/rate</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   ✓     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   ✓     | Api Secret, please log in to the system and find it in My Profile |


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

| Parameter                  |   Type    | Required | Description                                                  |
| :------------------------- | :-------: | :------: | ------------------------------------------------------------ |
| shipment                   | [object]  |    √     | -                                                            |
| ﹂service_code             | [string]  |          | Filter out the required services.such as: ups_ground. If you want to screen another services.[Click here](./Service_Code.md) and send the service_code what you want to choice |
| ﹂ship_from                | [object]  |          | -                                                            |
| ﹂﹂uuid                   |  [array]  |          | Address unique id.If you want to improve the accuracy of the ship from address, you can choose to send only uuid.<br>such as:7b572b8d-08a3-4cc7-a711-1aae28e9ffcf |
| ﹂﹂postal_code            | [string]  |    √     | Length:5-9                                                   |
| ﹂﹂country_code           | [string]  |    √     | Length:2                                                     |
| ﹂﹂state_or_province_code | [string]  |    √     | State shortcode.<br>Such as: CA<br/>Length:2                 |
| ﹂﹂is_residential         | [boolean] |          | If you send true,this address is residintial.If you send false,this address is commercial |
| ﹂﹂addresses              |  [array]  |          | Length:1-35                                                  |
| ﹂﹂city                   | [string]  |    √     | -                                                            |
| ﹂﹂name                   | [string]  |          | Company name or sender name.<br>Length:1-35                  |
| ﹂﹂phone                  | [boolean] |          | Length:10-15                                                 |
| ﹂﹂attention              | [string]  |    √     | Sender's name or notes<br>Length:0-35                        |
| ﹂ship_to                  | [object]  |    √     | -                                                            |
| ﹂﹂addresses              |  [array]  |          | Length:1-35                                                  |
| ﹂﹂city                   | [string]  |    √     | -                                                            |
| ﹂﹂state_province_code    | [string]  |    √     | State shortcode.<br>Such as: CA<br/>Length:2                 |
| ﹂﹂postal_code            | [string]  |    √     | Length:5-9                                                   |
| ﹂﹂country_code           | [string]  |    √     | Length:2                                                     |
| ﹂﹂name                   | [string]  |          | Company name or sender name.<br/>Length:1-35                 |
| ﹂﹂phone                  | [string]  |          | Company name or sender name.<br/>Length:1-35                 |
| ﹂﹂is_residential         | [boolean] |          | If you send true,this address is residintial.If you send false,this address is commercial |
| ﹂﹂attention              | [string]  |          | Sender's name or notes<br/>Length:0-35                       |
| ﹂packages                 |  [array]  |    √     | -                                                            |
| ﹂﹂dimension              | [object]  |    √     | -                                                            |
| ﹂﹂﹂width                | [number]  |    √     | -                                                            |
| ﹂﹂﹂height               | [number]  |    √     | -                                                            |
| ﹂﹂﹂length               | [number]  |    √     | -                                                            |
| ﹂﹂﹂code                 | [string]  |    √     | Dimension unit such as:IN,CM                                 |
| ﹂﹂weight                 | [object]  |    √     |                                                              |
| ﹂﹂﹂code                 | [string]  |    √     | Weight unit such as:LB,OZ,KG,G                               |
| ﹂﹂﹂value                | [number]  |    √     | Weight<br>Min:0.1oz<br>Max:150lb                             |
| ﹂﹂insurance              | [object]  |          | -                                                            |
| ﹂﹂﹂code                 | [string]  |          | Currency type                                                |
| ﹂﹂﹂value                | [number]  |          | Cost                                                         |
| ﹂﹂confirmation           | [string]  |    √     | -                                                            |
| ﹂﹂quantity               | [number]  |    √     | Min:1<br>Max:200                                             |
| ﹂package_type             | [object]  |    √     | -                                                            |
| ﹂﹂type                   | [string]  |    √     | Such as:common                                               |
| ﹂﹂name                   | [string]  |    √     | Such as:Package                                              |
| ﹂pickup_date              | [string]  |    √     | -                                                            |

:::: tabs 
::: tab Curl

```json
curl -X POST  \
  'https://api.sandbox.shipber.com/v1/open-api/rate' \
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
