# Myselef

## My Service

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user/shipping-services</td></tr></table>

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

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>

```
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

## Profile

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/user</td></tr></table>

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

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>

```
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