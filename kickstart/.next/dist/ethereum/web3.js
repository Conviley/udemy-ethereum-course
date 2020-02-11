'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPTIONS = {
  defaultBlock: 'latest',
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.ethereum, null, OPTIONS);
  window.ethereum.enable();
} else {
  //We are on the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/36e70f3c9a564b0ab5e15d2705568704');
  web3 = new _web2.default(provider, null, OPTIONS);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJPUFRJT05TIiwiZGVmYXVsdEJsb2NrIiwidHJhbnNhY3Rpb25Db25maXJtYXRpb25CbG9ja3MiLCJ0cmFuc2FjdGlvbkJsb2NrVGltZW91dCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxJQUFNO2dCQUFVLEFBQ0EsQUFDZDtpQ0FGYyxBQUVpQixBQUMvQjsyQkFIRixBQUFnQixBQUdXO0FBSFgsQUFDZDs7QUFLRixJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBVCxBQUFnQixVQUFoQixBQUEwQixNQUFqQyxBQUFPLEFBQWdDLEFBQ3ZDO1NBQUEsQUFBTyxTQUFQLEFBQWdCLEFBQ2pCO0FBSkQsT0FJTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBSixBQUFTLFVBQVQsQUFBbUIsTUFBMUIsQUFBTyxBQUF5QixBQUNqQztBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvRGlkZGkvRG9jdW1lbnRzL21qdWt2YXJ1dGVrbmlrL2V4YW1lbnNhcmJldGUvVWRlbXkgRXRoZXJldW0vdWRlbXktZXRoZXJldW0tY291cnNlL2tpY2tzdGFydCJ9