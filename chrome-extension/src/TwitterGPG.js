import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import QRCode from 'qrcode.react'
import NodeRSA from 'node-rsa'
import PrivateKeyForm from './PrivateKeyForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

class TwitterGPG extends Component {
  constructor (props) {
    super(props)
    this.state = {
      privateKey: '',
      tweetMessage: '',
      signature: ''
    }
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this)
  }

  componentDidMount () {
    chrome.storage.local.get(['privateKey'], (result) => {
      const privateKey = result.privateKey || ''
      this.setState({ ...this.state, privateKey })
    })
  }

  handleOnClick () {
    if (!this.state.tweetMessage) { return }
    this.setState((prevState) => {
      const responseSignature = this.signTweet(prevState.tweetMessage)
      return { ...this.state, tweetMessage: '', signature: responseSignature }
    })
  }

  signTweet (data) {
    const rsa = new NodeRSA(this.state.privateKey, NodeRSA.FormatPem)
    const sign = rsa.sign(data, 'hex')
    return sign
  }

  rerenderParentCallback () {
    chrome.storage.local.get(['privateKey'], (result) => {
      const privateKey = result.privateKey || ''
      this.setState({ ...this.state, signature: '', privateKey })
    })
  }

  renderPrivateKeyPage () {
    console.log('rendering private key page')
    return (
      <PrivateKeyForm rerenderParentCallback={this.rerenderParentCallback} />
    )
  }

  renderTweetPage () {
    return (
      <div className='card todo-list-container' style={{ minWidth: '640px', minHeight: '480px' }}>
        <div className='card-header'>
          <div class='d-sm-flex justify-content-between align-items-center mb-4'>
            <h3 class='text-dark mb-0'>Tweet Signer</h3>
            <button className='btn btn-primary btn-sm d-none d-sm-inline-block' onClick={() => this.setState({ ...this.state, privateKey: '' })}>
              <FontAwesomeIcon icon={faCogs} />
            </button>
          </div>
        </div>
        <div className='card-body'>
          {this.state.signature === '' ? <div>Welcome, please type a tweet to get started!</div> : <QRCode value={this.state.signature} />}
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
            <InputGroup.Append>
              <Button disabled={!this.state.tweetMessage} variant='primary' onClick={() => this.handleOnClick()}>Generate QR for Tweet</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    )
  }

  render () {
    return (
      <>
        {this.state.privateKey === '' ? this.renderPrivateKeyPage() : this.renderTweetPage()}
      </>
    )
  }
}

export default TwitterGPG
