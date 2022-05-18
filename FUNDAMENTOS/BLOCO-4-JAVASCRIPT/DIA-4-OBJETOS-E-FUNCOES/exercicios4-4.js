


/*
const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];



function arrayOfNumbers(vector) {
  const novoArray = [];
  for(let i = 0; i < vector.length; i += 1) {
    const numbers = vector[i];
    for(let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
    const current = numbers[indexSub];
      if(current % 2 === 0) {
      novoArray.push(current);
      }
    }
  }
  return novoArray;
}

console.log(arrayOfNumbers(vector));
*/


/*
function arrayOfNumbers(vector) {
  const result = [];
  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];
      if ((current % 2) === 0) {
        result.push(current);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));
*/


//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop
// for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.











/*
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
*/

/*
let primeiroMorador = moradores.blocoUm[moradores.blocoUm.length - 2];


console.log("O morador do bloco 1 de nome " + primeiroMorador.nome + " " + primeiroMorador.sobrenome + " mora no " + primeiroMorador.andar + "º andar, apartamento " + primeiroMorador.apartamento + ".");

console.log("O morador do bloco 1 de nome " + primeiroMorador["nome"] + " " + primeiroMorador["sobrenome"] + " mora no " + primeiroMorador["andar"] + "º andar, apartamento " + primeiroMorador["apartamento"] + ".");
*/


/*
for(let i = 0; i < moradores.blocoUm.length; i += 1) {
  console.log(moradores.blocoUm[i].nome + " " + moradores.blocoUm[i].sobrenome);
}

for(let i = 0; i < moradores.blocoDois.length; i += 1) {
  console.log(moradores.blocoDois[i].nome + " " + moradores.blocoDois[i].sobrenome);
}
*/

/*
let ultimoMorador = moradores.blocoDois[moradores.blocoDois.length - 1];


console.log("O morador do bloco 2 de nome " + ultimoMorador.nome + " " + ultimoMorador.sobrenome + " mora no " + ultimoMorador.andar + "º andar, apartamento " + ultimoMorador.apartamento + ".");

console.log("O morador do bloco 2 de nome " + ultimoMorador["nome"] + " " + ultimoMorador["sobrenome"] + " mora no " + ultimoMorador["andar"] + "º andar, apartamento " + ultimoMorador["apartamento"] + ".");
*/


/*
Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log
 no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
*/
















//Duas formas de resolver o exercício
/*
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false
*/



/*
function somatorio(numero) {
  let sum = 0;
  for(let i = 1; i <= numero; i += 1) {
    sum = sum + i;
  }
  return sum;
}


console.log(somatorio(5));
*/

/*
function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5)); //15
*/


/*
Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.

*/






//Duas formas de resolver o exercício
/*
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2
*/


/*
- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/







/*
function maior(nomes) {
  let maiorNome = nomes[0];
  for(let maior in nomes) {
    if(maiorNome.length < nomes[maior].length) {
      maiorNome = nomes[maior];
    }
  }
  return maiorNome;
}


console.log(maior(['José', 'Lucassantos', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
*/
/*
function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda
*/


/*
- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/

/*
function menor(numeros) {
  let indiceMenor = 0;
  for(let indice in numeros) {
    if(numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(menor([2, 4, 6, 7, 10, 0, -3, -4]));
*/



/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/

/*
function maior(numeros) {
  let indiceMaior = 0;
  for(let indice in numeros) {
    if(numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(maior([2, 3, 6, 7, 10, 1]));
*/

/*
function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4
*/


/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/


/*
function isPalindromo(word) {
  let reverse = word.split('').reverse().join('');
  if(reverse === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindromo('arara')); //true
console.log(isPalindromo('desenvolvimento')); //false
*/

/*
function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}
*/

/*
function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
*/


//console.log(verificaPalindrome('arara')); //true
//console.log(verificaPalindrome('desenvolvimento')); //false



/*
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);
*/

















/*
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
     autor: 'JK Rowling',
     editora: 'Rocco',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor["livrosFavoritos"][0]["titulo"]);

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[1].titulo);
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor["livrosFavoritos"][1]["titulo"]);

/*
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);
*/
//console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");

// Duas formas de se resolver
//console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

//console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');


//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".







/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
*/


/*
6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um 
console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
*/


/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "Sim"
};


let novo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

console.log(info.personagem + " e " + novo.personagem);
console.log(info.origem + " e " + novo.origem);
console.log(info.nota + " e " + novo.nota);


if(info.recorrente === novo.recorrente) {
  console.log("AMBOS RECORRENTES");
} else {
  console.log("NAO SAO RECORRENTES");
}




console.log("Bem-vinda, " + info.personagem);
console.log("Bem-vinda, " + info["personagem"]);

info['recorrente'] = 'Sim';
console.log(info.recorrente);

