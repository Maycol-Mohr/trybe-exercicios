const salarioBruto = 3000;


if(salarioBruto<= 1556.94) {
  inss = salarioBruto * 0.08;
} else if(salarioBruto>=1556.95 && salarioBruto <=2594.92) {
  inss = salarioBruto * 0.09;
} else if(salarioBruto>=2594.93 && salarioBruto<=5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = salarioBruto - 570.88;
}
console.log("INSS = " + inss);



if(salarioBruto>=1903.98 && salarioBruto<=2826.65) {
  ir = salarioBruto * 0.075;
} else if (salarioBruto>2826.66 && salarioBruto<=3751.05) {
  ir = salarioBruto * 0.15;
} else if(salarioBruto>=3751.06 && salarioBruto<=4664.68) {
  ir = salarioBruto * 0.225;
} else {
  ir = salarioBruto * 0.275;
}

console.log("IR = " + ir);

salarioLiquido = salarioBruto - inss - ir;

console.log("TOTAL GERAL = " + salarioLiquido);




let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));



 













/*
const custoProduto = 100;
const valorVenda = 200;


lucroTotal = (valorVenda - (custoProduto * 1.20)) * 1000;
console.log("LUCRO TOTAL = " + lucroTotal);
*/

/*
const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
*/

/*
const a = 56;
const b = 98;
const c = 770;

if(a%2===1 || b%2===1 || c%2===1) {
console.log("true");
} else {
console.log("false");
}
*/

/*
const a = 5;
const b = 9;
const c = 7;

if(a%2===0 || b%2===0 || c%2===0) {
console.log("true");
} else {
console.log("false");
}
*/

/*
const nota = 21;

if(nota>=90) {
console.log("A");
} else if(nota>=80) {
  console.log("B");
} else if(nota>=70) {
  console.log("C");
} else if(nota>=60) {
  console.log("D");
} else if(nota>=50) {
  console.log("E");
} else {
  console.log("F");
}
*/

/*
let pecaXadrez = "torre";

switch(pecaXadrez) {
  case "rei":
  console.log("uma casa - horizontal - vertical - diagonal!");
  break;
  
  case "dama":
  console.log("move-se em linha reta nas fileiras, colunas e diagonais!");
  break;

  case "torre":
  console.log("movem-se em linha reta!!");
  break;

  case "bispo":
  console.log("diagonais!!!");
  break;

  case "cavalo":
  console.log("movem-seem formato L!");
  break;

  case "peao":
  console.log("move uma casa!");
  break;
  
  default: 
  console.log("PECA INVÁLIDA!!");
  break;
}

*/

/*
const a = 20;
const b = 20;
const c = 140;

if(a<0 || b<0 || c<0) {
console.log("MENSAGEM DE ERRO - ANGULO INVÁLIDO!!!");
} else if(a+b+c === 180) {
console.log("true");
} else {
console.log("false");
}
*/


/*
const valor = 0;

if(valor>0) {
console.log("POSITIVE: " + valor);
} else if (valor<0) {
  console.log("NEGATIVE: " + valor);
} else {
  console.log("ZERO: " + valor);
}
*/


/*
const a = 376;
const b = 44;
const c = 777;

if(a>b && a>c) {
  console.log("MAIOR É A: " + a);
} else if (b>c) {
  console.log("MAIOR É B: " + b);
} else {
  console.log("MAIOR É C: " + c);
}
*/


/*
const a = 4;
const b = 29;

if(a>b) {
console.log("MAIOR É A: " + a);
} else {
  console.log("MAIOR É B: " + b);
}
*/


/*
const a = 7;
const b = 3;

adicao = a + b;
subtracao = a-b;
multiplicacao = a*b;
divisao = a / b;
potencia = b ** 2;
model = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(potencia);
console.log(model);
*/

/*
let estadoCandidata = "apto";

switch(estadoCandidata) {
  case "aprovada":
  console.log("Eu fui aprovada!!");
  break;
  
  case "lista":
  console.log("Eu estou na lista de espera!!");
  break;

  case "reprovada":
  console.log("Eu fui reprovado!!");
  break;
  
  default: 
  console.log("Nao se aplica aqui!!");
  break;
}

*/

/*
console.log(!(2 + 2) === 4);
*/


/*
let weekDay = "segunda-feira";

if(weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}
*/


/*
const currentHour = 18.01;

let message = "";

if(currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir" ;
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >=14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"; 
} else if(currentHour >=11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else {
  message = "Hmmm, cheiro de café recém passado"; 
}

console.log(message);
*/


/*
const nota = 29;

if(nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera!");
} else {
console.log("Você foi reprovada(o)!");
}
*/

/*
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"

*/


/*
SEGUNDO EXERCICIO
const base = 5;
let height = 8;

const area = base * height;
console.log(area);


const perimeter = base + base + height + height;

console.log(perimeter);
/*


/*
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);


//console.log(patienAge);

patientId = "50";
console.log(typeof patientId);
*/


/*
let movie = "Avengers";
let score = 10.89;
let isValid = true;
let name;
let color = null;

let salary = 3500;

console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);
console.log(3 ** 3);


salary++;

console.log(salary);

salary--;

console.log(salary);
*/


/*
PRIMEIROS EXERCICIOS DO 4.1
const myName = "Maycol";

const birthCity = "Santo Amaro da Imperatriz";

let birthYear = 1977;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

birthCity = "Florianópolis";

console.log(birthCity);
*/
/*
A mensagem de erro apareceu porque nao podemos alterar o valor de uma Constante(Const). De uma let sim podemos alterar o valor.
*/