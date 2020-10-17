import React from 'react'
import PropTypes from 'prop-types'
import './Word.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class Word extends React.Component {

  handleClick = e => {
    this.props.delete_word(this.props.index)
  }

  render() {
    return (
      <div className='word' onClick={this.handleClick}>
        {this.props.word}
        <span></span>
      </div>
    )
  }

}

Word.propTypes = {
  index: PropTypes.number,
  word: PropTypes.string
}

const mapDispatchToProps = dispatch => {
  return {
    delete_word: index => {
      dispatch(ACTIONS.delete_word(index))
    }
  }
}

export default connect(null, mapDispatchToProps)(Word)
