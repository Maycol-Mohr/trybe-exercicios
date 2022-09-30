import React, { useContext } from 'react';

import RedditContext from '../context/RedditContext';

const Selector = () => {
  const {
    selectedSubreddit,
    availableSubreddits,
    selectSubreddit,
  } = useContext(RedditContext);

  return (
    <div>
      <h1>{ `Selected: ${selectedSubreddit}` }</h1>
      <select
        onChange={ ({ target }) => selectSubreddit(target.value) }
        value={ selectedSubreddit }
      >
        { availableSubreddits.map((option) => (
          <option
            value={ option }
            key={ option }
          >
            { option }
          </option>
        )) }
      </select>
    </div>
  );
};

export default Selector;