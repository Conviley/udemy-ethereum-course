const HDWalletPRovider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletPRovider(
    'mesh comfort sketch patch damp payment online audit ceiling glare toddler space',
    'https://rinkeby.infura.io/v3/36e70f3c9a564b0ab5e15d2705568704'
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log('Attempting to deply from account ', accounts[0])
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] })
    
    console.log(interface)
    console.log('Contract deployed to', result.options.address)
}
deploy()