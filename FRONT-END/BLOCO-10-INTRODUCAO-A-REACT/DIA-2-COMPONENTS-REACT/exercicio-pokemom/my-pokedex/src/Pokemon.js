// arquivo Pokemon.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section className='pokes'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p> Average wheight: { averageWeight.value } { averageWeight.measurementUnit }</p>
          <img src={ image } alt={ `${name} sprite` } />
        </section>
      /*
        <section className='pokes'>
          <p>{ this.props.poke.name }</p>
          <p>{ this.props.poke.type }</p>
          <Image source={ image } alternativeText="User avatar" /> isso é da linha 15
          <p> Average wheight: { this.props.poke.averageWeight.value } { this.props.poke.averageWeight.measurementUnit }</p>
          <Image source={this.props.poke.image} alternativeText="User avatar" />
        </section>
        */
    );
  }
}

Pokemon.propTypes = {   
  pokemon: PropTypes.shape ({  
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  }),
  averageWeight: PropTypes.shape({
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  }),
  //image: PropTypes.string.isRequired,
};

/*
Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };
*/
Pokemon.defaultProps = {
  name: 'preencher nome!!'
}

export default Pokemon;