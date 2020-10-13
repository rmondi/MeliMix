import React from 'react'
import Button from './Button'
import Timer from './Timer'
import Grid from './Grid'
import AddWord from './AddWord'

import { connect } from 'react-redux'
import * as ACTIONS from './actions'

class App extends React.Component {

  handleClick = (e) => {
    this.props.set_status('start')
  }

  render() {

    const status = this.props.status

    if (status === '') {
      return <Button onclick={this.handleClick} type="primary">Lancer la partie</Button>
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
          <Button onclick={this.handleClick} type="primary">Rejouer</Button>
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
