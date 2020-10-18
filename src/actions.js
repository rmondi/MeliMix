import * as ACTIONS from './actions_types'

export const set_status = (status) => {
  return {
    type: ACTIONS.SET_STATUS,
    status: status
  }
}

export const set_letters = (letters) => {
  return {
    type: ACTIONS.SET_LETTERS,
    letters: letters
  }
}

export const set_selected = (index) => {
  return {
    type: ACTIONS.SET_SELECTED,
    index: index
  }
}

export const set_word = (letter) => {
  return {
    type: ACTIONS.SET_WORD,
    letter: letter
  }
}

export const set_new_game = () => {
  return {
    type: ACTIONS.SET_NEW_GAME
  }
}

export const add_word = (word) => {
  return {
    type: ACTIONS.ADD_WORD,
    word: word
  }
}

export const delete_word = (index) => {
  return {
    type: ACTIONS.DELETE_WORD,
    index: index
  }
}
