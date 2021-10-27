import React, { Component } from "react";

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

export default Pokemon;
