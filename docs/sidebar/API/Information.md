# Personal information

## My Shipping Service

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>

### Header 

Label	|Required|instruction
:--:|:--:|:--:
Api-Key	|Yes	|Api Key, please log in to the system and find it in My Profile
Api-Secret	|Yes	|Api Key, please log in to the system and find it in My Profile



### Example Curl

```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/user/shipping-services' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

Parameter|Type|Required
:--:|:--:|:--:
data|[array]|√
carrier|[string]|√
code|[string]|√
addresses|[array]|√
nick_name|[string]|√
city|[string]|√
name|[string]|√
addresses|[array]|√
telephone|[string]|√
postal_code|[string]|√
country_code|[string]|√
is_residential|[boolean]|√
state_province_code|[string]|√
name|[string]|√


## Profile

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user</td></tr></table>

### Header 

Label	|Required|instruction
:--:|:--:|:--:
Api-Key	|Yes	|Api Key, please log in to the system and find it in My Profile
Api-Secret	|Yes	|Api Key, please log in to the system and find it in My Profile


### Example Curl

```json
curl -X GET  \
  'https://api.sandbox.shipber.app/v1/open-api/user' \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Api-Key:2cn1wgmfidytin3jef3b' \
  -H 'Api-Secret:qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C'
```

### Entity Types

**The address recognition API is currently designed to recognize the following types of entities:**

Parameter|Type|Required
:--:|:--:|:--:
data|[object]|   |√
balance|[string]|√
email|[string]|√
name|[[string]|√
mobile|[string]|√
company|[string]|√
address|[string]|√
