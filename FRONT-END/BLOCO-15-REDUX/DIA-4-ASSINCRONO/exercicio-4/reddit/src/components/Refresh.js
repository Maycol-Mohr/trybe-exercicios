// components/Refresh.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseSubredditThunk } from '../store/actions';

class Refresh extends Component {
  render() {
    const { dispatch, subreddit } = this.props;
    const isDisabled = !subreddit;

    return (
      <button
        onClick={ () => dispatch(chooseSubredditThunk(subreddit)) }
        type="button"
        disabled={ isDisabled }
      >
        Atualizar
      </button>
    );
  }
}

Refresh.propTypes = {
  dispatch: PropTypes.func.isRequired,
  subreddit: PropTypes.string,
};

Refresh.defaultProps = {
  subreddit: null,
};

const mapStateToProps = (state) => ({
  subreddit: state.reddit.subreddit});

export default connect(mapStateToProps)(Refresh);