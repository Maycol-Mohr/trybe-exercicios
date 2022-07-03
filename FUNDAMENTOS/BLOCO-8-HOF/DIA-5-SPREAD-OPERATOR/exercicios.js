//secao 8.5
/*
const numbers = [1, 2, 3];
numbers.push(4);
numbers.push(14);

console.log(numbers); // [1, 2, 3, 4]
*/

/*
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = ['F40', ...carros, 'Uno', ...motos];
console.log(veiculos);
*/


/*
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: '28',
  cidade: 'BH',
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
}

console.log(pessoaTryber);
console.log('...................................................');
const pessoaTryber2 = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Corrida',
}

console.log(pessoaTryber2);
*/

/*
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
console.log('................................................');
const newArray2 = [4, 5, 6, ...numbers];
console.log(newArray2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
*/

/*
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); 
*/
/* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

/*
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
console.log(imc(60, 1.7)); // 20.76
*/

/*
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
*/

/*
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); 
*/
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

/*
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar

const additionalItens = ['iogurte', 'granola', 'mel'];

//const juntar = [...specialFruit, ...additionalItens];
//console.log(juntar);

const fruitSalad = (fruit, additional) => {
  const juntar = [...fruit, ...additional];
  return juntar;
};

console.log(fruitSalad(specialFruit, additionalItens));
*/

/*
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

console.log(quantosParams('maycol', 45, 'España', [2, 4, 6], {nome: 'Mohr'})); // Você passou 5 parâmetros para a função.
*/

/*
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)); // 88
*/

/*
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

//console.log(product.name);
//console.log(product.price);
//console.log(product.seller);

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas
*/

/*
// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
*/

/*
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']
*/

/*
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
*/

/*
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
*/

/*
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria
*/
/*
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
*/

/*
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

//const { name, age, nationality } = user;
//console.log(user); // ['Maria', '21', 'Brazilian']
//console.log();
//const { profession, squad, squadInitials } = jobInfos;
//console.log(jobInfos); // ['Software enginner', 'Rocket Landing Logic', 'RLL']

//const novoObjeto = [...user, ...jobInfos];
//const terceiroObjeto = { ...user, ...jobInfos };
const terceiroObjeto = { 
...user,
...jobInfos, 
};
console.log(terceiroObjeto); // ['Maria', '21', 'Brazilian', 'Software enginner', 'Rocket Landing Logic', 'RLL']

// desestruturando o objeto:
const { name, age, nationality, profession, squad, squadInitials } = terceiroObjeto;

console.log(`Hi, my name is ${name}, I am ${age} years old and I am ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

//Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
*/

/*
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
*/

/*
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
*/

/*
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
console.log('teste3');
const [saudacao4, realizarSaudacao] = saudacoes;
console.log('teste1');
console.log(realizarSaudacao(saudacao4));
console.log('teste2');
*/

/*
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

console.log('.............................................................');
console.log(comida, animal, bebida);
console.log('...............................................................');
console.log(comida); 
console.log(animal); 
console.log(bebida); 
*/
/*

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

//const [posicao1, posicao2, posicao3, posicao4] = numerosPares;
//console.log(numerosPares);

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
*/

/*
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(person.nationality);
*/

/*
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

console.log(person.nationality);
*/

/*
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
*/

/*
const getNationality = ({ firstName, lastName, nationality = 'Brazilian'}) => `${firstName} ${lastName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
*/

/*
const newUser = (id, name, email) => {
  return {
    //id: id,
    //name: name,
    //email: email,
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
*/

/*

const getPosition = (latitude, longitude) => ({
  //latitude: latitude,
  //longitude: longitude
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

*/

/*
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!
*/
/*
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!
*/
/*
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!
*/
/*
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
*/











/*
const pessoas = [
    {
        nome: 'Maycol',
        idade: 45,
    },
    {
        nome: 'Romário',
        idade: 15,
    },
    {
        nome: 'gugu',
        idade: 19,
    },
]

const plane = () => pessoas.forEach((pessoa) => (pessoa.nome >= 18));

console.log(plane(pessoas));
*/


/*
var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

const buscarIdades = () => {
  let totalYears = pilots.map((pilot) => pilot.years > 17);
  return totalYears;
}

console.log(buscarIdades());
*/

  /*
  const buscarPilots = (array) => {
  array.forEach((piloto) => (piloto));
  }

  console.log(buscarPilots(pilots));
*/








/*
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

    let officersIds = [];
   // officers.forEach((officer) => officersIds.push(officer.id));

    //let officersIds2 = officers.map((officer) => officer.id);

    const officersIds3 = officers.map(officer => officer.id);

    console.log((officers));
*/




/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

//const sumWithInitial = array1.reduce((acumulador, valorAtual, indice, array) => ` ${acumulador} - valor atual: ${valorAtual} indice: ${indice} - array: ${array}`, 99);
const sumWithInitial = array1.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(sumWithInitial);
//console.log(indice);
//console.log(array);
// expected output: 10
*/