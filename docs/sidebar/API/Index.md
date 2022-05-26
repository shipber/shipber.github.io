# 介绍

## 前言

### 目前提供的接口

+ **Ship From List** <br>
  获取可用发件地址


+ **Rate** <br>
  一键批量运算多个物流商/服务/账号的费率
+ **Address validation** <br>
  地址校检接口
+ **Shipping** <br>
  创建和自定义货运标签
+ **Download Label** <br>
  获取Label信息，将Shipping 创建的运单，转成PDF 格式进行打印。
+ **Cancel** <br>
  运单取消, 将之前 Shipping 创建的运单进行取消







## 沙盒环境

### 如何使用沙盒
我们将为您提供专门用于沙盒环境的API密钥和API secret进行测试，这也方便您进行测试，不会产生实际成本和实际跟踪信息，除了API密钥和API secret之外，其他一切都是一样的。因此，您可以在沙箱中轻松测试和开发应用程序，然后在准备投入生产时，只需更改API密钥即可。

### 差异
我们的沙箱环境尽可能与生产环境相匹配，但有一些差异需要注意：

#### 有限包裹承运人
我们目前只支持美国三大包裹运输公司——UPS、FedEx、PitneyBowes和USPS（Stamps.com）。未来将增加其他承运人，包括国际承运人。然而，在沙箱环境中，该帐户仅提供三项服务：联邦快递地面服务、联邦快递送货上门服务和UPS测试地面服务。费率

#### 费率
您在沙箱中获得的运费可能与您在生产中获得的运费不匹配。您没有在沙箱中应用任何协商的费率折扣，有些费率是“虚拟”费率，以防止我们的沙箱被滥用用于生产目的。

#### 测试标签
在沙盒环境中创建，每个装运有多个标签或每个装运有一个标签，因为实际上打印标签会产生成本，所以我们设置了一个测试标签供下载，所以打印的标签都是相同的标签


### 测试环境: `https://api.sandbox.shipber.com` 

<br>

### 测试使用的账号密码
```
api-key： 2cn1wgmfidytin3jef3b 
api-secret： qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C
```

<br>

### 正式环境: `https://api.shipber.app` 

<br>

### 测试步骤建议

1. 首先使用测试账号根据ship from接口获得发件地址(会返回uuid和ship from)
2. 接下来就是validate接口校验可发件地址是否可用
3. 第三步就是rate接口计价（注意：ship from字段的uuid和详细地址是二选一的，建议使用uuid因为只有一条字段出错率会很低）
4. 然后就是post/label的建单接口（注意carrier service和rate id是根据rate接口返回来的字段，一定要对应上进行传递）
5. 第五步就是get/label查询订单接口
6. 最后就是cancel接口

<br>

**请务必在测试环境进行非常完善的测试之后，再到正式环境进行打单操作。**

