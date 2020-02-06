import Web3 from 'web3'

//const web3 = new Web3(window.web3.currentProvider)

const OPTIONS = {
  defaultBlock: 'latest',
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
}
const web3 = new Web3(window.ethereum, null, OPTIONS)
window.ethereum.enable()

export default web3
