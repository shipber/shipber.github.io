# Address

## Ship From List

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/ship-from</td></tr></table>


<font size='5' color='rgb(51, 51, 51)'> Header </font><br>

<table>
    <tr bgcolor='#f5f5f5'>
        <th>Label	</th><th>Required	</th><th width='490px'>instruction	</th>
    </tr>
    <tr>
        <td><font>Api-Key	</font></td><td><font>Yes	</font></td><td>Api Key, please log in to the system and find it in My Profile	</td>
    </tr>
    <tr>
        <td><font>Api-Secret	</font></td><td><font>Yes	</font></td><td >Api Key, please log in to the system and find it in My Profile	</td>
    </tr>
</table>

<font size='5' color='rgb(51, 51, 51)'>Response </font><br>
```
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

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Address Validation

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/address/validate</td></tr></table>


<font size='5' color='rgb(51, 51, 51)'> Header </font><br>

<table>
    <tr bgcolor='#f5f5f5'>
        <th>Label	</th><th>Required	</th><th width='490px'>instruction	</th>
    </tr>
    <tr>
        <td><font>Api-Key	</font></td><td><font>Yes	</font></td><td>Api Key, please log in to the system and find it in My Profile	</td>
    </tr>
    <tr>
        <td><font>Api-Secret	</font></td><td><font>Yes	</font></td><td >Api Key, please log in to the system and find it in My Profile	</td>
    </tr>
</table>

<font size='5' color='rgb(51, 51, 51)'>Body </font><br>
```
{
    "addresses": ["5353 W Imperial Hwy Unit 900"],
    "city": "Los Angeles",
    "state_province_code": "CA",
    "postal_code": "90045",
    "country_code": "US",
    "is_residential": true
}
```

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>
```
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
