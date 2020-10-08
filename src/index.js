import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'

let initState = {
  gameInProgress: false,
  letters: [],
  foundWords: []
};

ReactDOM.render(<App />, document.getElementById('app'))
