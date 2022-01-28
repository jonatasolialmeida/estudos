const express = require("express");

const app = express();


const s = [ 5, 6, 7];
console.log(s);

s[2] = 10;
console.log(s);

let remove = s.pop();
s.unshift(remove);
console.log(s)


// Impedir a modificação de um objeto
// Object.freeze()

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 

//   Criar funções anônimas com arrow functions
// Exemplo de uma funçao
/**
 * const myFunc = function() {
  const myVar = "value";
  return myVar;
}

 */

// Exempo com arrow function
/**
 * const myFunc = () => {
  const myVar = "value";
  return myVar;
}

 */

// Quando a função executa uma linha de código e retorna apenas um valor

const myFunc = () => "value";
console.log(myFunc());

// Escrever arrow functions com parâmetros

const doubler = (item) => item * 2;
console.log(doubler(4));

// Se uma arrow function tiver um único parâmetro, os parênteses envolvendo o parâmetro podem ser omitidos.

const doubler2 = item => item * 2;
console.log(doubler2(6));

// É possível passar mais de um argumento para uma arrow function.

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));

const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Definir um valor padrão para o parâmetro de uma função

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

//   Parametro rest com parametros de função

/**
 * Modifique a função sum usando o parâmetro rest de tal forma que a função sum seja capaz de receber qualquer número de argumentos e retornar a soma deles.
 */

/**
 * const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
 */

// RESOLUÇÃO
const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(2,3,4,5,8,7));

// Copie todo o conteúdo de arr1 em outro array arr2 usando o operador spread.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Altere esta linha

console.log(arr2);

// Usar atribuição de desestruturação para extrair valores de objetos

const user = { name: 'John Doe', age: 34 };

const { name, age } = user;

console.log(`${name} tem ${age} anos de idade`);

//  outro exemplo

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Altere apenas o código abaixo desta linha
  
  const { today, tomorrow } = HIGH_TEMPERATURES;

  console.log(today, tomorrow);

//   Usar atribuição de desestruturação para atribuir variáveis de objetos

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday, highTomorrow);

// Usar atribuição de desestruturação para atribuir variáveis de objetos aninhados

const user2 = {
    johnDoe: { 
      age2: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };
  
//   desestruturação
  const { johnDoe: { age2, email }} = user2;

//   E aqui está como você pode atribuir o valor de uma propriedade de um objeto para variáveis com nomes diferentes:

const { johnDoe: { age2: userAge, email: userEmail }} = user2;

console.log(age2, email);
console.log(userAge, userEmail);

// Substitua as duas atribuições com uma atribuição de desestruturação equivalente. Ainda deve ser atribuído às variáveis lowToday e highToday1 os valores de today.low e today.high do objeto LOCAL_FORECAST.

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Altere apenas o código abaixo desta linha
  
  const { today: {low: lowToday, high: highToday1}} = LOCAL_FORECAST;

  console.log(lowToday, highToday1);

//   Usar atribuição de desestruturação para atribuir variáveis a partir de arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

// as tres virgulas 3 valores e será igual a 5
const [d, e,,, f] = [1, 2, 3, 4, 5, 6];
console.log(d, e, f);

/**
 * Usar atribuição de desestruturação com o parâmetro rest para reatribuir elementos de array
 */

console.log(`
*******************
*******************
`);
const [aa, bb, cc, dd, ee, ...arrr] = [1, 2, 3, 4, 5, 7, 9, 10, 15];

//  consigo pegar os elementos que estão desestruturdos e colocalos em uma array
console.log([aa, bb]);

//  também consigo reestruturálos em um novo array
const newArr = [cc, dd, ee];
console.log(newArr);
console.log(arrr);

console.log(`
*******************
*******************
`);
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Altere apenas o código abaixo desta linha
    const [,, ...arr] = list; // Altere esta linha
    // Altere apenas o código acima desta linha
    return arr;
}
const arrrr = removeFirstTwo(source);
console.log(arrrr);

console.log(`
*******************
*******************
`);

// Usar atribuição de desestruturação para passar um objeto como parâmetro de uma função

/**
 * const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}

 */

// OU

/**
 * const profileUpdate = ({ name, age, nationality, location }) => {

}

 */



app.listen(3000);