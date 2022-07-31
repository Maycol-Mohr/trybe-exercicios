
/*
// src/App.js

import React from 'react';
import './App.css';
import Connections from './Connections';
import Profile from './Profile';

class App extends React.Component {
  constructor() {
    super();

this.state = {
  showProfile: true,
};

this.changeProfile = this.changeProfile.bind(this);
}

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
return (
  <div className="gitNetwork d-flex flex-column justify-content-center">
    { showProfile ? <Profile /> : null }
    <div className="central d-flex justify-content-center">
      <button
        className="btn btn-dark align-self-center"
        type="button"
        onClick={ this.changeProfile }
      >
        Mostrar / Ocultar Perfil
      </button>
    </div>
    <Connections />
  </div>
);
  }
}

export default App;

*/

// src/App.js
/*
import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {

  render() {
return (
   <Counter />
);
  }
}

export default App;
*/



// App.js
import React, { Component }from 'react';
import './App.css';
import PersonDetails from './PersonDetails';

class App extends Component {
  render() {
    return (
    <PersonDetails />
);
  }
}

export default App;









// App.js
/*
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }
*/


  /*
  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }
*/
/*
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
                <p>{character.species}</p>
                <p>{character.gender}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
*/