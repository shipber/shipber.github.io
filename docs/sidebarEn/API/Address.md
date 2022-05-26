# Address

## Ship From List

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/ship-from</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   ✓     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   ✓     | Api Secret, please log in to the system and find it in My Profile |


:::: tabs 
::: tab Curl


```json
curl -X GET  \
  'https://api.sandbox.shipber.com/v1/open-api/ship-from' \
  -H 'Content-Type:application/json' \ 
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```



:::

::: tab Response

```json
{
    "data": [{
        "uuid": "22d953b7-24c4-4ae9-afb4-111cc227b01e",
        "postal_code": "90045",
        "country_code": "US",
        "state_or_province_code": "CA",
        "is_residential": false,
        "addresses": ["5353 W Imperial Hwy Unit 900"],
        "city": "Los Angeles",
        "address_classification": "Commercial",
        "name": "Amazon",
        "phone": "0000000000",
        "attention": "Tom",
        "email": ""
    }]
}
```

:::
::::


## Address Validation

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/address/validate</td></tr></table>


### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   ✓     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   ✓     | Api Secret, please log in to the system and find it in My Profile |


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|      Parameter      |   Type    | Required | Description                                                  |
| :-----------------: | :-------: | :------: | ------------------------------------------------------------ |
|      addresses      |  [array]  |    ✓     | -                                                            |
|        city         | [string]  |    ✓     | -                                                            |
| state_province_code | [string]  |    ✓     | State shortcode                                              |
|     postal_code     | [string]  |    ✓     | -                                                            |
|    country_code     | [string]  |    ✓     | -                                                            |
|   is_residential    | [boolean] |    ✓     | If you send true,this address is residintial.If you send false,this address is commercial |








:::: tabs 
::: tab Curl

```json
curl -X POST  \
  'https://api.sandbox.shipber.com/v1/open-api/address/validate' \
  -H 'Content-Type:application/json' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \
  -d '{
    "addresses": [
        "5353 W Imperial Hwy Unit 900"
    ],
    "city": "Los Angeles",
    "state_province_code": "CA",
    "postal_code": "90045",
    "country_code": "US"
}'
```

:::

::: tab Response

```json
{
    "data": {
        "status": "Commercial",
        "original_address": {
            "postal_code": "90045",
            "country_code": "US",
            "state_or_province_code": "CA",
            "is_residential": "",
            "addresses": ["5353 W Imperial Hwy Unit 900"],
            "city": "Los Angeles",
            "address_classification": "Commercial"
        },
        "matched_address": {
            "postal_code": "90045",
            "country_code": "US",
            "state_or_province_code": "CA",
            "is_residential": false,
            "addresses": ["5353 W Imperial Hwy Unit 900"],
            "city": "Los Angeles",
            "address_classification": "Commercial"
        }
    },
    "status": ""
}
```

:::
::::
