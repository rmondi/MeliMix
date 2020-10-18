import React from 'react'
import Button from './Button'
import './AddWord.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class AddWord extends React.Component {

  handleClick = () => {
    const { word } = this.props

    if (word !== '' && word.length > 1) {
      this.props.add_word(this.props.word)
    }
  }

  render() {
    return (
      <div className='addword'>
        <Button onclick={this.handleClick} type='primary'>
          {`Ajouter le mot ${this.props.word}`}
        </Button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    word: state.word
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
