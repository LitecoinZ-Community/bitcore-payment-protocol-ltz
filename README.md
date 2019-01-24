Bitcore Payment Protocol
=======

A module for [bitcore](https://github.com/LitecoinZ-Community/bitcore-ltz) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm  packaging systems.

```sh
npm install bitcore-lib-ltz
npm install bitcore-payment-protocol-ltz
```


There are many examples of how to use it on the developer guide [section for payment protocol](https://bitcore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('bitcore-payment-protocol-ltz');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/LitecoinZ-Community/bitcore-ltz/blob/master/CONTRIBUTING.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/LitecoinZ-Community/bitcore-ltz/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
