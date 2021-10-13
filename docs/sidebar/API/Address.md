# Address

## Ship From List

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/ship-from</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   √     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   √     | Api Key, please log in to the system and find it in My Profile |

### Example Curl
```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/ship-from' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Response parameters

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

## Address Validation

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/address/validate</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   √     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   √     | Api Key, please log in to the system and find it in My Profile |


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|      Parameter      |   Type    | Required | Description                                                  | Example                          |
| :-----------------: | :-------: | :------: | ------------------------------------------------------------ | -------------------------------- |
|      addresses      |  [array]  |    √     |                                                              | ["5353 W Imperial Hwy Unit 900"] |
|        city         | [string]  |    √     |                                                              | Los Angeles                      |
| state_province_code | [string]  |    √     | State shortcode                                              | CA                               |
|     postal_code     | [string]  |    √     |                                                              | 90045                            |
|    country_code     | [string]  |    √     |                                                              | US                               |
|   is_residential    | [boolean] |    √     | If you send true,this address is residintial.If you send false,this address is commercial | true                             |






### Example Curl

```json
curl -X POST  \
  'https://api.sandbox.shipber.app/v1/open-api/address/validate' \
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

### Response parameters

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