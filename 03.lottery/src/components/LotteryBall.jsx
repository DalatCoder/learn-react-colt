import React, { Component } from 'react';

export default class LotteryBall extends Component {
  render() {
    const styles = {
      width: '40px',
      height: '40px',
      backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#333',
      fontFamily: 'sans-serif',
      lineHeight: 0,
    };
    return <div style={styles}>{this.props.num}</div>;
  }
}
