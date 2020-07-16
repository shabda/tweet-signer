// import React, { Component } from 'react'
// import { InputGroup, FormControl, Button } from 'react-bootstrap'

// class FormToSavePrivateKey extends Component {
//     state = {
//       privateKey: ''
//     }

//     handleOnClick () {
//       if (!this.state.privateKey) { return }
//       this.setState((prevState) => {
//         const privateKey = prevState.privateKey
//         return { privateKey: privateKey }
//       })
//     }

//     render () {
//       return (
//         <div className='card todo-list-container'>
//           <div className='card-header'><h3 className='card-title'>Todo List</h3></div>
//           <div className='card-body' />

//           <div className='card-footer'>
//             <InputGroup className='mb-3'>
//               <FormControl
//                 value={this.state.privateKey}
//                 placeholder='Tweet'
//                 aria-label='Tweet'
//                 as='textarea'
//                 aria-describedby='basic-addon2'
//                 onChange={e => this.setState({ privateKey: e.target.value })}
//               />
//               <InputGroup.Append>
//                 <Button disabled={!this.state.privateKey} variant='primary' onClick={this.handleOnClick.bind(this)}>Generate QR for Tweet</Button>
//               </InputGroup.Append>
//             </InputGroup>
//           </div>
//         </div>
//       )
//     }
// }

// export default FormToSavePrivateKey
