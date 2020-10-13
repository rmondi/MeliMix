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
    let isMarked

    switch(letter) {

      case "M":
      case "W":
      case "N":
      case "Z":
        isMarked = true
      break
      default:
        isMarked = false

    }

    return isMarked
  }

  handleClick = (e) => {
    e.target.classList.add('selected')
    this.props.set_word(e.target.innerText)
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

const mapDispatchToProps = (dispatch) => {
  return {
    set_word: (letter) => {
      dispatch(ACTIONS.set_word(letter))
    }
  }
}

Letter.propTypes = {
  onclick: PropTypes.func,
  children: PropTypes.string
}

export default connect(null, mapDispatchToProps)(Letter);
