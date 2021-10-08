# Personal information

## My Shipping Service

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>

### Header 

Label	|Required|instruction
:--:|:--:|:--:
Api-Key	|Yes	|Api Key, please log in to the system and find it in My Profile
Api-Secret	|Yes	|Api Key, please log in to the system and find it in My Profile



### Example Response

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


### Example Response

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
