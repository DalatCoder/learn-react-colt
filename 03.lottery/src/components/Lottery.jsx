import './Lottery.css';
import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

export default class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array(this.props.numBalls).fill(null),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        () => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className='Lottery'>
        <h1 className='Lottery-title'>{this.props.title}</h1>
        <div className='Lottery-balls'>
          {this.state.nums.map((num) => (
            <LotteryBall num={num} />
          ))}
        </div>
        <button className='Lottery-button' onClick={this.handleClick}>
          Generate
        </button>
      </section>
    );
  }
}
