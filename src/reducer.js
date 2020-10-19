import * as ACTIONS from './actions_types'

let initState = {
  status: '',
  letters: [],
  selectedLetters: [],
  previousSelectedLetter: null,
  word: '',
  words: []
};

const Reducer = (state = initState, action) => {

  let newState = {}

  if (action.type === ACTIONS.SET_STATUS) {

    newState = Object.assign({}, state, { status: action.status })

  } else if (action.type === ACTIONS.SET_LETTERS) {

    newState = Object.assign({}, state, { letters: action.letters })

  } else if (action.type === ACTIONS.SELECT_LETTER) {

    let selectedLetters = state.selectedLetters

    selectedLetters.push({ letter: action.letter, index: action.index })

    selectedLetters = selectedLetters.map(elem => {return elem})

    newState = Object.assign({}, state, { selectedLetters: selectedLetters })

  } else if (action.type === ACTIONS.SET_SELECTED) {

    let letters = state.letters

    letters.forEach((letter, i) => {
      if (action.index === i) {
        letter.selected = true
      }
    });

    letters = letters.map(elem => {return elem})

    newState = Object.assign({}, state, { previousSelectedLetter: action.index, letters: letters })

  } else if (action.type === ACTIONS.SET_WORD) {

    newState = Object.assign({}, state, { word: state.word + action.letter })

  } else if (action.type === ACTIONS.SET_NEW_GAME) {

    newState = Object.assign({}, state, {
      status: 'start',
      letters: [],
      selectedLetters: [],
      previousSelectedLetter: null,
      word: '',
      words: []
    })

  } else if (action.type === ACTIONS.ADD_WORD) {

    let list = state.words

    list.push(action.word)
    list = list.map(elem => {return elem})

    let letters = state.letters

    letters.forEach(letter => {
      if (letter.selected) {
        letter.selected = false
      }
    });

    letters = letters.map(elem => {return elem})

    newState = Object.assign({}, state, {letters: letters, selectedLetters: [], previousSelectedLetter: null, word: '', words: list })

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
