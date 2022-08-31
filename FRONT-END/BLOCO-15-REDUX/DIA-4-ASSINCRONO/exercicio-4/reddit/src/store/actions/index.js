// store/actions/index.js
import fetchPosts from '../../api/reddit';

export const CHOOSE_SUBREDDIT = 'CHOOSE_SUBREDDIT';

export const chooseSubreddit = (subreddit) => ({
  type: CHOOSE_SUBREDDIT,
  payload: {
    subreddit,
  }});

export const FETCH_SUBREDDIT_SUCCESS = 'FETCH_SUBREDDIT_SUCCESS';

const fetchSubredditSuccess = (posts) => ({
  type: FETCH_SUBREDDIT_SUCCESS,
  payload: {
    posts,
  }});

export const FETCH_SUBREDDIT_FAIL = 'FETCH_SUBREDDIT_FAIL';

const fetchSubredditError = () => ({
  type: FETCH_SUBREDDIT_FAIL});

export const chooseSubredditThunk = (subreddit) => async (dispatch) => {
  dispatch(chooseSubreddit(subreddit));

  try {
    const posts = await fetchPosts(subreddit);
    dispatch(fetchSubredditSuccess(posts));
  } catch (error) {
    console.log(error);
    dispatch(fetchSubredditError());
  }
};