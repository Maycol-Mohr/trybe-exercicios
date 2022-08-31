// components/Posts.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Posts extends Component {
  render() {
    const { posts, isFetching, error } = this.props;

    return (
      <>
        {
          isFetching && (
            <div>Carregando...</div>
          )
        }

        {
          error && (
            <div>{error}</div>
          )
        }

        <ul>
          {
            posts.map((post) => (
              <li key={ post.id }>{post.title}</li>
            ))
          }
        </ul>
      </>
    );
  }
}

Posts.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

Posts.defaultProps = {
  error: null,
};

const mapStateToProps = (state) => ({
  posts: state.reddit.posts,
  isFetching: state.reddit.isFetching,
  error: state.reddit.error});

export default connect(mapStateToProps)(Posts);