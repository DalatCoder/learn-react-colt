import './RollDice.css';
import React, { Component } from 'react';
import Die from './Die';

export default class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  state = { die1: 'one', die2: 'one' };

  roll = () => {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ die1: newDie1, die2: newDie2 });
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-dices'>
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}
