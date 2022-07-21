// arquivo Pokedex.js
import React, { Component } from 'react';
import './Data.js';
import pokemons from './Data.js';
import Pokemon from './Pokemon.js';

class Pokedex extends Component {
    render() {
        return (
          <div>
          {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
          </div> 
        );
      }
}

export default Pokedex;