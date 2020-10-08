import React from 'react'
import './Dice.css'

class Dice extends React.Component {

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
    e.target.classList.toggle('selected')
  }

  render() {

    const letter = this.props.children

    return (
      <div className={"dice " + this.direction()}>
        <span className={this.isMarked(letter) ? "marked" : undefined} onClick={this.handleClick}>
          { letter }
        </span>
      </div>
    )

  }

}

export default Dice;
