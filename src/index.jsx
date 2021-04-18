import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Main from './components/Main'

import './styles.css'

const App = () => [
  <Header />,
  <Main />,
]

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
