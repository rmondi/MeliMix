import React from 'react'
import PropTypes from 'prop-types'
import './Result.css'

class Result extends React.Component {

  render() {
    return (
      <div className='result'>
        <div className='result__word'>{ this.props.word }</div>
        <div className='result__count'>{ this.props.count }</div>
        <div className='result__score'>{ this.props.score }</div>
      </div>
    )
  }

}

Result.propTypes = {
  count: PropTypes.number,
  score: PropTypes.number,
  word: PropTypes.string
}

export default Result
