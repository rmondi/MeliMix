import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class Letter extends React.Component {

  isMarked(letter) {
    let marked

    switch(letter) {

      case 'M':
      case 'W':
      case 'N':
      case 'Z':
        marked = 'marked'
      break
      default:
        marked = ''
    }

    return marked
  }

  formatLetter(letter, select) {
    return select ? `${this.isMarked(letter)} selected` : this.isMarked(letter)
  }

  handleClick = e => {
    if (!this.props.selected) {
      this.props.set_word(e.target.innerText)
      this.props.set_selected(this.props.ukey)
    }
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

const mapDispatchToProps = dispatch => {
  return {
    set_word: letter => {
      dispatch(ACTIONS.set_word(letter))
    },
    set_selected : index => {
      dispatch(ACTIONS.set_selected(index))
    }
  }
}

Letter.propTypes = {
  children: PropTypes.string,
  direction: PropTypes.string,
  selected: PropTypes.bool,
  ukey: PropTypes.number
}

export default connect(null, mapDispatchToProps)(Letter);
