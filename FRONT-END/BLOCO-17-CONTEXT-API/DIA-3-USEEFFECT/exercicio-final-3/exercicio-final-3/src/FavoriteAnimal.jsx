import React from 'react';
import PropTypes from 'prop-types';

function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">
        Favorite Animal:
        <input
          id="animal"
          value={ animal }
          onChange={ ({ target: { value } }) => onAnimalChange(value) }
        />
      </label>
    </div>
  );
}

export default FavoriteAnimal;

FavoriteAnimal.propTypes = {
  animal: PropTypes.string,
  onAnimalChange: PropTypes.func.isRequired,
};

FavoriteAnimal.defaultProps = {
  animal: '',
};