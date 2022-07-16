const fetch = require('node-fetch');

/*
const getRandomAdvice = () => {
  const url = 'https://api.adviceslip.com/advice';
  const request = fetch(url)
  .then((response) => response.json())
  .then(({ slip: { id, advice } }) => console.log(advice))
  .catch((error) => console.log('Ops, algo deu errado!', error.errno));
};

getRandomAdvice();
*/

const getRandomAdvice = async () => {
  try {
  const url = 'https://api.adviceslip.com/advice';
  const request = await fetch(url);
  const json = await request.json();
  const { slip } = json;
  const { id, advice } = slip;
  return advice;
  } catch (error) {
    return 'verifique sua onexao';
  }
}

getRandomAdvice();










/*const fetch = require('node-fetch');

const consultaCep = async (cep) => {
  try {
    const requisicao = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const resposta = await requisicao.json();

    console.log(resposta);

    //const { logradouro, localidade } = resposta;
    //console.log(logradouro);
    //console.log(`${logradouro} - ${localidade}`);

    return logradouro;
  } catch(error) {
    return error.message;
  }
}

consultaCep('30130010');

module.exports = { consultaCep }
*/



















/*
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
*/
// Chuck Norris can write multi-threaded applications with a single thread.