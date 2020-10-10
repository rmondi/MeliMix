import React from 'react'
import Button from './Button'
import Timer from './Timer'
import Grid from './Grid'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Timer />
        <Grid />
      </React.Fragment>
    )
  }

}

export default App;
