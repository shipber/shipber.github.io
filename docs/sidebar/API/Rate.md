# Rate

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/rate</td></tr></table>


### Header 

Label	|Required|instruction
:--:|:--:|:--:
Api-Key	|Yes	|Api Key, please log in to the system and find it in My Profile
Api-Secret	|Yes	|Api Key, please log in to the system and find it in My Profile


:::: tabs 
::: tab Request

```json
{
    "shipment": {
        "service_code": "ups_ground",
        "ship_from": {
            "uuid": "7b572b8d-08a3-4cc7-a711-1aae28e9ffcf",
            "postal_code": "90045-6275",
            "country_code": "US",
            "state_or_province_code": "CA",
            "is_residential": false,
            "addresses": ["5353 W IMPERIAL HWY STE 900"],
            "city": "LOS ANGELES",
            "name": "Test Company",
            "phone": "0123456789",
            "attention": "Tom"
        },
        "ship_to": {
            "addresses": ["200 Ymca Way #438"],
            "city": "Penfield",
            "state_province_code": "NY",
            "postal_code": "14526",
            "country_code": "US",
            "name": "123456",
            "phone": "12345678900",
            "is_residential": false,
            "attention": ""
        },
        "packages": [{
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
            "insurance": {
                "code": "USD",
                "value": 10
            },
            "confirmation": "None",
            "quantity": 1
        }],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20210416"
    }
}
```


### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

Parameter|Type|Required
:--:|:--:|:--:
shipment|[object]|√
service_code|[string]|
ship_from|[object]|
uuid|[array]|√
postal_code|[string]|√
country_code|[string]|√
state_or_province_code|[string]|√
is_residential|[boolean]|
addresses|[array]|
city|[string]|√
name|[string]|
phone|[boolean]|
attention|[string]|√
ship_to|[object]|√
addresses|[array]|
city|[string]|√
state_province_code|[string]|√
postal_code|[string]|√
country_code|[string]|√
name|[string]|
phone|[string]|
is_residential|[boolean]|
attention|[string]|
packages|[array]|√
dimension|[object]|√
width|[number]|√
height|[number]|√
length|[number]|√
code|[string]|√
weight|[object]|√
code|[string]|√
value|[number]|√
insurance|[object]|
code|[string]|
value|[number]|
confirmation|[string]|√
quantity|[number]|√
package_type|[object]|√
type|[string]|√
name|[string]|√
pickup_date|[string]|√


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

Parameter|Type|Required
:--:|:--:|:--:
data|[object]|√
rates|[array]|√
charge|[object]|√
code|[string]|√
value|[number]|√
estimate_ship_time|[object]|√
delivery_time_to_tz|[string]|√
delivery_time_from_tz|[string]|√
days|[number]|
carrier|[string]|√
service_code|[string]|√
service_name|[string]|√
carrier_service|[string]|√
account_alias|[string]|√
rate_id|[string]|√


:::
::::
