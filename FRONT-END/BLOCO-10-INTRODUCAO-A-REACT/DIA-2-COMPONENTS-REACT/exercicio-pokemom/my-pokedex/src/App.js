import { Component } from 'react';
import './App.css';
import './Data.js';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
      { <Pokedex/> }
      </div> 
    );
  }
}

export default App;
