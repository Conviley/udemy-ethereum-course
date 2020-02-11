import Web3 from 'web3'

const OPTIONS = {
  defaultBlock: 'latest',
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
}

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.ethereum, null, OPTIONS)
  window.ethereum.enable()
} else {
  //We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/36e70f3c9a564b0ab5e15d2705568704'
  )
  web3 = new Web3(provider, null, OPTIONS)
}

export default web3
