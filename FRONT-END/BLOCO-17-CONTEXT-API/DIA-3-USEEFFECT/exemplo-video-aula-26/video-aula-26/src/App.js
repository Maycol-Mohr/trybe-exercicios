import React, { useState, useEffect } from 'react';
import './App.css';
import usePokemonSprite from './hooks/usePokemonSprite';

function App() {
  
  const [pokemonList, setPokemonList] = useState([]);
  const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  const [pokemonImage, setPokemonUrl] = usePokemonSprite();

  //did mount + didUpdate
  useEffect(() => {
    const getPokemons = async () => {
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPokemonList(results);
    };
    getPokemons();
  }, []);

  return (
    <main>
      <section>
        <h1>Pokemon List</h1>
        <img src={pokemonImage} alt="src" />
        <div>
          <ul>
            {pokemonList.map(({ name, url }) => {
              return (
                <li key={name} 
                onClick={() => setPokemonUrl(url)}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import BestPokemon from './components/BestPokemon';

// function App() {
  
//   const [pokemonList, setPokemonList] = useState([]);
//   const [limit, setLimit] = useState(10);
//   const [visible, setVisible] = useState(false);
//   const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

//   const handleAddLimit = () => {
//     setLimit((state) => state + 10);
//   }

//   //did mount + didUpdate
//   useEffect(() => {
//     const getPokemons = async () => {
//       const { results } = await fetch(endpoint).then((response) => response.json());
//       setPokemonList(results);
//     };
//     getPokemons();
//   }, [limit]);

//   //didUpdate => qualquer estado do componente
//   // useEffect(() => console.log('atualizou'));

//   return (
//     <main>
//       <section>
//         <h1>Pokemon List</h1>
//         <div>
//           <button 
//           type='button' 
//           onClick={handleAddLimit}
//           >
//             Buscar mais pokemons
//           </button>
//           <button 
//           type='button' 
//           onClick={() => setVisible(!visible)}
//           >
//             Mostrar o melhor pokemon
//           </button>
//           { visible && <BestPokemon /> }
//           <ul>
//             {pokemonList.map(({ name }) => <li key={name}>{name}</li>)}
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default App;
