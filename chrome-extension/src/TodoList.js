// import React from 'react'
// import ListGroup from 'react-bootstrap/ListGroup'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

// function CrossButton (props) {
//   return (<Button type='button' className='close' aria-label='Close' onClick={() => props.removeItem(props.itemKey)}><span aria-hidden='true'>&times;</span></Button>)
// }
// class TodoList extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { todoListItems: [], item: '' }
//   }

//   componentDidMount () {
//     chrome.storage.local.get(['todoListItems'], (result) => {
//       const todoListItems = result.todoListItems || []
//       this.setState({ todoListItems })
//     })
//   }

//   removeItem (key) {
//     this.setState((prevState) => {
//       const items = prevState.todoListItems
//       items.splice(key, 1)
//       chrome.storage.local.set({ todoListItems: items })
//       return { todoListItems: items }
//     })
//   }

//   addItem () {
//     if (!this.state.item) { return }
//     this.setState((prevState) => {
//       const items = prevState.todoListItems
//       items.push(prevState.item)
//       chrome.storage.local.set({ todoListItems: items })
//       return { todoListItems: items, item: '' }
//     })
//   }

//   render () {
//     return (
//       <div className='card todo-list-container'>
//         <div className='card-header'><h3 className='card-title'>Todo List</h3></div>
//         <div className='card-body'>
//           <ListGroup className='todo-list'>
//             {this.state.todoListItems.length === 0
//               ? <p>Todo list is empty.</p>
//               : this.state.todoListItems.map((l, i) => <ListGroup.Item key={i}>{`${i + 1}) ${l}`}<CrossButton itemKey={i} removeItem={this.removeItem.bind(this)} /></ListGroup.Item>)}
//           </ListGroup>
//         </div>

//         <div className='card-footer'>
//           <InputGroup className='mb-3'>
//             <FormControl
//               value={this.state.item}
//               placeholder='Task Name'
//               aria-label='Task Name'
//               aria-describedby='basic-addon2'
//               onChange={e => this.setState({ item: e.target.value })}
//             />
//             <InputGroup.Append>
//               <Button disabled={!this.state.item} variant='primary' onClick={this.addItem.bind(this)}>Add</Button>
//             </InputGroup.Append>
//           </InputGroup>
//         </div>
//       </div>)
//   }
// }

// export default TodoList
