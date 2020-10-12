import * as ACTIONS from './actions_types'

let initState = {
  status: "",
  letters: [],
  words: []
};

const Reducer = (state = initState, action) => {

  let newState = {}

  if (action.type === ACTIONS.ADD_WORD) {

    let list = state.words
    list.push(action.word)

    newState = Object.assign({}, state, { words: list })

  } else if (action.type === ACTIONS.DELETE_WORD) {

    let list = state.words
    list = list.filter((elem, i) => {
      if (i === action.index) return false
      else return true
    })

    newState = Object.assign({}, state, { words: list })

  } else {
    newState = state
  }

  return newState
}

export default Reducer
