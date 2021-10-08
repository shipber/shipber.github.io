# Label 

## Get Rate

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/rate</td></tr></table>


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

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>
```
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
## Create Label

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/label?custom_order_num=</td></tr></table>


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
    "rate_id": "eyJjaGFpbklkIjo0NDUsInNlcnZpY2VDb2RlIjoidXBzX2dyb3VuZCJ9",
    "custom_order_num": "cimy-123456789123456789",
    "shipment": {
        "service_code": "ups_ground",
        "ship_from": {
            "uuid": "",
            "city": "LOS ANGELES",
            "name": "Test Company",
            "email": "123456@gmail.com",
            "addresses": ["5353 W IMPERIAL HWY STE 900"],
            "postal_code": "90045-6275",
            "country_code": "US",
            "is_residential": false,
            "state_province_code": "CA",
            "phone": "0123456789",
            "attention": ""
        },
        "ship_to": {
            "city": "Los Angeles",
            "name": "Test Company",
            "email": "123456@gmail.com",
            "addresses": ["5353 W Imperial Hwy Unit 900"],
            "postal_code": "90045",
            "country_code": "US",
            "is_residential": true,
            "state_province_code": "CA",
            "phone": "0123456789",
            "attention": "abc"
        },
        "packages": [{
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
            "insurance": {
                "code": "USD",
                "value": 20
            },
            "quantity": 1,
            "reference_numbers": [{
                "code": "",
                "value": "1"
            }]
        }],
        "package_type": {
            "type": "common",
            "name": "Package"
        },
        "pickup_date": "20210416"
    }
}
```

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>
```
{
    "data": {
        "status": "Printing",
        "order_num": "ST161853120081597000",
        "shipment": {
            "ship_from": {
                "city": "Los Angeles",
                "name": "Test Company",
                "email": "123456@gmail.com",
                "addresses": ["5353 W Imperial Hwy Unit 900"],
                "postal_code": "90045",
                "country_code": "US",
                "is_residential": true,
                "state_province_code": "CA",
                "attention": "",
                "phone": "0123456789"
            },
            "ship_to": {
                "country_code": "US",
                "phone": "8888888888",
                "name": "Test Company",
                "addresses": ["3326 HEMLOCK WAY"],
                "city": "WINNABOW ",
                "state_province_code": "NC",
                "postal_code": "28479",
                "attention": ""
            },
            "packages": [{
                "dimension": {
                    "width": 7,
                    "height": 13,
                    "length": 4,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 6
                },
                "confirmation": "Delivery",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "pickup_date": "20210416",
            "service_code": "fedex_ground"
        },
        "created_at": "2021-04-16T04:30:28.632Z",
        "custom_order_num": "cimy-15913"
    }
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

## Download Label

<table><tr><td bgcolor=#bdbdbd>GET</td><td>/v1/open-api/label</td></tr></table>


<<font size='5' color='rgb(51, 51, 51)'> Header </font><br>

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

<font size='5' color='rgb(51, 51, 51)'>Parameter
 </font><br>

<table>
    <tr bgcolor='#f5f5f5'>
        <th>Parameter	</th><th>Required	</th>
    </tr>
    <tr>
        <td><font>custom_order_num</font></td><td><font>Yes	</font></td>
    </tr>
</table>

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>
```
{
	"data": {
		"order_num": "ST1618444800208768",
		"create_at": "2021-04-15T08:47:08.045Z",
		"custom_order_num": "FBAguang-April12992",
		"status": "Printed",
		"shipment": {
			"packages": [
				{
					"identifier": {
						"tracking_id_type": "FEDEX",
						"identification_number": "",
						"tracking_number": "786002536837",
						"master_tracking_id_type": "FEDEX",
						"master_tracking_number": "786002536837"
					},
					"label_data": "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fwtLRERE5JB8vppbKyIiIvLJeL4SERER2YvnKxEREZG9eL4SERER2YvnKxEREZG9eL4SERER2cv0+cp/n0FERETkEP99UREREZG9nJ6v5v71UREREZGPZeIfafdwJSIiIhLgP2f1wm0KRURERH4X/O8JergSEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZG3UP2XCu/8b+t08/vf/REREZEn8/bzVSv/u06AIiIiIpz3nq9a+d94CBQRERGZ5uazCi9XnaM8X4mIiMjDef75Kkx5xBIREZEHAg8q8A/mQlj3D/hyDJeRM5+qzapOvZxahglhlcNZERERuZnWUYecE6pIkqSlikutziqHYdNrR7UtMbk0rNJtl4iIiFzB6dZMjhPk1HF60mip6krlahfXbhdz2pNqXERERN7F6e5MNvrDJK1DQldVXvV1dKiDwras5fZX1q70SkRERK4j785wT89hvFw37HBJVTGrhYO8yjezDztMSpetERERkXvJuzPc/b8G5sp1w+CSSu3pcn4cIpoP+wM7PKFHRERE3kXeoMeD0wunYa1y3TC4pFJ7urx1nskZqra0GtXSIyIiIu8ib9DV8SBs9CHmtFw3DC55meLCWueZuZ5UCdf1iIiIyLvIG3Q4IeRTQfc40VL1LwAueZmCR5fDwYkqufRpJ8P4YYdFRETk7eQNenr7PjxdtBJ2hU2cfE7L3VClSkjGp++OiIiIXEr3GPNzHIbB8wkX9vWDPHg4Dk8+Wf+uKrx14zhvpoiIiNzJ6R5Nzhinpw5eLlTJ41wYlHrqPeckfQsNCY36GhhjRERE5I2c7tHjbp6PIq0wqI1kPo3PluEgl7QiJox3eygiIiL3Q7bp00NCiMlhXF5OOyd1YvDnyKkkIv507anHqnUiIiLyLuA2Dfd0EjZxNuieKHLw4RQcfBmZMJt/mfVAgyIiIn8bt78/xkNONQ+RISIiciduf3+VJ9xZf/NKREQ+Cne9P88TbrHnKxER+QR+bnZueX+bNx5svgbu1yAiInI1h9ucu97fxvOViIjIdVS7m7ve3+Yh56v7q4uIiNyDv38lIiIichH+/JWIiIjIRfjHNyIiIiIX4UFLRERE5CI8YomIiIis45lKREREZC+er0RERES6jP/SY+DdYkVERER+DdXxyTOViIiIyAr+E6MiIiIiV/DzTOX5SkRERGQL/hPuIiIiIlfgz7SLiIiIzDEeovxZdxEREZEVPF+JiIiI7MXzlYiIiMhe/sb5Cv5TqHvDXiJbOvns+T/8+r9/5TNICrMtF0HbxKrTsNMkreWwRVer6rZaRER+F4dbDAl7DuMuX1m4Ouy0S3DzJYUOi2YxYRbqh6omVsFucMETTeBFp4V1+ywiIr+Uwy2GhD0EuGXvDQuRUC2fDZLG+LmpU2HQe+5DdwlJRURmGa3Mpx5fYviUiIj8MQ53ARL2EMYN63AXI2F5YTcbVHs629qRvwbI1EoVMr64BKYKOqvl3SaEtS3lWbaIiPwBvjDvVnoA3Mj2hlWRpFE5ZjrtGBw0L1bJj8RE/taSXL3KXGVoNWFsIImcUy4iIvJGqg3rZfyesBXBYbZVLhwA8tmAVzmNnMhP2v7dP6KEDKezOdtEE1rKRUTkt/MnP/hwL5sLW9ko+Q7eFTkGH+7vi1Xu7Nj6ESVn6ObPa6vgl/huE0RE5JcyfvB/+xYA9zK+5YXTQnff5Ds4XBIyHB4eFqusd4yznmRccnjvQvw4xfXkWiIi8rcZv/m/dBf4GlgJO4yvMvDdM6yt8swFw+vDhUR/K4z359TLXJKcs5IdHBFT453qihcRkd/L+M3/pbsA3Mha+91h5OG+OZEQJpkLhteHC4n+VhhcVSXJlieUvMwSkeMsETMtW0REfjvjZ/+XbgRwF+abdRXGB0n1Q1pLDoPh9eFCor8VBldVSbJlrmRcftqWrP9Uz7RsERH57RzuGm9Rsgu4o52GVQHTu+1pTKvcaQZy3a0yFzZ3wPj6X+ZSZeOnbclFiZg57yIi8ts53DXeomQj66eFcWc/XbW+2x7Otjbo6sBwepBY71gImztjHN6Cbqps/LQto5JDoAAREfkcTveO37hBQM1VWHZ9umpa2OFsq/8vwf+ux8G5Ki2PueK4BNaabsi4MM+OdgJEgIiIfA5kj3gscAtu7dSn+2YrWysm6wlpq+B/16fd4FVOIyfyt5a0GvJ9dkPz7BhQcVodqhURkb8H2S8eBdyC+U7d2jShGB5zONu6I5Xx027wKrk/1exFS07Vfu87X+Xkp9WJVBER+fOc7jsPYVR4KLsbli2T/HDh6WzrFrwEH97EjVWqJGOelSVcwKnaLKylAca0GisiIp/GYzeIr5q9YV/FMSxv0JVaPpslVcIO126vQoL5qvVe5chcZULDXp0iIvLHyNviv5g7JbVY2d9PA1rBXCqfPVX1dfv56jT+1D5ZkrORcqEJ3VmSf2JWRET+Kof75mnY05jb3/Ns6wwA+zOxF5+q+qrPV3CkWyWsajUhL1kPGMu1Argp0qLTJCIi8mcIOwKJFBEREZEX8m8OwEgRERER+Uc+NX397x8qXS9HRERE5NdDfnYFRoqIiIjIf8AjlucrEREREc7p32/yL0CJiIiIcDw4iYiIiOzFf4pBREREZC+er0RERET24vlKREREZC+er0RERET24vlKREREZC+er0RERET28oV5t1IREREREREREflE4J8P+vtXIiIiIhDPVyIiIiJ78XwlIiIishfPVyIiIiJ78XwlIiIishfPVyIiIiJ78XwlIiIishf/fVEREREREREREXks1R8F+ttWIiIiInMc/vDVy6CnLBEREREOPEp5xBIRERGBjOcrGCkiIiIih3i+EhEREdmL5ysRERGRvbz8PcHw81e3SxMRERH5reR/StSfbBcRERFZwX/2SkREROQ6/FdGRURERC7FI5aIiIgIh/w+lecrEREREQj/J9zvUiQiIiLyi+H/NRzPVyIiIiIE/geCnq9ERERECPnU9PIPYV0vR0REROTXc3pq+hfg+UpEREQEAo9Ynq9EREREOKf/gqj/xKiIiIgI5/C/Pxj+i4QiIiIisgWPWCIiIiJ78XwlIiIishfPVyIiIiJ78XwlIiIisgV/vl1ERERERERERB6C/zKDiIiIyC7COcojloiIiMgE/L9CKCIiIiKnwLOTRywRERERiOcrERERkb14vhIRERHZi+crERERkb14vhIRERHZS/XPXvkPYYmIiIiIiIiIyEMYf2/K37kSERERmebwcHU6IiIiIiKH8KOURywRERERgucrERERkb386vNV9eNh+YfHxnEyclp3YslKzNzf8STxu7raNXiaoeV0evlElTE43KDT3nZ9iYh8Mj+/nNO7DPxKT2gLv1zJfDVktwqzZCTfiKoolwo1V2EV3YVEai5xqvx7oUUtp6eloUFeZQwLqcaEK75ERD6Z6tsbgqc//hMf58MkiznvAfbqdFUYOTR+uktyqVBzFVYxsepUKixRKf+ebVHXbK4b1s6VOAzjmld8iYh8ONUXNQTzL/9h8mmRv+47T9rF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lIiIiIh8gz8W9HwlIiIi0sLzlYiIiMhewj+/kP/FBg9XIiIiIod4vhIRERHZS/7nQw//ozmer0REREQCc/88Ox8UEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZHP5GvgNOxmhSLyOZx+kcaAn2FhebXQb5qIXEH1n28OI36OROQiqgNVCDhdTsJERPZy+vHx6yQitzH3ReLLSRIRkXU8X4nIcwg/opADwqznKxG5n/w5Cl8h+LkTEeG863zld0xE9rJ+vhIR2YW/fyUif4P85fF8JSJ3Qs5X+e8PkoR+vkTkavJfVfZ8JSJ3sv77V+TfXvDzJSJXM/Gb7WShiMgEV/z54HSYiMg0nq9E5Dl4vhKRv8Hpd8afXhCR26g+OJ6vROR34flKRJ7D6QfH85WI/ArId4b/0LuIyAqnfwHQ85WI/Ar456j6+zh+qURkF6d/AXAM4H96+DPJ6YiIiIiIiIiIiIiIiIiIiIj8PaofPBARERH5QDxfiYiIiOxly/lKRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERETkP76meLi8t8sWERGRT+bhBxXPVyIiIvLrePhBZZcAz1dXM/cIkWteheThGarZqgrJkLVVfruzpAMr+ffqzJ3kebjm9a5mL/lJqLLN1c2RVcVRFZ/ldefy5z4QR1UV3sNunm6XujnHGN4x4rc7SzqfZ0nHxoqErnLejQm47G5DLpU3l+cKhfIfc48QueZVSB6eoZqtqpAMWVvltztLOrCSf6/O3Emeh2te72r2kp+EKttc3RxZVRxV8Vledy5/7gNxVFXhPezm6Xapm3OM4R0jfruzpPN5lnRsrEjoKufdmIDL7jbkUnlzea5QKP8x9wiRa16F5OEZqtmqCsmQtVV+u7OkAyv59+rMneR5uOb1rmYv+Umoss3VzZFVxVEVn+V15/LnPhBHVRXew26ebpe6OccY3jHitztLOp9nScfGioSuct6NCbjsbkMulTeX5wqF8h9zjxC55lVIHp6hmq2qkAxZW+W3O0s6sJJ/r87cSZ6Ha17vavaSn4Qq21zdHFlVHFXxWV53Ln/uA3FUVeE97Obpdqmbc4zhHSN+u7Ok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"
				}
			],
			"uuid": "be5ac2f5-10af-455a-beed-5e5ba77d9d65",
			"charge": 10.81,
			"create_at": "2021-04-15T08:47:08.045Z",
			"label_download": {
				"pdf": "https://shipber-label-stage.s3.us-west-2.amazonaws.com/Labels/fedex/fedex_ground/786002536837/786002536837.pdf?AWSAccessKeyId=AKIAVKD5XIH4LVPFTARC&Expires=1618477362&Signature=hvglmkBXlDMcBeidwBd%2FN4kgQbw%3D"
			}
		}
	}
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




## Cancel Label

<table><tr><td bgcolor=#bdbdbd>POST</td><td>/v1/open-api/label/cancel</td></tr></table>


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
    "order_num": "string"
}
```

<font size='5' color='rgb(51, 51, 51)'>Response</font><br>
```
{
    "data": {
        "status": "",
        "order_num": "",
        "custom_order_num": "",
        "shipment": {
            "carrier_service": "UPS Ground",
            "ship_from": {
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
                "attention": "Tom"
            },
            "ship_to": {
                "postal_code": "90045",
                "country_code": "US",
                "state_or_province_code": "CA",
                "is_residential": false,
                "addresses": ["5353 W Imperial Hwy Unit 900"],
                "city": "Los Angeles",
                "address_classification": "Commercial",
                "name": "Amazon",
                "phone": "0000000000",
                "attention": "Tom"
            },
            "packages": [{
                "dimension": {
                    "width": 10,
                    "height": 10,
                    "length": 10,
                    "code": "IN"
                },
                "weight": {
                    "code": "LBS",
                    "value": 20
                },
                "confirmation": "None",
                "insurance": {
                    "code": "USD",
                    "value": 20
                },
                "quantity": 1,
                "reference_numbers": [{
                    "code": "",
                    "value": "Test reference"
                }]
            }],
            "package_type": {
                "type": "common",
                "name": "Package"
            },
            "pickup_date": "20201029",
            "service_code": ""
        },
        "created_at": "2020-12-16T13:05:58.094Z"
    }
}
```