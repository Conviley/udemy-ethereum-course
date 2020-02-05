const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3') // This is a constructor
const provider = ganache.provider();
    const OPTIONS = {
      defaultBlock: "latest",
      transactionConfirmationBlocks: 1,
      transactionBlockTimeout: 5
    };
const web3 = new Web3(provider, null, OPTIONS);
const { interface, bytecode } = require('../compile')

let accounts
let inbox;
const INITIAL_MESSAGE = 'Hi there!'
const NEW_MESSAGE = 'new message'
//rinkeby.infura.io/v3/36e70f3c9a564b0ab5e15d2705568704
beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()
    
    // Use one of those accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
        .send({ from: accounts[0], gas: '1000000'})
    //inbox.setProvider(provider)
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox.options.address)
        assert.ok(inbox.options.address)
    })

    it('has a default message', async () => {
        const message = await inbox.methods.message().call()
        assert.equal(message, INITIAL_MESSAGE)
    })

    it('can change the message', async () => {
        await inbox.methods.setMessage(NEW_MESSAGE).send({ from: accounts[0] })
        const message = await inbox.methods.message().call()
        assert.equal(message, NEW_MESSAGE)
    })
})