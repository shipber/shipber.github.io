# Label 

## Create Label

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/label</td></tr></table>

### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   Yes    | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   Yes    | Api Key, please log in to the system and find it in My Profile |




### Example Curl

```json
curl -X POST  \
  'https://api.sandbox.shipber.app/v1/open-api/label' \
  -H 'Content-Type:application/json' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \
  -d '{
    "rate_id": "eyJjaGFpbklkIjo0MTksInNlcnZpY2VDb2RlIjoiZmVkZXhfZ3JvdW5kIiwicGFja2FnZVR5cGUiOiJQYWNrYWdlIn0",
    "custom_order_num": "cimy-977885",
    "shipment": {
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"
        },
        "ship_to": {
            "city": "Los Angeles",
            "name": "Test Company",
            "addresses": [
                "5353 W Imperial Hwy Unit 900"
            ],
            "postal_code": "90045",
            "country_code": "US",
            "state_province_code": "CA",
            "phone": "0123456789"
        },
        "packages": [
            {
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "lb",
                    "value": 6
                },
                "confirmation": "None",
                "quantity": 1,
                "reference_numbers": [
                    {
                        "code": "reference #1",
                        "value": "1"
                    }
                ]
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

|      Parameter      |   Type    | Required |
| :-----------------: | :-------: | :------: |
|       rate_id       | [string]  |    √     |
|  custom_order_num   | [string]  |    √     |
|      shipment       | [object]  |    √     |
|    service_code     | [string]  |          |
|      ship_from      | [object]  |    √     |
|        uuid         | [string]  |    √     |
|        city         | [string]  |    √     |
|        name         | [object]  |    √     |
|        email        | [string]  |          |
|      addresses      |  [array]  |    √     |
|     postal_code     | [string]  |    √     |
|    country_code     | [string]  |    √     |
|   is_residential    | [boolean] |          |
| state_province_code | [string]  |    √     |
|        phone        | [string]  |    √     |
|      attention      | [string]  |          |
|       ship_to       | [object]  |    √     |
|        city         | [string]  |    √     |
|        name         | [string]  |    √     |
|        email        | [string]  |          |
|      addresses      |  [array]  |    √     |
|     postal_code     | [string]  |    √     |
|    country_code     | [string]  |    √     |
|   is_residential    | [boolean] |          |
| state_province_code | [string]  |    √     |
|        phone        | [string]  |    √     |
|      attention      | [string]  |          |
|      packages       |  [array]  |    √     |
|      dimension      | [object]  |    √     |
|        width        | [number]  |    √     |
|       height        | [number]  |    √     |
|       length        | [number]  |    √     |
|        code         | [string]  |    √     |
|       weight        | [object]  |    √     |
|        code         | [string]  |    √     |
|        value        | [number]  |    √     |
|    confirmation     | [string]  |    √     |
|      insurance      | [object]  |          |
|        code         | [string]  |          |
|        value        | [number]  |          |
|      quantity       | [number]  |    √     |
|  reference_numbers  |  [array]  |    √     |
|        code         | [string]  |    √     |
|        value        | [object]  |    √     |
|    package_type     | [object]  |    √     |
|        type         | [string]  |    √     |
|        name         | [string]  |    √     |
|     pickup_date     | [string]  |    √     |

## Download Label

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/label?custom_order_num=</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   Yes    | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   Yes    | Api Key, please log in to the system and find it in My Profile |



 ### Query 

Parameter Name	|Type|Required
:--:|:--:|:--:
custom_order_num	|[string]	|Yes

### Example Curl
```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/label?custom_order_num=cimy-977885' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|        Parameter        |   Type   | Required |
| :---------------------: | :------: | :------: |
|          data           | [object] |    √     |
|        order_num        | [string] |    √     |
|        create_at        | [string] |    √     |
|    custom_order_num     | [string] |    √     |
|         status          | [string] |    √     |
|        shipment         | [object] |    √     |
|        packages         | [array]  |    √     |
|       identifier        | [object] |    √     |
|    tracking_id_type     | [string] |    √     |
|  identification_number  | [string] |    √     |
|     tracking_number     | [string] |    √     |
| master_tracking_id_type | [string] |    √     |
| master_tracking_number  | [string] |    √     |
|       label_data        | [string] |    √     |
|          uuid           | [string] |    √     |
|         charge          | [number] |    √     |
|        create_at        | [string] |    √     |
|     label_download      | [object] |    √     |
|           pdf           | [string] |    √     |




## Cancel Label

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/label/cancel</td></tr></table>


### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   Yes    | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   Yes    | Api Key, please log in to the system and find it in My Profile |


### Body 
```json
{
    "order_num": "string"
}
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

| Parameter |   Type   | Required |
| :-------: | :------: | :------: |
| order_num | [string] |    √     |



### Example Curl
```json
curl -X POST  \
  'https://api.sandbox.shipber.app/v1/open-api/label/cancel' \
  -H 'Content-Type:application/json' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \
  -d '{"order_num":"cimy-977885"}'
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

|       Parameter        |   Type    | Required |
| :--------------------: | :-------: | :------: |
|          data          | [object]  |    √     |
|         status         | [string]  |    √     |
|       order_num        | [string]  |    √     |
|    custom_order_num    | [string]  |    √     |
|        shipment        | [object]  |    √     |
|    carrier_service     | [string]  |    √     |
|       ship_from        | [object]  |    √     |
|          uuid          | [string]  |    √     |
|      postal_code       | [string]  |    √     |
|      country_code      | [string]  |    √     |
| state_or_province_code | [string]  |    √     |
|     is_residential     | [boolean] |    √     |
|       addresses        |  [array]  |    √     |
|          city          | [string]  |    √     |
| address_classification | [string]  |    √     |
|          name          | [string]  |    √     |
|         phone          | [string]  |    √     |
|       attention        | [string]  |    √     |
|        ship_to         | [object]  |    √     |
|      postal_code       | [string]  |    √     |
|      country_code      | [string]  |    √     |
| state_or_province_code | [string]  |    √     |
|     is_residential     | [boolean] |    √     |
|       addresses        |  [array]  |    √     |
|          city          | [string]  |    √     |
| address_classification | [string]  |    √     |
|          name          | [string]  |    √     |
|         phone          | [string]  |    √     |
|       attention        | [string]  |    √     |
|        packages        |  [array]  |    √     |
|       dimension        | [object]  |    √     |
|         width          | [number]  |    √     |
|         height         | [number]  |    √     |
|         length         | [number]  |    √     |
|          code          | [string]  |    √     |
|         weight         | [object]  |    √     |
|          code          | [string]  |    √     |
|         value          | [number]  |    √     |
|      confirmation      | [string]  |    √     |
|       insurance        | [object]  |          |
|          code          | [string]  |    √     |
|         value          | [number]  |    √     |
|        quantity        | [number]  |    √     |
|   reference_numbers    |  [array]  |    √     |
|          code          | [string]  |    √     |
|         value          | [string]  |    √     |
|      package_type      | [object]  |    √     |
|          type          | [string]  |    √     |
|          name          | [string]  |    √     |
|      pickup_date       | [string]  |    √     |
|      service_code      | [string]  |    √     |
|       created_at       | [string]  |    √     |