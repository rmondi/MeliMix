import * as ACTIONS from './actions_types'

const set_status = (status) => {
  return {
    type: ACTIONS.SET_STATUS,
    status: status
  }
}

const set_letters = (letters) => {
  return {
    type: ACTIONS.SET_LETTERS,
    letters: letters
  }
}

const set_selected = (index) => {
  return {
    type: ACTIONS.SET_SELECTED,
    index: index
  }
}

const set_word = (letter) => {
  return {
    type: ACTIONS.SET_WORD,
    letter: letter
  }
}

const set_new_game = () => {
  return {
    type: ACTIONS.SET_NEW_GAME
  }
}

const add_word = (word) => {
  return {
    type: ACTIONS.ADD_WORD,
    word: word
  }
}

const delete_word = (index) => {
  return {
    type: ACTIONS.DELETE_WORD,
    index: index
  }
}

export { set_status, set_letters, set_selected, set_word, set_new_game, add_word, delete_word }
