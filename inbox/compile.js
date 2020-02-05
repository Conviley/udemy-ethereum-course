//Require this for path to be correct on any OS
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//create path to contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Get the source code
const source = fs.readFileSync(inboxPath, 'utf8'); 

//what to compile and how many contracts. Also just export the contract objec
module.exports = solc.compile(source, 1).contracts[':Inbox']; 