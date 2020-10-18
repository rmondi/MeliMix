import React from 'react'
import Result from './Result'
import './Results.css'

import { connect } from 'react-redux'

const ResultsList = props => {
  return (
    <React.Fragment>
      <div className='results__header'>
        <div className='results__word'>Mot</div>
        <div className='results__count'>Lettres</div>
        <div className='results__score'>Score</div>
      </div>
      <div className='results__body'>
        {
          props.results.map(({ word, count, score }, index) => {
            return <Result key={index} word={word} count={count} score={score} />
          })
        }
      </div>
    </React.Fragment>
  )
}

class Results extends React.Component {

  constructor(props) {
    super(props)
    this.total = 0
    this.results = this.getResults(this.props.words)
  }

  getScore = count => {
    let score

    if (count < 3) {
      score = 0
    } else if (count === 3 || count === 4) {
      score = 1
    } else if (count === 5) {
      score = 2
    } else if (count === 6) {
      score = 3
    } else if (count === 7) {
      score = 5
    } else if (count >= 8) {
      score = 11
    } else {
      score = 0
    }

    return score
  }

  getResults = words => {
    let results = []

    words.forEach((word, i) => {
      let result = {}
      result.word = word
      result.count = word.length
      result.score = this.getScore(result.count)

      results.push(result)

      this.total = this.total + result.score
    });

    return results
  }

  render() {
    return (
      <React.Fragment>
      <div className='results'>
        <div className='results__total-score'>
          <span>{ this.total }</span>
          Point(s)
        </div>
        {
          this.results.length > 0 ?
          <ResultsList results={this.results} /> :
          <div className='results__null'>Vous n'avez trouvé aucun mot</div>
        }
      </div>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Results)
