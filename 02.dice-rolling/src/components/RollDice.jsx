import './RollDice.css';
import React, { Component } from 'react';
import Die from './Die';

function genRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

export default class RollDice extends Component {
  state = {
    dice1: 1,
    dice2: 1,
  };

  rollDice = () => {
    this.setState({
      dice1: genRandomDice(),
      dice2: genRandomDice(),
    });
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-dices'>
          <Die number={this.state.dice1} />
          <Die number={this.state.dice2} />
        </div>
        <button onClick={this.rollDice} className='RollDice-btn'>
          Roll Dice!
        </button>
      </div>
    );
  }
}
