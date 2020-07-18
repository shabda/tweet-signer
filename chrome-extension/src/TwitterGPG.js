import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import QRCode from 'qrcode.react'
import bcrypto from 'bcrypto'
import PrivateKeyForm from './PrivateKeyForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

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
      return { ...this.state, signature: responseSignature }
    })
  }

  signTweet (data) {
    return bcrypto.browser.sign(data, this.state.privateKey);
  }

  downloadQR() {
    var filename = 'qr' + makeid(5) + '.png'
    var canvas = document.getElementsByTagName('canvas')[0];

    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'), e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {
      e = document.createEvent("MouseEvents");
      e.initMouseEvent("click", true, true, window,
        0, 0, 0, 0, 0, false, false, false,
        false, 0, null);

      lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
      lnk.fireEvent("onclick");
    }
  }

  rerenderParentCallback () {
    chrome.storage.local.get(['privateKey'], (result) => {
      const privateKey = result.privateKey || ''
      this.setState({ ...this.state, signature: '', privateKey })
    })
  }

  renderPrivateKeyPage () {
    return (
      <PrivateKeyForm rerenderParentCallback={this.rerenderParentCallback} />
    )
  }

  renderTweetPage () {
    return (
      <div className='card todo-list-container' style={{ minWidth: '640px', minHeight: '480px' }}>
        <div className='card-header'>
          <div className='d-sm-flex justify-content-between align-items-center mb-4'>
            <h3 className='text-dark mb-0'>Tweet Signer</h3>
            <button className='btn btn-primary btn-sm d-none d-sm-inline-block' onClick={() => this.setState({ ...this.state, privateKey: '' })}>
              <FontAwesomeIcon icon={faCogs} />
            </button>
          </div>
        </div>
        <div className='card-body'>
          {this.state.signature === '' ? <div>Welcome, please type a tweet to get started!</div> : <QRCode size={256} value={this.state.signature} />}
        </div>

        <div className='card-footer'>
          <InputGroup className='mb-3'>
            <FormControl
              value={this.state.tweetMessage}
              placeholder='Type your tweet here..'
              aria-label='Type your tweet here..'
              as='textarea'
              aria-describedby='basic-addon2'
              onChange={e => this.setState({ tweetMessage: e.target.value })}
            />
            &nbsp;&nbsp;
            <InputGroup.Append>
              <Button disabled={!this.state.tweetMessage} variant='primary' onClick={() => this.handleOnClick()}>Generate QR for Tweet</Button>
              &nbsp;&nbsp;
              <Button disabled={!this.state.signature} variant='primary' onClick={() => this.downloadQR()}>Download QR</Button>
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
