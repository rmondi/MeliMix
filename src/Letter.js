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

  isAlreadySelected = (selectedLetters, currentSelectedLetter) => {
    let alreadySelected = false

    selectedLetters.forEach(({ index }) => {
      if (index === currentSelectedLetter) alreadySelected = true
    })

    return alreadySelected
  }

  isAdjacent = (previous, current) => {
    let adjacent = false

    if ((previous + 1) === current) { // currentSelectedLetter is on the right
      adjacent = true
    } else if ((previous - 1) === current) { // currentSelectedLetter is on the left
      adjacent = true
    }

    return adjacent
  }

  isSelectable = (selectedLetters, previousSelectedLetter, currentSelectedLetter) => {
    console.log(selectedLetters, previousSelectedLetter, currentSelectedLetter)

    let selectable = false

    // First selected letter is selectable
    if (previousSelectedLetter === null) {
      selectable = true
    } else {
      // Check if the current selected letter is not already selected
      if (!this.isAlreadySelected(selectedLetters, currentSelectedLetter)) {
        // check if the current selected letter is adjacent from the previous selected letter
        if (this.isAdjacent(previousSelectedLetter, currentSelectedLetter)) {
          selectable = true
        }
      } else {
        console.error('Letter is already selected')
      }
    }

    return selectable
  }

  handleClick = e => {
    const { selectedLetters, previousSelectedLetter, ukey } = this.props

    if (this.isSelectable(selectedLetters, previousSelectedLetter, ukey)) {
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
    previousSelectedLetter: state.previousSelectedLetter,
    selectedLetters: state.selectedLetters
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
