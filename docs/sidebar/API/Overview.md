# Overview

## Getting Started


<font size=6 color='rgb(51, 51, 51)'>Currently provided interface </font> <br>
+ <font color='rgb(51, 51, 51)'> Ship From List </font><br>
Get available sender addresses


+ <font color='rgb(51, 51, 51)'> Rate </font><br>
One-click batch calculation of the rates of multiple logistics providers/services/accounts
+ <font color='rgb(51, 51, 51)'> Address validation </font><br>
Address check interface
+ <font color='rgb(51, 51, 51)'> Shipping </font><br>
Create and customize shipping labels
+ <font color='rgb(51, 51, 51)'> Get Label </font><br>
Obtain Label information and convert the waybill created by Shipping into PDF format for printing
+ <font color='rgb(51, 51, 51)'> Cancel </font><br>
Waybill cancellation, cancel the waybill created by Shipping before

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

## Sandbox Environment

<font size=6 color='rgb(51, 51, 51)'>Environment:</font> <br>
<font size=5 color='rgb(51, 51, 51)'>Test Environment:</font> <font size=3 color='rgb(51, 51, 51)'>**https://api.sandbox.shipber.app** </font> <br>
<font size=5 color='rgb(51, 51, 51)'>Account password used for testing </font> <br>
<br>
<font size=3 > api-key：</font> <font size=3 color='rgb(51, 51, 51)'> **2cn1wgmfidytin3jef3b** </font> <br>
<font size=3 > api-secret：</font> <font size=3 color='rgb(51, 51, 51)'> **qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C** </font> <br>
<br>

<font size=5 color='rgb(51, 51, 51)'>Formal environment:</font> <font size=3 color='rgb(51, 51, 51)'>**https://api.shipber.app** </font> <br>

<font size=4 color='rgb(51, 51, 51)'>Suggested test steps</font> <br>
1. First use the test account to obtain the sending address according to the ship from interface (uuid and ship from will be returned) 
2. The next step is the validate interface to verify whether the sendable address is available
3. The third step is the rate interface pricing (note: the uuid and detailed address of the ship from field are two options, it is recommended to use uuid because the error rate of only one field will be very low)
4. Then there is the single creation interface of post/label (note that carrier service and rate id are fields returned according to the rate interface, and must be transmitted accordingly)
5. The fifth step is to get/label to query the order interface
6. The last is the cancel interface

<font size=4 color='rgb(51, 51, 51)'>Be sure to perform a very complete test in the test environment before going to the formal environment for ordering operations. </font>

