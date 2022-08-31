// // src/App.test.js
// import { cleanup, render, screen } from '@testing-library/react';
// import React from 'react';
// import { Provider } from 'react-redux';
// import App from './App';
// import { combineReducers, createStore } from 'redux';
// import clickReducer from './reducers';
// import userEvent from '@testing-library/user-event';

// const renderWithRedux = (
//   component,
//   {
//     initialState,
//     store = createStore(combineReducers({ clickReducer }), initialState),
//   } = {},
// ) => ({
//   ...render(<Provider store={ store }>{component}</Provider>),
//   store});

// describe('testing clicks', () => {
//   beforeEach(cleanup);
//   test('the page should have a button and a text 0', () => {
//     renderWithRedux(<App />);
//     const buttonAdicionar = screen.queryByText('Clique aqui');

//     expect(buttonAdicionar).toBeInTheDocument();
//     expect(screen.getByText('0')).toBeInTheDocument();
//   });

//   test('a click in a button should increment the value of clicks', () => {
//     renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

//     expect(screen.getByText('5')).toBeInTheDocument();
//   });





//   test('when the button is clicked, the value counter is increased by 1', () => {
//     renderWithRedux(<App />);
//     const buttonAdicionar = screen.queryByText('Clique aqui');

//     expect(screen.getByText('0')).toBeInTheDocument();

//     userEvent.click(buttonAdicionar);

//     expect(screen.getByText('1')).toBeInTheDocument();
//   });

//   test('the value counter is increased by 1 even when the initial value is 10', () => {
//     renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
//     const buttonAdicionar = screen.queryByText('Clique aqui');

//     expect(screen.getByText('10')).toBeInTheDocument();

//     userEvent.click(buttonAdicionar);

//     expect(screen.getByText('11')).toBeInTheDocument();
//   });
// });










import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from './App';
import renderWithRedux from './helper';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    renderWithRedux(<App />);
    const buttonDoguinho = screen.queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    userEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
