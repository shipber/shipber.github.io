# Overview

## Getting Started

### Currently provided interface

+ **Ship From List** <br>
  Get available sender addresses


+ **Rate** <br>
  One-click batch calculation of the rates of multiple logistics providers/services/accounts
+ **Address validation** <br>
  Address check interface
+ **Shipping** <br>
  Create and customize shipping labels
+ **Get Label** <br>
  Obtain Label information and convert the waybill created by Shipping into PDF format for printing
+ **Cancel** <br>
  Waybill cancellation, cancel the waybill created by Shipping before






## Sandbox Environment URL


**Test Environment:** `https://api.sandbox.shipber.app` <br>

**Formal environment:** `https://api.shipber.app`

### Account password used for testing
```
api-key： 2cn1wgmfidytin3jef3b 
api-secret： qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
```


### Suggested test steps

1. First use the test account to obtain the sending address according to the ship from interface (uuid and ship from will be returned)
2. The next step is the validate interface to verify whether the sendable address is available
3. The third step is the rate interface pricing (note: the uuid and detailed address of the ship from field are two options, it is recommended to use uuid because the error rate of only one field will be very low)
4. Then there is the single creation interface of post/label (note that carrier service and rate id are fields returned according to the rate interface, and must be transmitted accordingly)
5. The fifth step is to get/label to query the order interface
6. The last is the cancel interface

<br>

**Be sure to perform a very complete test in the test environment before going to the formal environment for ordering operations.**

