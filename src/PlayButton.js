import React from 'react'
import Button from './Button'
import './PlayButton.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class PlayButton extends React.Component {

  handleClick = () => {
    this.props.set_new_game()
  }

  render() {
    return (
      <div className='play'>
        <Button onclick={this.handleClick} type='primary'>
          {this.props.status === '' ? 'Démarrer' : 'Rejouer'}
        </Button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set_new_game: () => {
      dispatch(ACTIONS.set_new_game())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton)
