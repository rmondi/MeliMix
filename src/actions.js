import * as ACTIONS from './actions_types'

const set_status = (status) => {
  return {
    type: ACTIONS.SET_STATUS,
    status: status
  }
}

const add_letter = (letter) => {
  return {
    type: ACTIONS.ADD_LETTER,
    letter: letter
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

export { set_status, add_letter, add_word, delete_word }
