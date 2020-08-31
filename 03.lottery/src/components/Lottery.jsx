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
      nums: Array(this.props.numBalls).fill(0),
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const newRandNums = this.state.nums.map(() =>
      Math.floor(Math.random() * this.props.maxNum)
    );

    this.setState({ nums: newRandNums });
  }

  render() {
    return (
      <div className='Lottery'>
        <h1 className='Lottery-title'>{this.props.title}</h1>
        <div className='Lottery-balls'>
          {this.state.nums.map((num) => (
            <LotteryBall num={num} />
          ))}
        </div>
        <button className='Lottery-button' onClick={this.onButtonClick}>
          Generate
        </button>
      </div>
    );
  }
}
