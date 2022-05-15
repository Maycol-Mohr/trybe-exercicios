/*
let n = 5;

let simbolo = "*";
let vazio = "";

for(let i = 0; i < n; i += 1) {
  vazio = vazio + simbolo;
}

for(let i = 0; i < n; i += 1) {
  console.log(vazio);
}
*/
/*
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
*/


/*
let numero = 31;

let = divisor = 1;

for(let verificado = 2; verificado <= numero; verificado += 1) {
  if(numero % verificado === 0) {
    divisor += 1;
  }
}

if(divisor === 2) {
  console.log("O número " + numero + " é primo.");
} else {
  console.log("O número " + numero + " nâo é primo.");
}
*/




































/*
let divisors = 1;
let numeroVerificar = 31;

for (let number = 2; number <= numeroVerificar; number += 1) {
  if (numeroVerificar % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numeroVerificar + ' é primo');
else console.log(numeroVerificar + ' não é primo');
*/


/*
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
*/


/*
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
*/


/*
let n = 5;
let symbol = '*';
let vazio = '';
let posicaoVazio = n;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j < posicaoVazio) {
      vazio = vazio + ' ';
    } else {
      vazio = vazio + symbol;
    }
  }
  console.log(vazio);
  vazio = '';
  posicaoVazio -= 1;
};
*/

/*
let size = 5
let simbolo = "*";
let vazio = "";


for(let i = 0; i <= size; i += 1) {
        console.log(vazio);
        vazio = vazio + simbolo;
}
*/

/*
let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};
*/

/*
n = 5

let simbolo = "*";
let vazio = "";

for(let i = 0; i < n; i += 1) {
    vazio = vazio + simbolo;
}

for(let i = 0; i < n; i += 1) {
        console.log(vazio);
}
*/



/*
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

*/


/*
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
*/

/*
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];

let menor = array[0];


for(let i = 1; i < array.length; i += 1) {
    if(array[i].length > maior.length) {
        maior = array[i];        
    }
}

console.log("MAIOR: " + maior);



for(let i = 1; i < array.length; i += 1) {
    if(array[i].length < menor.length) {
        menor = array[i];
    }
}


console.log("MENOR: " + menor);
*/


/*
let word = 'tryber';
let contrario = "";
 
for(let i = 0; i < word.length; i += 1)  {
    contrario += word[word.length -1 - i]
}

console.log(contrario);

ou

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);



*/

/*
let n = 5;

for(let i = n; i >=0; i -= 1) {
    console.log(i);
}
*/



/*
let n = 10;

let fatorial = 1;

for(let i = 1; i <= n; i += 1) {
    fatorial = fatorial * i;  
}

console.log(fatorial);
*/