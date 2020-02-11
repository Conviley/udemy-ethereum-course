import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x14A9c55f681d1A44221808D28FF1766250aD2857'
)

export default instance
