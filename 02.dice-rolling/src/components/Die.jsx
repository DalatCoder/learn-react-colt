import './Die.css';
import React, { Component } from 'react';

export default class Die extends Component {
  render() {
    return (
      <div className='Die'>
        <i className={`fas fa-dice-${this.props.face}`}></i>
      </div>
    );
  }
}
