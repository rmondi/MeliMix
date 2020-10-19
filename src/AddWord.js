import React from 'react'
import Button from './Button'
import './AddWord.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class AddWord extends React.Component {

  setWord = selectedLetters => {
    let word = ''

    selectedLetters.forEach(({ letter }) => {
      word = word + letter
    });

    return word
  }

  handleClick = () => {
    const word = this.setWord(this.props.selectedLetters)

    if (word !== '' && word.length > 1) {
      this.props.add_word(word)
    }
  }

  render() {
    return (
      <div className='addword'>
        <Button onclick={this.handleClick} type='primary'>
          {`Ajouter le mot ${this.setWord(this.props.selectedLetters)}`}
        </Button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    selectedLetters: state.selectedLetters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add_word: word => {
      dispatch(ACTIONS.add_word(word))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWord)
