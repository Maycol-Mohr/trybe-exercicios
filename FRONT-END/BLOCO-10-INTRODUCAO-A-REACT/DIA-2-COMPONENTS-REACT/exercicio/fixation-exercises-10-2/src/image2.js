import React, { Component } from 'react';

class Image2 extends Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image2;