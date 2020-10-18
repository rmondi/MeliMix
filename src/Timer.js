import React from 'react'
import './Timer.css'

import * as ACTIONS from './actions'
import { connect } from 'react-redux'

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      min: 3,
      sec: 0
    }
  }

  decreaseTime({min, sec}) {
    sec--

    if (sec < 0) {
      min--

      if (min < 0) {
        min = 0
        sec = 0
      } else {
        sec = 59
      }
    }

    return { min, sec }

  }

  formatTime({min, sec}) {
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    const time = `${min}:${sec}`

    return time
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const time = this.decreaseTime(this.state)
      this.setState(time)
    }, 1000)

  }

  componentDidUpdate() {
    if (this.state.min === 0 && this.state.sec === 0) {
      this.props.set_status('end')
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className={this.state.min === 0 && this.state.sec <= 10 ? 'timer end' : 'timer'}>
        <p>{this.formatTime(this.state)}</p>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    set_status: status => {
      dispatch(ACTIONS.set_status(status))
    }
  }

}

export default connect(null, mapDispatchToProps)(Timer);
