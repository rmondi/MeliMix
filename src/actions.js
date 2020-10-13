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

const set_word = (word) => {
  return {
    type: ACTIONS.SET_WORD,
    word: word
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

export { set_status, set_letters, add_word, delete_word }