for(let key in info) {
  console.log(key);
}

for(let value in info) {
  console.log(info[value]);
}

//Duas formas de resolver o exercício
console.log('Bem-vinda, '+ info.personagem);

console.log('Bem-vinda, '+ info['personagem']);
*/
 

/*
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

/*
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 7));

function subtrair(a, b) {
  return a - b;
}

console.log(subtrair(17, 7));

function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(2, 7));

function dividir(a, b) {
  return a / b;
}

console.log(dividir(9, 3));

function restoDivisao(a, b) {
  return a % b;
}

console.log(restoDivisao(9, 3));
*/

/*
function maior(a, b) {
  if(a > b) {
    return "O maior é: " + a;
  } else if (b > a) {
    return "O maior é: " + b;
  } else {
    return "Os valores sao iguaus";
  }
}

console.log(maior(9, 6));
*/
/*
function maior(a, b, c) {
  if(a > b && a > c) {
    return "O maior é: " + a;
  } else if (b > c) {
    return "O maior é: " + b;
  } else {
    return "O maior é: " + c;
  }
}

console.log(maior(5, 2, 2));
*/

/*
function retorne(numero) {
  if(numero > 0) {
    return "POSITIVE"
  } else if(numero < 0) {
    return "NEGATIVE";
  } else {
    return "ZERO";
  }
}

console.log(retorne(0));
console.log(retorne(11));
console.log(retorne(-2));
*/

/*
function triangulo(a, b, c) {
  if(a <= 0 || b <= 0 || c <= 0) {
    return "TRIÂNGULO INVÁLIDO!!!";
  } else if(a + b + c === 180) {
    return "TRUE";
  } else {
    return "FALSE";
  }
}

console.log(triangulo(0, 23, 55));
console.log(triangulo(70, 90, 0));
console.log(triangulo(50, 0, 130));
console.log(triangulo(50, 30, 100));
console.log(triangulo(100, 70, 9));
console.log(triangulo(160, 10, 10));
*/
/*

function saudacao(nome) {
  return "BOM DIA " + nome;
}

console.log(saudacao("maycol"));
console.log(saudacao("gugu"));
console.log(saudacao("zacarias"));
*/




/*
function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais
console.log(maiorNum(222,222));
console.log(maiorNum(1000,999));
console.log(maiorNum(399,398));
*/


/*
// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7
*/

/*
let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado



function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!
*/






/*
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo
bomDiaTryber("Marcelo");
*/


/*
let frutas = ["maca", "pera", "laranja"];

let index =2;

for(let i = 0; i < frutas.length; i += 1) {
  if(frutas[index]) {
    console.log(frutas[index]);
    console.log(typeof frutas[index]);
  } else {
    console.log("Elemento nao encontrado no array");
  }
}
*/


/*
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let key in names) {
  console.log("Olá " + names[key] + " !!!");
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
 
for(let key in car) {
  console.log(key + ": " + car[key]);
}
*/
 

/*
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;



let food2 = ['hamburguer', 'bife', 'acarajé'];
for (let value in food2) {
  console.log(value);
};
//resultado: 0, 1, 2;
*/


/*
let food2 = ['hamburguer', 'bife', 'acarajé'];
for (let value of food2) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;





let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;
*/



/*
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}
*/


/*
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
*/



/*
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
*/

/*
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    //bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
console.log("A jogadora " + player["name"] + " " + player["lastName"] + " tem " + player["age"] + " anos de idade.");

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018],

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro" + " e " + player.medals.silver + " medalhas de prata.");
console.log("A jogadora possui " + player["medals"]["golden"] + " medalhas de ouro" + " e " + player["medals"]["silver"] + " medalhas de prata.");
*/

/*
- Acesse a chave medals e faça um console.log no seguinte formato:
 "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
*/

/*
4 - Acesse a chave bestInTheWorld e faça um console.log 
no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
*/




/*
2 - Acesse as chaves name, lastName e age e concatene as suas informações para 
imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
*/











/*
let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey
*/


/*
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
*/


/*
let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4
*/

/*
let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    //diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo
*/


/*
let singer = {
    name: "Milton",
    //lastName : "Nascimento",
    "last-name": "Nascimento",
    nickName: "Bituka",
    age: 77,
    bestAlbuns: ["Travessia", "Clube da Esquina", "Minas"],
    bornInfo: {
        city: "Rio de Janeiro",
        state: "Rio de Janeiro",
    }
}

console.log("O cantor " + singer.name + " " + singer["last-name"] + " possui " + singer.age + " anos.");
console.log("O cantor " + singer["name"] + " " + singer["last-name"] + " possui " + singer["age"] + " anos.");
singer["fullName"] = singer.name + " " + singer.lastName;
console.log("O cantor " + singer.fullName + " nasceu no estado do " + singer.bornInfo.state);
*/


