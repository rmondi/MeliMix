import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class Letter extends React.Component {

  isMarked(letter) {
    switch(letter) {

      case 'M':
      case 'W':
      case 'N':
      case 'Z':
        return 'marked'
      break
      default:
        return ''
    }
  }

  formatLetter(letter, select) {
    return select ? `${this.isMarked(letter)} selected` : this.isMarked(letter)
  }

  handleClick = (e) => {
    this.props.set_word(e.target.innerText)
    this.props.set_selected(this.props.ukey)
  }

  render() {
    const letter = this.props.children
    const { direction, selected } = this.props

    return (
      <div className={`letter ${direction}`}>
        <span className={this.formatLetter(letter, selected)} onClick={this.handleClick}>
          { letter }
        </span>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    letters: state.letters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_word: (letter) => {
      dispatch(ACTIONS.set_word(letter))
    },
    set_selected : (index) => {
      dispatch(ACTIONS.set_selected(index))
    }
  }
}

Letter.propTypes = {
  onclick: PropTypes.func,
  children: PropTypes.string
}

export default connect(null, mapDispatchToProps)(Letter);
