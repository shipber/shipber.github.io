# Address

## Ship From List

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/ship-from</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   Yes    | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   Yes    | Api Key, please log in to the system and find it in My Profile |

### Example Curl
```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/ship-from' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|       Parameter        |   Type    | Required |
| :--------------------: | :-------: | :------: |
|          data          |  [array]  |    √     |
|          uuid          | [string]  |    √     |
|      postal_code       | [string]  |    √     |
|      country_code      |  [array]  |    √     |
| state_or_province_code | [string]  |    √     |
|     is_residential     | [boolean] |    √     |
|       addresses        | [string]  |    √     |
|          city          |  [array]  |    √     |
| address_classification |  [array]  |    √     |
|          name          | [string]  |    √     |
|         phone          | [string]  |    √     |
|       attention        | [boolean] |    √     |
|         email          | [string]  |    √     |


## Address Validation

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/address/validate</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   Yes    | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   Yes    | Api Key, please log in to the system and find it in My Profile |

### Body 

```json
{
    "addresses": ["5353 W Imperial Hwy Unit 900"],
    "city": "Los Angeles",
    "state_province_code": "CA",
    "postal_code": "90045",
    "country_code": "US",
    "is_residential": true
}
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|      Parameter      |   Type    | Required |
| :-----------------: | :-------: | :------: |
|      addresses      |  [array]  |    √     |
|        city         | [string]  |    √     |
| state_province_code | [string]  |    √     |
|     postal_code     | [string]  |    √     |
|    country_code     | [string]  |    √     |
|   is_residential    | [boolean] |    √     |




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

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|       Parameter        |   Type    | Required |
| :--------------------: | :-------: | :------: |
|          data          | [object]  |    √     |
|         status         | [string]  |    √     |
|    original_address    |     √     |          |
|      postal_code       | [string]  |    √     |
|      country_code      | [string]  |          |
| state_or_province_code | [string]  |    √     |
|     is_residential     | [boolean] |    √     |
|       addresses        |  [array]  |    √     |
|          city          | [string]  |    √     |
| address_classification | [string]  |    √     |
|     is_residential     | [string]  |    √     |
|    matched_address     | [object]  |    √     |
|      postal_code       | [string]  |    √     |
|      country_code      | [string]  |    √     |
| state_or_province_code | [string]  |    √     |
|     is_residential     | [boolean] |    √     |
|       addresses        |  [array]  |    √     |
|          city          | [string]  |    √     |
| address_classification | [string]  |    √     |
|         status         | [string]  |    √     |

