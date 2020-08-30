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
      <div>
        <Die number={this.state.dice1} />
        <Die number={this.state.dice2} />
        <button onClick={this.rollDice}>Roll Dice!</button>
      </div>
    );
  }
}
