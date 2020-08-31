import './Box.css';
import React, { Component } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id, this.props.color);
  }

  render() {
    return (
      <div
        className='Box'
        onClick={this.handleClick}
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}
