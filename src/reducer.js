import './actions_types'

let initState = {
  gameInProgress: false,
  letters: [],
  foundWords: []
};

const reducer = (state = stateInit, action) => {

  let newState = {}

  if (action.type === ADD_WORD) {

    let list = state.foundWords
    list.push(action.word)

    newState = Object.assign({}, state, { foundWords: list })

  } else if (action.type === DELETE_WORD) {

    let list = state.foundWords
    list = list.filter((elem, i) => i === action.index ? return false : return true)

    newState = Object.assign({}, state, { foundWords: list })

  } else {
    newState = state
  }

  return newsState
}

export default reducer
