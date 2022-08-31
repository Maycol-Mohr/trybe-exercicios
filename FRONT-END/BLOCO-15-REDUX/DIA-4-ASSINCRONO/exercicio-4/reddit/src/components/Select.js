// components/Select.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseSubredditThunk } from '../store/actions';

class Select extends Component {
  handleChange(e) {
    const { dispatch } = this.props;

    dispatch(chooseSubredditThunk(e.target.value));
  }

  render() {
    return (
      <select
        onChange={ (e) => this.handleChange(e) }
        name="select-subreddit"
        id="select-subreddit"
        defaultValue=""
      >
        <option value="" disabled>Escolha um subreddit</option>
        <option value="reactjs">reactjs</option>
        <option value="frontend">frontend</option>
      </select>
    );
  }
}

Select.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Select);