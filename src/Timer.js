import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      min: 3,
      sec: 0
    }
  }

  render () {
    return <div>Le minuteur</div>
  }

}

export default Timer;
