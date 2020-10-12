import React from 'react';
import './Timer.css'

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      min: 0,
      sec: 20
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

    console.log({min, sec})

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

  render () {

    if (this.state.min === 0 && this.state.sec === 0) {
      clearInterval(this.timer)
      return <div className='timer'><p>Temps écoulé</p></div>
    }
    return (
      <div className={this.state.sec <= 5 ? 'timer end' : 'timer'}>
        <p>{this.formatTime(this.state)}</p>
      </div>
    )
  }

}

export default Timer;
