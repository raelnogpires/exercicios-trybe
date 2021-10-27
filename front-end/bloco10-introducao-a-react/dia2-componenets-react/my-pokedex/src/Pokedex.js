import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render() {
    return (
      pokemons.map(({ name, type, averageWeight, image}, index) => {
        return (
          <Pokemon
          key={index}
          name={name}
          type={type}
          value={averageWeight.value}
          measurementUnit={averageWeight.measurementUnit}
          image={image}
          />
        )
      })
    );
  };
};

export default Pokedex;
