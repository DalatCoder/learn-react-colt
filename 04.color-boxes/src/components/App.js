import './App.css';
import React, { Component } from 'react';
import Box from './Box';
import { choice } from '../helpers';

export default class App extends Component {
  static defaultProps = {
    colors: [
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue',
      'BlueViolet',
      'Brown',
      'BurlyWood',
      'CadetBlue',
      'Chartreuse',
      'Chocolate',
      'Coral',
      'CornflowerBlue',
      'Cornsilk',
      'Crimson',
      'Cyan',
      'DarkBlue',
      'DarkCyan',
      'DarkGoldenRod',
      'DarkGray',
      'DarkGrey',
      'DarkGreen',
      'DarkKhaki',
      'DarkMagenta',
      'DarkOliveGreen',
      'DarkOrange',
      'DarkOrchid',
      'DarkRed',
      'DarkSalmon',
      'DarkSeaGreen',
      'DarkSlateBlue',
      'DarkSlateGray',
      'DarkSlateGrey',
      'DarkTurquoise',
      'DarkViolet',
      'DeepPink',
      'DeepSkyBlue',
      'DimGray',
      'DimGrey',
      'DodgerBlue',
      'FireBrick',
      'FloralWhite',
      'ForestGreen',
      'Fuchsia',
      'Gainsboro',
      'GhostWhite',
      'Gold',
      'GoldenRod',
      'Gray',
      'Grey',
      'Green',
      'GreenYellow',
      'HoneyDew',
      'HotPink',
      'IndianRed',
      'Indigo',
      'Ivory',
      'Khaki',
      'Lavender',
      'LavenderBlush',
      'LawnGreen',
      'LemonChiffon',
      'LightBlue',
      'LightCoral',
      'LightCyan',
      'LightGoldenRodYellow',
      'LightGray',
      'LightGrey',
      'LightGreen',
      'LightPink',
      'LightSalmon',
      'LightSeaGreen',
      'LightSkyBlue',
      'LightSlateGray',
      'LightSlateGrey',
      'LightSteelBlue',
      'LightYellow',
      'Lime',
      'LimeGreen',
      'Linen',
      'Magenta',
      'Maroon',
      'MediumAquaMarine',
      'MediumBlue',
      'MediumOrchid',
      'MediumPurple',
      'MediumSeaGreen',
      'MediumSlateBlue',
      'MediumSpringGreen',
      'MediumTurquoise',
      'MediumVioletRed',
      'MidnightBlue',
      'MintCream',
      'MistyRose',
      'Moccasin',
      'NavajoWhite',
      'Navy',
      'OldLace',
      'Olive',
      'OliveDrab',
      'Orange',
      'OrangeRed',
      'Orchid',
      'PaleGoldenRod',
      'PaleGreen',
      'PaleTurquoise',
      'PaleVioletRed',
      'PapayaWhip',
      'PeachPuff',
      'Peru',
      'Pink',
      'Plum',
      'PowderBlue',
      'Purple',
      'RebeccaPurple',
      'Red',
      'RosyBrown',
      'RoyalBlue',
      'SaddleBrown',
      'Salmon',
      'SandyBrown',
      'SeaGreen',
      'SeaShell',
      'Sienna',
      'Silver',
      'SkyBlue',
      'SlateBlue',
      'SlateGray',
      'SlateGrey',
      'Snow',
      'SpringGreen',
      'SteelBlue',
      'Tan',
      'Teal',
      'Thistle',
      'Tomato',
      'Turquoise',
      'Violet',
      'Wheat',
      'White',
      'WhiteSmoke',
      'Yellow',
      'YellowGreen',
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      colors: Array(10)
        .fill(null)
        .map(() => choice(this.props.colors)),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickRandomColor() {
    return choice(this.props.colors);
  }

  setColorAtIndex(index, currColor) {
    const newState = [...this.state.colors];
    newState[index] = choice(
      this.props.colors.filter((col) => col !== currColor)
    );
    this.setState({ colors: newState });
  }

  handleClick(boxIdx, currColor) {
    this.setColorAtIndex(boxIdx, currColor);
  }

  render() {
    return (
      <div className='App'>
        {this.state.colors.map((color, index) => (
          <Box
            key={index}
            color={color}
            id={index}
            onClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}
