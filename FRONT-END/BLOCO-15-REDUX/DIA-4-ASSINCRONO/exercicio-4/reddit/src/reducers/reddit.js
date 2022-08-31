// store/reducers/reddit.js
import {
    CHOOSE_SUBREDDIT,
    FETCH_SUBREDDIT_FAIL,
    FETCH_SUBREDDIT_SUCCESS,
  } from '../store/actions';
  
  const INITIAL_STATE = {
    subreddit: null,
    isFetching: false,
    posts: [],
    error: null,
  };
  
  const redditReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CHOOSE_SUBREDDIT:
      return {
        ...state,
        isFetching: true,
        error: null,
        posts: [],
        subreddit: action.payload.subreddit,
      };
    case FETCH_SUBREDDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.posts,
      };
    case FETCH_SUBREDDIT_FAIL:
      return {
        ...state,
        isFetching: false,
        error: 'Erro na API',
      };
    default:
      return state;
    }
  };
  
  export default redditReducer;