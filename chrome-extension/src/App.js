import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/style.css'
import ReactDOM from 'react-dom'
import React from 'react'
// import TodoList from './TodoList'
import TwitterGPG from './TwitterGPG'

function App () {
  return (<TwitterGPG />)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
