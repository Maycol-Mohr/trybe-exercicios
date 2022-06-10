

 



/*

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({}, person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
console.log(lastName);
*/
/*
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

console.log(cloneObj);
*/
/*
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }


clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
*/

/*
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)
*/
/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */



// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

//Object.assign(destino, objeto1);
//Object.assign(destino, objeto1, objeto2);
//Object.assign(destino, objeto1, objeto2, objeto3, objeto4);



/*
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};


const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
*/

//const pairKeyValue = Object.entries(países);
//console.log(pairKeyValue);










/*
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));
*/
// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]





/*
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);// melhor assim
*/
// Sem Object.values
//console.log(listSkillsValuesWithFor(student));

// Com Object.values
//console.log(listSkillsValuesWithValues(student));




/*
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//for (const property in coolestTvShow) {
 // console.log(coolestTvShow[property]);
//}

console.log(Object.values(coolestTvShow));
*/
// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6



/*
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
*/





/*
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
*/

//for (const property in coolestTvShow) {
  //console.log(property);
//}

//console.log(Object.keys(coolestTvShow));



/*
const meuCarro = {
  fabricacao: "Ford",
  modelo: "Fiesta",
};

meuCarro.cor = 'azul';

const carro = (obj, key, value) => {
  obj[key] = value;
  return obj;
};
console.log(carro(meuCarro, "ano", "2020"));
*/





/*
const country = (x, y, z) => {
    x = new Object();
    x.y = 'z';

    return country;
}

console.log(country(pais, nome, 'Brasil'));
*/
/*
const carro = (x, y, z) => {
let x = new Object();
x.y = 'z';
return carro;
}

console.log(carro(meuCarro, fabricacao, 'Ford'));
*/
//meuCarro.modelo = "Mustang";
//meuCarro.ano = 1969;


/*
const customer = {
    firstName: 'Roberto',
     age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);
*/

/*
const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  customer1.city = 'Madrid';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);
*/


/*
const customer = {
    firstName: 'Roberto',
    lastName: 'Faria', // Propriedade adicionada.
    age: 22,
    job: 'Teacher',
  };
  */
/*
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
*/
/*
  console.log(customer.firstName);
  console.log(customer.lastName);
  console.log(customer.age);
  console.log(customer.job);
*/

/*
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3'));
*/
/*
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));

*/








/*
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));
*/




/*
const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23
*/

/*
const sum = (value1, value2) => value1 + value2;

console.log(sum(3, 6));
*/