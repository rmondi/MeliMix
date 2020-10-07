import React from 'react';
import ReactDOM from 'react-dom';

let initState = {
  gameInProgress: false,
  letters: [],
  foundWords: []
}

function Word({word}) {
  return <div>Un mot trouvé par le joueur</div>
}

class WordsList extends React.Component {

  render () {
    return <div>Liste des mots trouvés par le joueur</div>
  }

}

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

function Letter({letter}) {
  return <div>Un dé</div>
}

class Grid extends React.Component {

  constructor() {
    super(props)
    this.state = {
      letters: []
    }
  }

  generateLetters() {

  }

  componentWillUnmount() {
    this.setState({
      letters: []
    })
  }

  render() {
    return <div>Le grille de lettres</div>
  }

}

class App extends React.Component {

  render() {
    return <div>L'application</div>
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
