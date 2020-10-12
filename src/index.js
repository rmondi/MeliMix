import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as ACTIONS from './actions_types'
import Reducer from './reducer'

const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
