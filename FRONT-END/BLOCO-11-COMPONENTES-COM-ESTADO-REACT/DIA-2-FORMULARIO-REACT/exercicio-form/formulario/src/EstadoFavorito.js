
/*
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if(value.length > 120) error = "Texto muito grande!!!"

    return (
          <label>
            Diga qual é o melhor time do Rio de Janeiro
            <textarea 
              name="melhorTime" 
              value={value} 
              onChange={handleChange} 
            />
            <span>{error ? error : ''}</span>
          </label>
    )
 }
}

EstadoFavorito.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default EstadoFavorito;
*/




/*
import React, { Component } from 'react'

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if(value.length > 120) error = "Texto muito grande!!!"

    return (
          <label>
            Diga qual o seu estado favorito! de React ou do Brasil, você decide!!
            <textarea 
              name="estadoFavorito" 
              value={value} 
              onChange={handleChange} 
            />
            <span>{error ? error : ''}</span>
          </label>
    )
 }
}

export default EstadoFavorito;
*/