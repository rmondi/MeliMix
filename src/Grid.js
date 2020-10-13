import React from 'react'
import Letter from './Letter'
import './Grid.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class Grid extends React.Component {

  constructor(props) {
    super(props)
    this.props.set_letters(this.shakeDices())
  }

  shakeDices() {
    /* Simulating the 16 dices of the game */
    const dices = [
      ['E', 'T', 'U', 'K', 'N', 'O'],
      ['E', 'V', 'G', 'T', 'I', 'N'],
      ['D', 'E', 'C', 'A', 'M', 'P'],
      ['I', 'E', 'L', 'R', 'U', 'W'],
      ['E', 'H', 'I', 'F', 'S', 'E'],
      ['R', 'E', 'C', 'A', 'L', 'S'],
      ['E', 'N', 'T', 'D', 'O', 'S'],
      ['O', 'F', 'X', 'R', 'I', 'A'],
      ['N', 'A', 'V', 'E', 'D', 'Z'],
      ['E', 'I', 'O', 'A', 'T', 'A'],
      ['G', 'L', 'E', 'N', 'Y', 'U'],
      ['B', 'M', 'A', 'Q', 'J', 'O'],
      ['T', 'L', 'I', 'B', 'R', 'A'],
      ['S', 'P', 'U', 'L', 'T', 'E'],
      ['A', 'I', 'M', 'S', 'O', 'R'],
      ['E', 'N', 'H', 'R', 'I', 'S']
    ]

    /* Array to store generatedDices */
    let generatedDices = []

    /* Generating the 16 dices */
    for (let i = 0; i <= 15; i++) {
      /* Selecting a number between 0 and 5 */
      const randomNumber = Math.floor(Math.random() * 5)
      /* Selecting the letter of each dice according to the random generated number */
      generatedDices.push(dices[i][randomNumber])
    }

    return generatedDices
  }

  render() {
    return (
      <div className='grid'>
        { this.props.letters.map((elem, index) => <Letter key={index}>{elem}</Letter>) }
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
    set_letters: (letters) => {
      dispatch(ACTIONS.set_letters(letters))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
