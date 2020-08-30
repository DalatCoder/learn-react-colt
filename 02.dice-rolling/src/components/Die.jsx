import React, { Component } from 'react';
import { numberToText } from '../utils';

export default class Die extends Component {
  render() {
    if (this.props.number < 1 || this.props.number > 6) return null;

    const icon = 'fas fa-dice-' + numberToText(this.props.number);
    return (
      <div>
        <i className={icon}></i>
      </div>
    );
  }
}
