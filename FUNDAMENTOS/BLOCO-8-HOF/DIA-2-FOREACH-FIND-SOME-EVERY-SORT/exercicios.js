

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


//exercicio 7
//const expectedResult = false;

function authorUnique() {
    return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));

  //return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));

}

console.log(authorUnique(books));


//exercicio 6
//const expectedResult = true;

/*
function someBookWasReleaseOnThe80s() {
   return books.some((person) => person.releaseYear >= 1980 && person.releaseYear <= 1989);
   //return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s(books));
*/
/*
// Adicione o código do exercício aqui: exercicio 1
function authorBornIn1947() {
  return books.find((firstPerson) => firstPerson.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());
*/
 /*
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());
 */

//let book;

//console.log(!book);
/*
const books = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};
*/

/*
function getNamedBook() {
  //return books.find((primeiro) => primeiro.name.length === 26);
  return books.find((primeiro) => primeiro.name.length === 26).name;
  //return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook(books));
*/
/*
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];
*/

/*
function booksOrderedByReleaseYearDesc() {
 // return books.sort((yearBookA, yearBookB) => yearBookA.releaseYear - yearBookB.releaseYear);
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
};

console.log(booksOrderedByReleaseYearDesc());
*/

//const expectedResult = false;
/*
function everyoneWasBornOnSecXX() {
  return books.every((person) => person.author.birthYear > 1900 && person.author.birthYear <= 2000);
  //return books.some((person) => person.author.birthYear >= 1900);
  //return books.every((book) => (
   // book.author.birthYear > 1900 && book.author.birthYear <= 2000
  //));
}

console.log(everyoneWasBornOnSecXX());
*/
/*
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

console.log('CRESCENTE');
//people.sort((personA, personB) => personA.age > personB.age ? 1 : -1);

people.sort((personA, personB) => personA.age - personB.age);

//console.log('DECRESCENTE');
//people.sort((a, b) => a.age < b.age ? 1 : -1);

//people.sort((personA, personB) => personB.age - personA.age);

console.log(people);
*/


/*
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//numbers.sort();
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]


const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]


const points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]
*/

// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


/*
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);

    //return arr.every((person) => person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));
*/

/*
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    
    return arr.some((currentName) => currentName === name);
    

    //return arr.some((currentName) => currentName === name);
}

console.log(hasName(names, 'Ana'))
*/


/*
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));
*/

/*
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
*/

/*
// Array que será passado para o .every
const numbers = [1, 3, 5, 7, 9, 10];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se todos os números são ímpares, a callback retornará true e a frase "Todos os números são ímpares". Caso contrário, o retorno da callback é false, indicando que há um número par no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.every(isOdd)) {
    answer.innerHTML = "Todos os números são ímpares";
  } else {
    answer.innerHTML = "Pelo menos um número é par";
  }
};

const btnEvery = document.querySelector("#btn-every");

btnEvery.addEventListener("click", () => checkIsOdd(numbers));
*/


/*
// Array que será passado para o .some
const numbers = [2, 4, 6, 8, 12, 14, 16, 170];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se houver pelo menos um número ímpar, a callback retornará true e a frase "Pelo menos um número é ímpar". Caso contrário, o retorno da callback é false, indicando que não há número ímpar no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.some(isOdd)) {
    answer.innerHTML = "Pelo menos um número é ímpar";
  } else {
    answer.innerHTML = "Nenhum número é impar";
  }
};

const btnSome = document.querySelector("#btn-some");

btnSome.addEventListener("click", () => checkIsOdd(numbers));
*/


/*
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {

    return musicas.find((musica) => musica.id === id);
  }
  
  console.log(findMusic('31031685'))
  console.log(findMusic('31031686'))
  console.log(findMusic('31031687'))
  console.log(findMusic('31031688'))
*/

/*
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const isby3and5 = numbers.find(findDivisibleBy3And5);

const isEven2 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(isby3and5)
console.log(isEven2)
*/

/*
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const nameby5 = names.find(findNameWithFiveLetters);
console.log(nameby5);

const isEven2 = names.find((name) => name.length === 8);
console.log(isEven2);
*/

/*
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
*/

/*
const array1 = [10, 20, 30, 40];

const found = array1.find(element => element > 20);

console.log(found);
// expected output: 12
*/


/*
// Array contendo a lista de emails.
const emailList = [
    "isa@myemail.com",
    "lipe@myemail.com",
    "digo@myemail.com",
    "greg@myemail.com"
  ];
  
  // Função callback que recebe o array emailList como parâmetro.
  const showEmailList = (list) => {
    const div = document.querySelector("#email-list");
    div.innerHTML = '';
  // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
    list.forEach((email) => {
      const p = document.createElement("p");
      p.innerHTML = `${email} : Enviado com sucesso!`;
      div.appendChild(p);
    });
  }
  
  const btnFilter = document.querySelector("#btn-filter");
  btnFilter.addEventListener("click", () => showEmailList(emailList));
  */


/*
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach((item, posicao, array) => {
    showEmailList(item);
    console.log(`A ${posicao} está nesta posicao.`);
    console.log(`Segue também o array completo: ${array}`);
    console.log();
    emailListInData.forEach(showEmailList);
});
*/

/*
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
*/

/*
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
*/

/*
let listaAprovados = [
    'maycol@gmail.com',
    'mari@gmail.com',
    'gugu@gmail.com',
    'casa@gmail.com',
    'brasil@gmail.com',
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso!`);
}

listaAprovados.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posicao é a de: ${posicao}`);
    console.log(`A quantidade de pessoas no processo seletivo é de: ${array.length} pessoas.`);
    console.log();
});

*/


/*
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});
*/
// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]



/*
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

meuArray.forEach((elemento) => {
    if (elemento % 2 === 0) {
      console.log(`${elemento} é divísivel por 2!`);
    } else {
        console.log(`${elemento} nao é divísivel por 2!`);
    }
  });

  console.log(meuArray.find(elemento => elemento % 5 === 0));
*/

/*
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indice, array) => {
  console.log('Cada elemento do array:', element, indice, array);
});
*/
// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

/*
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50
*/

/*
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50
*/

/*
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  */
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]



/*
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]
*/

/*
const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('Clicou no botão!');
});
*/

//EXERCICIOS AULA 8.1
/*
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable(5, 7));
//
  [Function: sum]

  */
/*
  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);
*/
/*
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(10));
*/
/*
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

*/
/*
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());
*/
/*
const wakeUp = () => 'Acordando!!';


const cafe = () => 'Bora tomar café!!';


const dormir = () => 'Partiu dormir!!';


const doingThings = (callback) => {
  const resultado = callback();
    console.log(resultado);
}

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(cafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
*/
/*
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};


const newEmployees = (callback) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),  
    id2: employeeGenerator('Luiza Drumond'),  
    id3: employeeGenerator('Carla Paiva'), 
  }
  return employees;
};


console.log(newEmployees(employeeGenerator));
*/

/*
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
*/
/*
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

*/





