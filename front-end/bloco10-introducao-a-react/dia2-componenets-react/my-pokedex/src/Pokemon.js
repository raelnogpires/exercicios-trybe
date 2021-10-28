import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    return (
      <div key={this.props.key} className='pokemon-div'>
        <div className='text-info'>
          <p>{this.props.name}</p>
          <p>Type: {this.props.type}</p>
          <p>Average Weight: {this.props.value}{this.props.measurementUnit}</p>
        </div>
        <div className='poke-img'>
          <img src={this.props.image}></img>
        </div>
      </div>
    );
  };
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Pokemon;
