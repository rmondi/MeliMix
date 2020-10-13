import React from 'react'
import Timer from './Timer'
import Grid from './Grid'
import AddWord from './AddWord'
import PlayButton from './PlayButton'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class App extends React.Component {

  handleClick = (e) => {
    this.props.set_status('start')
  }

  render() {

    const status = this.props.status

    if (status === '') {
      return <PlayButton />
    } else if (status === 'start') {
      return (
        <React.Fragment>
          <Timer />
          <Grid />
          <AddWord />
        </React.Fragment>
      )
    } else if (status === 'end') {
      return (
        <React.Fragment>
          <div>Fin de la partie</div>
          <PlayButton />
        </React.Fragment>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return { status: state.status }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_status: (status) => {
      dispatch(ACTIONS.set_status(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
