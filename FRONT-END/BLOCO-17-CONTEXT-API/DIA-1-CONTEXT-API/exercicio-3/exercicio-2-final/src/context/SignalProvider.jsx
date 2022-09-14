// ./src/context/SignalProvider.js
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SignalContext from './SignalContext';

class SignalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: {
        color: 'red',
      },
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <SignalContext.Provider value={ context }>
        {children}
      </SignalContext.Provider>
    );
  }
};

SignalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SignalProvider;