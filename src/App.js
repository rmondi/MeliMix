import React from 'react'
import Timer from './Timer'
import Grid from './Grid'
import AddWord from './AddWord'
import WordsList from './WordsList'
import Results from './Results'
import PlayButton from './PlayButton'
import './App.css'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class App extends React.Component {

  handleClick = () => {
    this.props.set_status('start')
  }

  render() {

    const status = this.props.status

    if (status === '') {
      return <PlayButton />
    } else if (status === 'start') {
      return (
        <div className='container'>
          <Timer />
          <Grid />
          <AddWord />
          <WordsList />
        </div>
      )
    } else if (status === 'end') {
      return (
        <div className='container'>
          <Results />
          <PlayButton />
        </div>
      )
    }
  }

}

const mapStateToProps = state => {
  return { status: state.status }
}

const mapDispatchToProps = dispatch => {
  return {
    set_status: status => {
      dispatch(ACTIONS.set_status(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
