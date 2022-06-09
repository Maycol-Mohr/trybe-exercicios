

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));





/*
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
*/


/*
      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

      const maior = (frase) => {
          for(let i = 0; i < frase.length; i += 1) {
            if(frase[i] > frase[0]) {
              return frase[i];
            } else {
              return frase[0];
            }
          }
          return maior;
      }
      console.log(maior(longestWord));
*/
/*
      const longestWord = text => {
        let wordArray = text.split(' ');
        let maxLength = 0;
        let result = '';
    
        for (const word of wordArray) {
            if (word.length > maxLength) {
                maxLength = word.length;
                result = word;
            }
        }
    
        return result;
    }
    
    console.log(longestWord("Antonio2335 foi no banheiro e não sabemos o que aconteceu"));

*/





/*
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
*/
/*
const fatorial = (number) => {
  let fatorial = 1;
  for(let i = 2; i <= number; i +=1) {
    fatorial = fatorial * i;
  }
  return fatorial;
}

console.log(fatorial(5));
*/

/*
const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5));
*/
/*
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);
*/

/*
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
*/
/*
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);
*/

/*
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.
      const ordenar = (oddsAndEvens) => {
        let menor = oddsAndEvens[0]; 
        for(let i = 1; i < oddsAndEvens.length -1; i += 1) {
            if(oddsAndEvens[i] < menor) {
              oddsAndEvens[i] = menor;
            }
        }
      }

      console.log(oddsAndEvens); // será necessário alterar essa linha 😉
*/
/*
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      const sortOddsAndEvens = () => {
        oddsAndEvens[0] = 2;
        oddsAndEvens[1] = 3;
        oddsAndEvens[2] = 4;
        oddsAndEvens[3] = 7;
        oddsAndEvens[4] = 10;
        oddsAndEvens[5] = 13;

        return oddsAndEvens;
      }

      const sortedArray = sortOddsAndEvens();
      console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);
*/

/*
       function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
*/
/*
      const testingScope = escopo => { 
        if (escopo === true) { 
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
          console.log(ifScope);
        } else {
          const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
      }
    
      testingScope(false);
*/

    











/* Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
let fruit = 'maçãm';
  console.log(checkIfElse(fruit));
  */
 /*
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha`
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
    let fruit = 'banana';
checkTernary(console.log(fruit));
*/



  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!










/* Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };

  console.log(checkIfElse(25));
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  
  console.log(checkIfElse(25));
*/

















// A sintaxe básica do operador ternário é muito simples:
//`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
//const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
//console.log(trueExpression); // isso é verdade

//const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
//console.log(falseExpression); // isso é mentira









/*
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
*/


/*
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));
*/


/*
const printName = () => 'Lucas';
console.log(printName());
*/


/*
const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());
*/



/*
const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());
*/



// Com o template literals
//console.log(`Primeira linha;
//Segunda linha;
//Terceira linha;`
//);

// Sem o template literals:
//console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');




/*
const myName = 'Isabella';
console.log(`Welcome ${myName}!`);
*/



/*
const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');
*/
/*
var age;

console.log(age); // undefined

age = 20;
*/
/*
var age;

age = 20;

console.log(age); // 20
*/

/*
age = 20;

var age;

console.log(age); // 20
*/


/*
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
technologies.push('Maycol');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
*/




/*
const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }
*/
/*
const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition
*/


/*
const userName = 'Isabella';
const userName = 'Lucas';
console.log(userName); // Resultado: Lucas
*/




/*
if (true) {
    // inicio do escopo do if
    const userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20
*/



/*
function userInfo() {
    const userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    
  }
  userInfo();


  console.log(userEmail);
  */