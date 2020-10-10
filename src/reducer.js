import * as ACTIONS from './actions_types'

let initState = {
  gameInProgress: false,
  letters: [],
  foundWords: []
};

const Reducer = (state = initState, action) => {

  let newState = {}

  if (action.type === ACTIONS.ADD_WORD) {

    let list = state.foundWords
    list.push(action.word)

    newState = Object.assign({}, state, { foundWords: list })

  } else if (action.type === ACTIONS.DELETE_WORD) {

    let list = state.foundWords
    list = list.filter((elem, i) => {
      if (i === action.index) return false
      else return true
    })

    newState = Object.assign({}, state, { foundWords: list })

  } else {
    newState = state
  }

  return newState
}

export default Reducer
