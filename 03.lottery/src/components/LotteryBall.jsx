import React, { Component } from 'react';

export default class LotteryBall extends Component {
  render() {
    const styles = {
      width: '3em',
      height: '3em',
      backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: '#333',
      fontFamily: 'sans-serif',
      lineHeight: 0,
    };
    return <div style={styles}>{this.props.num}</div>;
  }
}
