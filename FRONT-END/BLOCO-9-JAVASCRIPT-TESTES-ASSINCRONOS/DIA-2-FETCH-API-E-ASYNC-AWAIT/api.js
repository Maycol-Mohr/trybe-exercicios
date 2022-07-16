// api.js



/*
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
    return coins;
  }
  
  const setCoins = async () => {
    const coins = await fetchCoins();
  
    const coinsList = document.getElementById('coins-list');
  
    coins
      .filter((coin) => Number(coin.rank) <= 10)
      .forEach((coin) => {
        const newLi = document.createElement('li');
  
        newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
  
        coinsList.appendChild(newLi);
      });
  }
  
  window.onload = () => setCoins();
  */


/*
  // api.js
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
    return coins;
  };
  
  const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);
  
    const usdCurrencies = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.usd)
      .catch((error) => error.toString());
  
    return usdCurrencies;
  };
  
  const setCoins = async () => {
    const coins = await fetchCoins();
    const usdCurrencies = await fetchUsdCurrencies();
  
    const coinsList = document.getElementById('coins-list');
  
    coins
      .filter((coin) => Number(coin.rank) <= 10)
      .forEach((coin) => {
        const newLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd);
        const brlPrice = usdPrice * usdCurrencies.brl;
  
        newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;
  
        coinsList.appendChild(newLi);
      });
  };
  
  window.onload = () => setCoins();
  */

/*
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported
*/
/*
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);

  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
*/
/*
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
*/

// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();





























