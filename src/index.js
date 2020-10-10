import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import * as ACTIONS from './actions_types'
import Reducer from './reducer'

/*const store = createStore(Reducer())*/

ReactDOM.render(<App />, document.getElementById('app'))
