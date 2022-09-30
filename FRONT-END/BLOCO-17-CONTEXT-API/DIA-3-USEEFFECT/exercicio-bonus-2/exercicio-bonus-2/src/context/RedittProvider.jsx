import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

const RedditProvider = ({ children }) => {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
    frontend: { items: [] },
    reactjs: { items: [] },
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);
    const newPostsBySubreddit = {
      ...postsBySubreddit,
      [selectedSubreddit]: { items, lastUpdated },
    };

    setPostsBySubreddit(newPostsBySubreddit);
    setIsFetching(false);
  };

  const handleFetchError = (error) => {
    const newPostsBySubreddit = {
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    };

    setPostsBySubreddit(newPostsBySubreddit);
    setIsFetching(false);
  };

  const fetchPosts = () => {
    setIsFetching(true);
    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  };

  const hasSubredditLoaded = () => {
    const posts = postsBySubreddit[selectedSubreddit];
    return posts.items.length > 0;
  };

  useEffect(() => {
    if (!hasSubredditLoaded()) {
      fetchPosts();
    }
  }, [selectedSubreddit]);

  const context = {
    postsBySubreddit,
    selectedSubreddit,
    isFetching,
    selectSubreddit: setSelectedSubreddit,
    fetchPosts,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <RedditContext.Provider value={ context }>
      { children }
    </RedditContext.Provider>
  );
};

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RedditProvider;