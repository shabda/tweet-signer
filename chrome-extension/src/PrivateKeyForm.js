// Default imports
import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import bcrypto from 'bcrypto'

// Custom imports
// None

const PrivateKeyForm = (props) => {
  const [state, setState] = useState({ privateKey: '' })

  useEffect(() => {
    chrome.storage.local.get(['privateKey'], (result) => {
      const privateKey = result.privateKey || ''
      setState({ ...state, privateKey })
    })
  }, [chrome, setState])

  function handleOnClick () {
    const privateKey = state.privateKey
    // TODO: handle UX
    if (!bcrypto.browser.valid(privateKey)) {
      console.error('invalid key');
      return;
    }
    chrome.storage.local.set({ privateKey })
    props.rerenderParentCallback()
    setState({ privateKey: '' })
  }

  return (
    <div className='card todo-list-container'>
      <div className='card-header'><h3 className='card-title'>Settings</h3></div>
      <div className='card-body'>
        Please enter private key
      </div>

      <div className='card-footer'>
        <InputGroup className='mb-3'>
          <FormControl
            value={state.privateKey}
            placeholder='Private Key'
            aria-label='Private Key'
            as='textarea'
            aria-describedby='basic-addon2'
            onChange={e => setState({ privateKey: e.target.value })}
          />
          <InputGroup.Append>
            <Button disabled={!state.privateKey} variant='primary' onClick={() => handleOnClick()}>Set Private Key</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  )
}

export default PrivateKeyForm
