const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8')
const output = solc.compile(source, 1).contracts

fs.ensureDirSync(buildPath) // create build folder if it doesn't exist

for (let contract in output) {
  let name = contract.replace(':', '')
  fs.outputJsonSync(path.resolve(buildPath, name + '.json'), output[contract])
}
