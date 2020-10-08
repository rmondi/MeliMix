import './actions_types'

const add_word = (word) => {
  return {
    type: ADD_WORD,
    word: word
  }
}

const delete_word = (index) => {
  return {
    type: DELETE_WORD,
    index: index
  }
}

export {add_word, delete_word}
