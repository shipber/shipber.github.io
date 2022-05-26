# Overview

## Getting Started

### Currently provided APIs

+ **Ship From List** <br>
  Getting available sender addresses


+ **Rate** <br>
  You can estimate a rate by providing a subset of the information required to create a label. You can use this to allow customers to quickly compare rates across services, carriers, and more without having to fill in all the information required to create a label.
+ **Address validation** <br>
  Provide you with an official address
+ **Shipping** <br>
  Create and customize shipping labels
+ **Download Label** <br>
  Obtain Label information and convert the waybill created by Shipping into PDF format for printing
+ **Cancel** <br>
  Cancel created label before Shipping







## Sandbox Environment 

### How to Use the Sandbox
We will provide you with API-key and API-secret dedicated to the sandbox environment for testing, which is also convenient for you to test without incurring real costs and real tracking information
Other than the API-key and API-secret, everything else is the same. So you can easily test and develop your application in the sandbox and then when you're ready to go to production all you need to do is change the API key.

### Differences in Behavior
Our sandbox environment matches the production environment as much as possible, but there are a few differences to be aware of:

#### Limited Parcel Carriers
We currently only support the three major US parcel carriers -- UPS, FedEx, Pitney Bowes and USPS (Stamps.com). Other carriers will be added in the future, including international carriers.However, in the sandbox environment, the account only provides three services: FedEx Ground, FedEx Home Delivery and UPS Ground for testing.Rates

#### Rates
The shipping rates that you get in the sandbox may not match the rates that you get in production. Any negotiated rate discounts that you have are not applied in the sandbox, and some rates are "dummy" rates to prevent abuse of our sandbox for production purposes.

#### Test Labels
Created in the sandbox environment with multiple Labels per shipment or one Label per shipment, because in fact printing the label will incur costs,  we set up a test label for download,so the printed labels are all the same label


### Test Environment: `https://api.sandbox.shipber.com` 

<br>

### Account password used for testing 
```
api-key： 2cn1wgmfidytin3jef3b 
api-secret： qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
```

<br>

### Formal environment: `https://api.shipber.app` 

<br>

### Suggested test steps

1. First use the test account to obtain the sending address according to the ship from interface (uuid and ship from will be returned)
2. The next step is the validate interface to verify whether the sendable address is available
3. The third step is the rate interface pricing (note: the uuid and detailed address of the ship from field are two options, it is recommended to use uuid because the error rate of only one field will be very low)
4. Then there is the single creation interface of post/label (note that carrier service and rate id are fields returned according to the rate interface, and must be transmitted accordingly)
5. The fifth step is to get/label to query the order interface
6. The last is the cancel interface

<br>

**Be sure to perform a very complete test in the test environment before going to the formal environment for ordering operations.**

