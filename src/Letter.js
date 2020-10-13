import React from 'react'
import PropTypes from 'prop-types'
import './Letter.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class Letter extends React.Component {

  direction() {
    const randomDirection = Math.floor(Math.random() * 3)
    let direction = ''

    if (randomDirection === 0) {
      direction = "deg0"
    } else if (randomDirection === 1) {
      direction = "deg90"
    } else if (randomDirection === 2) {
      direction = "deg180"
    } else if (randomDirection === 3) {
      direction = "deg270"
    }

    return direction
  }

  isMarked(letter) {
    let isMarked = false

    switch(letter) {

      case "M":
      case "W":
      case "N":
      case "Z":
        isMarked = true
      break

    }

    return isMarked
  }

  handleClick = (e) => {
    e.target.classList.add('selected')
    console.log(this.props.word, e.target.innerText)
    this.props.set_word(this.props.word + e.target.innerText)
  }

  render() {
    const letter = this.props.children

    return (
      <div className={"letter " + this.direction()}>
        <span className={this.isMarked(letter) ? "marked" : undefined} onClick={this.handleClick}>
          { letter }
        </span>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    word: state.word
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_word: (word) => {
      dispatch(ACTIONS.set_word(word))
    }
  }
}

Letter.propTypes = {
  onclick: PropTypes.func,
  children: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Letter);
