
/*
const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('Clicou no botão!');
});
*/


/*
const wakeUp = () => 'Acordando!!';

const tomarCafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const resultado = callback();
    console.log(resultado);
}

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(tomarCafe);
doingThings(dormir);
*/
 


/*
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());
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
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
  if (number % 2 !== 0) {
    console.log(number, 'is odd');
  }
});
*/
/*
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);
*/



/*
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
  button.innerHTML = 'Maycol aqui!!'
};

button.addEventListener('click', registerUser);
*/

/*
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));
*/
/*
const sayHello = () => {
  return 'hello trybers';
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);
*/


/*
function sum (number1, number2) {
  return number1 + number2;
}
*/
/*
const sum = (number1, number2) => {
  return number1 + number2;
};

const sumVariable = sum;

console.log(sumVariable(12, 5));
//  [Function: sum]
*/


/*

function greeting(name) {
    alert('Olá ' + name);
  }
  
  function processUserInput(callback) {
    let name = prompt('Por favor insira seu nome.');
    callback(name);
  }
  
  console.log(processUserInput(greeting));
  */



/*
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = (dragon) => {
    const minDmg = 15;
    const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
    return dragonDmg;
  };

  //console.log(dragonAttack(dragonDmg));

  const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = minDmg * warrior.weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    return warriorDamage;
  };

  const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };

  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);

  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);

  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);

  const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());
*/

/*
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'D'];
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


/*
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
*/
 


/*
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));
*/
/*
const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
*/


/*
//maneira trybe
// Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const breakfast = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleep = () => 'Partiu dormir!!';

// Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
// para que imprima no console o resultado da execução das funções que você
// criou nos exemplos anteriores.
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
*/
//minha maneira
/*
const wakeUp = () => {
    console.log('Acordando!!');
  };

  const tomarCafe = () => {
    console.log('Bora tomar café!!');
  };

  const dormir = () => {
    console.log('Partiu dormir!!');
  };

  // Ao chamar a função doingThings:
  //const calculator = (func) => func(10, 5);
  //console.log(calculator(sum));
const doingThings = (func) => func(); 


doingThings(wakeUp);
doingThings(tomarCafe);
doingThings(dormir);
*/
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!






/*
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mult = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10, 5);

//console.log(sum(10, 5));
//console.log(sub(10, 5));

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(mult));
console.log(calculator(div));
*/

/*
const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());
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
const repeat = (number, action) => {
    for (let i = 0; i <= number; i += 1) {
      action(i);
    }
  };
  
  repeat(6, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });
*/


/*
const repeat = (number, action) => {
    for (let i = 0; i <= number; i += 1) {
      action(i);
    }
  };
  
  repeat(5, console.log);
*/
/*
const button = document.querySelector('#signup-button');

const registerUser = (event) => {
  console.log('Registrado com sucesso!');
  //button.innerHTML = 'Maycol'
  //console.log(event.target);
  //console.log(event.value);
};

button.addEventListener('click', registerUser);
*/

/*
const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));
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
function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]

  const sum = (number1, number2) => {
    return number1 + number2;
  };
  */