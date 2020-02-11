import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address)

    const accounts = await web3.eth.getAccounts()
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0],
    })
  }

  onFinalize = async () => {
    const campaign = Campaign(this.props.address)

    const accounts = await web3.eth.getAccounts()
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0],
    })
  }

  render() {
    const { Row, Cell } = Table
    const { id, request, approversCount } = this.props
    const approvalCount = parseInt(request.approvalCount._hex, 16)
    const approversCount_int = parseInt(approversCount._hex, 16)
    const readyToFinalize = approvalCount > approversCount_int / 2

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>
          {web3.utils.fromWei(
            parseInt(request.value._hex, 16).toString(),
            'ether'
          )}
        </Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {approvalCount}/{approversCount_int}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    )
  }
}

export default RequestRow
