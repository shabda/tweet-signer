// Default imports
import ReactDOM from 'react-dom'
import React from 'react'

// Custom imports
import TwitterGPG from './TwitterGPG'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/style.css'

function App () {
  return (
    <TwitterGPG />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
