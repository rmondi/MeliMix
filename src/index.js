import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import './actions_types'
import './reducer'

const store = createStore(reducer())

ReactDOM.render(<App />, document.getElementById('app'))
