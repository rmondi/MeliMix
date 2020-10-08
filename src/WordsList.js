import React from 'react';

function Word({word}) {
  return <div>Un mot trouvé par le joueur</div>
}

class WordsList extends React.Component {

  render () {
    return <div>Liste des mots trouvés par le joueur</div>
  }

}

export { Word, WordsList };
