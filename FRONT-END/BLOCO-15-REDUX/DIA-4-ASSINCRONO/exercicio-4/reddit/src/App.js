import React, { Component } from 'react';
import Posts from './components/Posts';
import Refresh from './components/Refresh';
import Select from './components/Select';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <>
        <Title />
        <Select />
        <Refresh />
        <Posts />
      </>
    );
  }
}

export default App;
