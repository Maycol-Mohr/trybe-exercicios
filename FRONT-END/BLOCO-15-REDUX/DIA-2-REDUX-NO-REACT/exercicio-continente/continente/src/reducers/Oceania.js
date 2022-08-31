import { OCEANIA_ENERGY } from '../action';

const INITIAL_STATE = {
  percentage: 0,
};

function oceaniaContinent(state = INITIAL_STATE, action) {
  switch (action.type) {
  case OCEANIA_ENERGY:
    return { state: action.state };
  default:
    return state;
  }
}

export default oceaniaContinent;