'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bitcore-payment-protocol-ltz Module: {0}'
};

module.exports = require('bitcore-lib-ltz').errors.extend(spec);
