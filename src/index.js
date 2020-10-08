import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let initState = {
  gameInProgress: false,
  letters: [],
  foundWords: []
};

ReactDOM.render(<App />, document.getElementById('app'))
