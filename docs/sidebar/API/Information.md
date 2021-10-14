# Personal information

## My Shipping Service

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>

### Header 

|   Label    | Required |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   ✓     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   ✓     | Api Secret, please log in to the system and find it in My Profile |



### Example Curl

```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/user/shipping-services' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Response parameters
```json
{
    "data": [{
        "carrier": "ups",
        "code": "ups_ground",
        "addresses": [{
            "nick_name": "Repository1",
            "city": "LOS ANGELES",
            "name": "Test Company",
            "addresses": ["5353 W IMPERIAL HWY STE 900"],
            "telephone": "0123456789",
            "postal_code": "90045-6275",
            "country_code": "US",
            "is_residential": false,
            "state_province_code": "CA"
        }],
        "name": "UPS® Ground"
    }]
}

```



## Profile

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user</td></tr></table>

### Header 

|   Label    | Required |                         instruction                          |
| :--------: | :------: | :----------------------------------------------------------: |
|  Api-Key   |   ✓     | Api Key, please log in to the system and find it in My Profile |
| Api-Secret |   ✓     | Api Secret, please log in to the system and find it in My Profile |


### Example Curl

```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/user' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Response parameters

```json
{
    "data": {
        "balance": "99999882.84",
        "email": "a1@4pl.com",
        "name": "Zack",
        "mobile": "0000000000",
        "company": "XXXXX",
        "address": "SZ"
    }
}
```
