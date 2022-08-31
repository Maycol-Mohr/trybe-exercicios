import { ANTARCTICA_ENERGY } from '../action';

const INITIAL_STATE = {
  percentage: 0,
};

function antarcticaContinent(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ANTARCTICA_ENERGY:
    return { state: action.state };
  default:
    return state;
  }
}

export default antarcticaContinent;