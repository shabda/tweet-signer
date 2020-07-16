import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import QRCode from 'qrcode.react'
import NodeRSA from 'node-rsa'
import QR from 'qrcode'

class TwitterGPG extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      privateKey: '',
      tweetMessage: '',
      signature: ''
    }
  }

  componentDidMount () {
    chrome.storage.local.get(['privateKey'], (result) => {
      const privateKey = result.privateKey || ''
      this.setState({ privateKey })
    })
  }

  handleOnClick () {
    console.log('Hello world!! I am clicking')
    if (!this.state.tweetMessage) { return }
    this.setState((prevState) => {
      const privateKey = prevState.privateKey
      const responseSignature = this.signTweet(prevState.tweetMessage)
      console.log('Signature : ', responseSignature)
      return { privateKey: privateKey, tweetMessage: '', signature: responseSignature }
    })
  }

  signTweet (data) {
    console.log('Private key : ', this.state.privateKey)
    const rsa = new NodeRSA(this.state.privateKey, NodeRSA.FormatPem)
    const sign = rsa.sign(data, 'hex')
    return sign
    // const qr = QR.toDataURL(sign)
    // return qr.toString()
  }

  render () {
    return (
      <div className='card todo-list-container'>
        <div className='card-header'><h3 className='card-title'>Todo List</h3></div>
        <div className='card-body'>
          {/* {this.state.privateKey === '' ? <FormToSavePrivateKey /> : console.log('Done')} */}
          {this.state.signature === '' ? <h3>Welcome</h3> : <QRCode value={this.state.signature} />}
        </div>

        <div className='card-footer'>
          <InputGroup className='mb-3'>
            <FormControl
              value={this.state.tweetMessage}
              placeholder='Tweet'
              aria-label='Tweet'
              as='textarea'
              aria-describedby='basic-addon2'
              onChange={e => this.setState({ tweetMessage: e.target.value })}
            />
            <br />
            <FormControl
              value={this.state.privateKey}
              placeholder='Private Key'
              aria-label='Private Key'
              as='textarea'
              aria-describedby='basic-addon2'
              onChange={e => this.setState({ privateKey: e.target.value })}
            />
            <InputGroup.Append>
              <Button disabled={!this.state.tweetMessage} variant='primary' onClick={this.handleOnClick.bind(this)}>Generate QR for Tweet</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    )
  }
}

export default TwitterGPG
