
import React from 'react';
import './App.css';
import pokemons from './Data';
//Import do json criado com os pokemons e seus dados.
import Pokedex from './Pokedex';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

}

export default App;


/*
// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    const users = [
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      idade: 44,
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },

    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      idade: 55,
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },

    {
      id: 100,
      name: "Romário",
      email: "romario@gmail.com",
      idade: 58,
      avatar: "https://media.gettyimages.com/photos/apr-1999-a-portrait-of-romario-of-brazil-before-a-match-against-to-picture-id1204642?s=612x612"
    }
  ]

    return (
      <div className="App">
        {users.map(user => <UserProfile key={user.id} user={user} />)}
      </div>
    );
  }
}

export default App;
*/

/*
import React, { Component } from 'react';

class App extends Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne', 'café'];
    //const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li key={ item }>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;
*/

/*
// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import './App.css';
import Order from './Order';

class App extends Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    const futebol = {
      id: 100,
      user: "futebol@gmail.com",
      product: "Camisa Real Madrid",
      price: {
        value: 150.00,
        currency: "euro"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>       
          <Order order={headphone} />
          <Order order={energyDrink} />
          <Order order={futebol} />
      </div>
    );
  }
}

export default App;
*/

/*
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      idade: 55,
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      idade: 100,
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;
*/

/*
// src/App.js
import React, { Component } from 'react';
import Album from './components/Album'

class App extends Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;
*/



/*
import staringCat from './image/staring.jpg';
import Image2 from './image2';

function App() {
  return (
    <main>
       <Image2 source={staringCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
*/

/*
import Image from './Image';

function App() {
  return (
    <main>
       <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
*/