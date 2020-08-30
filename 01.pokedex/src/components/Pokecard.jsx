import React from 'react';
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{{id}}.png';

const padToThree = (number) =>
  number < 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends React.Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgSrc = `${POKE_API}`.replace('{{id}}', padToThree(id));

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <img src={imgSrc} alt={name} />
        <div className='Pokecard-data'>Type: {type}</div>
        <div className='Pokecard-data'>EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
