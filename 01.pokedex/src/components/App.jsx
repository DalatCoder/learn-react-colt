import React from 'react';
import Pokecard from './Pokecard';

class App extends React.Component {
  render() {
    return <Pokecard id={4} name="Charmander" type="fire" exp={62} />;
  }
}

export default App;
