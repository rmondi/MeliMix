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

  isSelected = (selectedLetters, currentSelectedLetter) => {
    let selected = false

    selectedLetters.forEach(({ index }) => {
      if (index === currentSelectedLetter) selected = true
    })

    return selected
  }

  isAdjacent = (previous, current) => {
    const row = 4
    let adjacent = false

    if ((previous - 1) === current && previous % row !== 0) {
      adjacent = true
    } else if ((previous + 1) === current && current % row !== 0) {
      adjacent = true
    } else if ((previous - row) === current) {
      adjacent = true
    } else if ((previous + row) === current) {
      adjacent = true
    } else if ((previous - (row + 1)) === current) {
      adjacent = true
    } else if ((previous - (row - 1)) === current) {
      adjacent = true
    } else if ((previous + (row + 1)) === current && current % row !== 0) {
      adjacent = true
    } else if ((previous + (row - 1)) === current && previous % row !== 0) {
      adjacent = true
    }

    return adjacent
  }

  isSelectable = (selectedLetters, previousSelectedLetter, currentSelectedLetter) => {
    let selectable = false

    // First selected letter is selectable
    if (previousSelectedLetter === null) {
      selectable = true
    } else {
      // Check if the current selected letter is not already selected
      if (!this.isSelected(selectedLetters, currentSelectedLetter)) {
        // check if the current selected letter is adjacent from the previous selected letter
        if (this.isAdjacent(previousSelectedLetter, currentSelectedLetter)) {
          selectable = true
        } else {
          console.error('Letter has to be adjacent from the previous selected letter')
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
