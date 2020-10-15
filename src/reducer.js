import * as ACTIONS from './actions_types'

let initState = {
  status: "",
  letters: [],
  word: '',
  words: []
};

const Reducer = (state = initState, action) => {

  let newState = {}

  if (action.type === ACTIONS.SET_STATUS) {

    newState = Object.assign({}, state, { status: action.status })

  } else if (action.type === ACTIONS.SET_LETTERS) {

    newState = Object.assign({}, state, { letters: action.letters })

  } else if (action.type === ACTIONS.SET_SELECTED) {

    let letters = state.letters

    letters.forEach((letter, i) => {
      if (action.index === i) {
        letter.selected = true
      }
    });

    newState = Object.assign({}, state, { letters: letters })

  } else if (action.type === ACTIONS.SET_WORD) {

    newState = Object.assign({}, state, { word: state.word + action.letter })

  } else if (action.type === ACTIONS.SET_NEW_GAME) {

    newState = Object.assign({}, state, {
      status: 'start',
      letters: [],
      word: '',
      words: []
    })

  } else if (action.type === ACTIONS.ADD_WORD) {

    let list = state.words
    list.push(action.word)

    newState = Object.assign({}, state, { word: '', words: list })

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

  console.log(action, newState);

  return newState
}

export default Reducer
