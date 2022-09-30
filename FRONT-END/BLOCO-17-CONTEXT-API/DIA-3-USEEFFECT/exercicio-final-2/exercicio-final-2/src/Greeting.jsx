import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Greeting({ initialName }) {
  const localStorageName = localStorage.getItem('name') || initialName;
  const [name, setName] = useState(localStorageName);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  function handleChange({ target: { value } }) {
    setName(value);
  }

  return (
    <div>
      {/* Utilizamos o evento onSubmit e event.preventDefault() para evitar que
      a página recarregue ao pressionar a tecla Enter */}
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="name">
          Name:
          <input onChange={ handleChange } id="name" />
        </label>
      </form>
      { name ? <strong>{ `Hello ${name}` }</strong> : 'Please type your name' }
    </div>
  );
}

export default Greeting;

Greeting.propTypes = {
  initialName: PropTypes.string,
};

Greeting.defaultProps = {
  initialName: '',
};