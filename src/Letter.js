import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class Letter extends React.Component {

  isMarked = letter => {
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

  formatLetter = (letter, select) => {
    return select ? `${this.isMarked(letter)} selected` : this.isMarked(letter)
  }

  isSelectable = (previousSelectedLetter, currentSelectedLetter) => {
    console.log(previousSelectedLetter, currentSelectedLetter)

    let selectable = false

    if (previousSelectedLetter === null) { // First selected letter is selectable
      selectable = true
    } else { // From the second selected letter we have to check if it is selectable
      if ((previousSelectedLetter + 1) === currentSelectedLetter) { // currentSelectedLetter is on the right
        selectable = true
      } else if ((previousSelectedLetter - 1) === currentSelectedLetter) { // currentSelectedLetter is on the left
        selectable = true
      }
    }

    return selectable
  }

  handleClick = e => {
    const { previousSelectedLetter, ukey } = this.props

    if (this.isSelectable(previousSelectedLetter, ukey)) {
      this.props.select_letter(e.target.innerText, ukey)
      this.props.set_word(e.target.innerText)
      this.props.set_selected(ukey)
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

const mapStateToProps = state => {
  return {
    previousSelectedLetter: state.previousSelectedLetter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    select_letter: (letter, index) => {
      dispatch(ACTIONS.select_letter(letter, index))
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(Letter);
