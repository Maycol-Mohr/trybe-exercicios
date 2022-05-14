


/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novo = [];

for(let i = 0; i < numbers.length; i += 1) {
    if(i + 1 < numbers.length) {
        novo.push(numbers[i] * numbers[i+1] );
    } else {
        novo.push(numbers[i] * 2);
    }       
}

console.log(novo);
*/

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
    for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
      if (numbers[i] < numbers[secondIndex]) {
        let position = numbers[i];
        numbers[i] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log("CRESCENTE: " + numbers);



  for (let i = 1; i < numbers.length; i += 1) {
    for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
      if (numbers[i] > numbers[secondIndex]) {
        let position = numbers[i];
        numbers[i] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log("DECRESCENTE: " + numbers);
*/


/*

let numbers = [];


for (let i = 1; i <= 25; i += 1) {
    numbers.push(i);
}

console.log(numbers);


for (let i = 1; i <= numbers.length; i += 1) {
    console.log(numbers[i] / 2);
}
*/


/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 10, 35, 27];

let menor = numbers[0];
let posicaoMenor = 0;

for(let i = 1; i < numbers.length; i += 1) {
    if(numbers[i] < menor) {
        menor = numbers[i];
        posicaoMenor = i;
    } 
}

console.log("MENOR: " + menor);
console.log("POSICAO: " + posicaoMenor);
*/


/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 10, 35, 27];

let contImpares = 0;

for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 === 1) {
        contImpares = contImpares + 1;
    }
}

if(contImpares > 0) {
    console.log(contImpares);
} else {
    console.log("NENHUM VALOR ÍMPAR ENCONTRADO!");
}
*/

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}
*/


/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 10, 35, 27];

let maior = numbers[0];
let posicaoMaior = 0;

for(let i = 1; i < numbers.length; i += 1) {
    if(numbers[i] > maior) {
        maior = numbers[i];
        posicaoMaior = i;
    } 
}

console.log("MAIOR: " + maior);
console.log("POSICAO: " + posicaoMaior);
*/


/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
console.log("SOMA = " + sum);
console.log("ELEMENTOS: " + numbers.length);

let average = sum / numbers.length;

console.log("AVERAGE: " + average);

if(average > 20) {
    console.log("VALOR MAIOR QUE 20");
} else {
    console.log("VALOR MENOR OU IGUAL A 20");
}
*/


/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let sum = 0;

for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
console.log("SOMA = " + sum);
console.log("ELEMENTOS: " + numbers.length);

let average = sum / numbers.length;

console.log("AVERAGE: " + average);
*/


/*
let sum = 0;

for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
}
console.log(sum);



for(let sum of numbers) {
    sum = sum + numbers;
}
console.log(sum);



let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);

*/

/*
for(let number of numbers) {
    console.log(number);
}

console.log("------------------------------------------------");

for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}
*/

/*
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nome of names) {
  console.log(nome);
}
*/


/*
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]
*/

/*
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
*/

/*
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado:
//1
//2
//3
//4
//5
*/


/*
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
}
*/

/*
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}
*/

/*
let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
*/


/*
let numero = 9;

for(let i=1; i<=10; i+=1) {
    resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado);
   // console.log("");
}

*/


/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");

console.log(menu);
*/


/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);
*/





/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
*/