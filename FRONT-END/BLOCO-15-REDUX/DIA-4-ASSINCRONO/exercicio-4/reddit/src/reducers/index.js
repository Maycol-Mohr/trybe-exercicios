// src/reducers/index.js

import { combineReducers } from 'redux';
import redditReducer from './reddit';

const rootReducer = combineReducers({
  reddit: redditReducer});

export default rootReducer;
