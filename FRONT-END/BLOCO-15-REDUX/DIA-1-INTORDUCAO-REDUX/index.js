
























// Arquivo index.js

// import { combineReducers } from 'redux';
// import meuReducer from './meuReducer';
// import meuOutroReducer from './meuOutroReducer';

// const reducerCombinado = combineReducers({
// meuReducer,
// meuOutroReducer});

// export default reducerCombinado;





// const Redux = require('redux');


// function criarCor() {
//     const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//     let cor = '#';
//     const aleatorio = () => Math.floor(Math.random() * oneChar.length);
//     for (let i = 0; i < 6; i += 1) {
//         cor += oneChar[aleatorio()];
//     }
//     return cor;
// }

// const reducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//       case 'NEXT_COLOR':
//         return {
//           ...state,
//           index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
//         };
//       case 'PREVIOUS_COLOR':
//         return {
//           ...state,
//           index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
//         };
//       default:
//         return state;
//     }
//   };
  
//   const store = Redux.createStore(reducer);
  
//   const btnPrevious = document.getElementById('previous');
//   const btnNext = document.getElementById('next');
  
//   btnPrevious.addEventListener('click', () => {
//     store.dispatch({ type: 'PREVIOUS_COLOR' });
//   });
  
//   btnNext.addEventListener('click', () => {
//     store.dispatch({ type: 'NEXT_COLOR' });
//   });
  
//   store.subscribe(() => {
//     const { colors, index } = store.getState();
//     document.getElementById('value').innerHTML = colors[index];
//     document.getElementById('container').style.backgroundColor = colors[index];
//   });
  

// Arquivo index.js

// import { combineReducers } from 'redux';
// import meuReducer from './meuReducer';
// import meuOutroReducer from './meuOutroReducer';

// const reducerCombinado = combineReducers({
// meuReducer,
// meuOutroReducer});

// export default reducerCombinado;


// const Redux = require('redux');

// const fazerLogin = (email) => ({
//     type: "LOGIN",
//     email});
  
//   const ESTADO_INICIAL = {
//     login: false,
//     email: "",
//   };
  
//   const reducer = (state = ESTADO_INICIAL, action) => {
//     switch (action.type) {
//       case "LOGIN":
//         return {
//           ...state,
//           login: !state.login,
//           email: action.email,
//         };
//       default: // No switch, sempre precisamos ter um caso default!
//         return state;
//     }
//   };

// const Redux = require('redux');
  
//   const store = Redux.createStore(reducer);
  
//   store.dispatch(fazerLogin("alguem@email.com"));
  
//   console.log(store.getState());
  
//   // { login: true, email: 'alguem@email.com' }



// DATA: 19/08/2022

// const Redux = require('redux');

// const fazerLogin = (email) => ({
//   type: "LOGIN",
//   email});

// const ESTADO_INICIAL = {
//   login: false,
//   email: "",
//   };
  
//   const reducer = (state = ESTADO_INICIAL, action) => {
//     switch (action.type) {
//       case "LOGIN":
//         return {
//           ...state,
//           login: !state.login,
//           email: action.email,
//         };
//       default: // No switch, sempre precisamos ter um caso default!
//         return state;
//     }
//   };
  
//   const store = Redux.createStore(reducer);

//   store.dispatch(fazerLogin("alguem@email.com"));

//   console.log(store.getState());

  // RESULTADO:{ login: false, email: '' } { login: true, email: 'alguem@email.com' }

  // SEGUNDO EXERCICIO

// import { combineReducers } from 'redux';
// import meuReducer from './meuReducer';
// import meuOutroReducer from './meuOutroReducer';

// const reducerCombinado = combineReducers({
// meuReducer,
// meuOutroReducer});

// export default reducerCombinado;

// Arquivo index.js

// import { createStore } from 'redux';
// // Importando o reducer combinado que fizemos logo acima
// import reducerCombinado from './reducers/index';

// const store = createStore(reducerCombinado);

// import { combineReducers } from 'redux';
// import meuReducer from './meuReducer';
// import meuOutroReducer from './meuOutroReducer';

// const reducerCombinado = combineReducers({
// meuReducer,
// meuOutroReducer});

// export default reducerCombinado;

// import { createStore } from 'redux';
// // Importando o reducer combinado que fizemos logo acima
// import reducerCombinado from './reducers/index';

// const store = createStore(reducerCombinado);

// store.subscribe(() => {
//   console.log(store.getState());
// });