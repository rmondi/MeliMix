import React from 'react';
import Word from './Word'
import './WordsList.css'

import { connect } from 'react-redux'

class WordsList extends React.Component {

  render () {
    return (
      <div className='words'>
        { this.props.words.map((word, index) => <Word key={index} index={index} word={word} />) }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(WordsList);
