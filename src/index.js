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
app.listen(3000);