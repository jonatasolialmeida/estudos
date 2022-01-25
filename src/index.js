const express = require("express");

const app = express();

const myArray = [];
// Altere apenas o código abaixo desta linha
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

const arr = [10, 9, 8, 7, 6, 5, 3, 2];

for (let i = 0; i < 6; i++) {
   console.log(arr[i]);
}

console.log(arr.length);

console.log(` 
*******************
`)

const arr2 = [10, 9, 8, 7, 6];

for (let i = 0; i < arr2.length; i++) {
   console.log(arr2[i]);
}

console.log(` 
*******************
`)

const myArr2 = [2, 3, 4, 5, 6];

// Altere apenas o código abaixo desta linha
let total= 0;
for (let i = 0; i < myArr2.length; i++) {
  total += myArr2[i]
   console.log(total);
}


// Aninhar laços for

const arrFor = [
   [1, 2], [3, 4], [5, 6]
 ];

 for (let i = 0; i < arrFor.length; i++) {
    for(let j = 0; j < arrFor[i].length; j++){
       console.log(arrFor[i][j]);
    }
 }

//  Modifique a função multiplyAll para que retorne o produto de todos os números nos sub-arrays de arr.

function multiplyAll(arr) {
   let product = 1;
   // Altere apenas o código abaixo desta linha
 for (let i = 0; i < arr.length; i++){
   for (let j = 0; j < arr[i].length; j++){
     product *= arr[i][j];
   }
 }
   // Altere apenas o código acima desta linha
   return product;
 }
 
 console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//  Do While

/**
 * Altere o laço while no código para um laço do...while para que o laço adicione apenas o número 10 no myArray e i será igual a 11 quando seu código terminar de rodar.
 */

 const myArray6 = [];
 let ii = 10;
 
 // Altere apenas o código abaixo desta linha
 do {
  myArray6.push(ii);
   ii++;
 } while (ii < 10);

console.log(myArray6);

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([3,5,7], 3));

// Substituir laços usando recursão,

function multiply1(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply1(arr, n - 1) * arr[n - 1];
  }
}

// Escreva uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de um array arr

// SOLUÇAO

function sum(arr, n) {
  // Altere apenas o código abaixo desta linha
if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Altere apenas o código acima desta linha
}

console.log(sum([2,3,4,5],3));

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

console.log(` 
*******************
  Pesquisar Perfil
*******************
`)
console.log(contacts.length);

// RESOLUÇAO

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));

// Gerar números inteiros aleatórios com JavaScript

function randomWholeNum() {

  // Altere apenas o código abaixo desta linha
// Essa técnica nos dará um número inteiro entre 0 e 19
  return Math.floor(Math.random() * 20);
}

console.log(randomWholeNum());

// TERNARIO

/**
 * 
 *  operador condicional, também chamado de operador ternário, pode ser usado como uma expressão if-else de uma linha.

A sintaxe é a ? b : c, onde a é a condição, b é o código executado quando a condição retorna true e c é o código executado quando a condição retorna false.

A função a seguir usa a instrução if/else para verificar uma condição:
 */

function findGreaterA(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}


function findGreaterB(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}


function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
 }
 
 console.log(` 
*******************
TERNARIO
*******************
`)
 console.log(checkEqual(1, 2));

//  Ternario aninhado

function checkSign(num) {
  return (num === 0) ? "zero"
  : (num < 0) ? "negative"
  : "positive";
}

console.log(checkSign(10));

// REcursão para criarcontagem regressiva

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

console.log(countdown(15));

// Usar recursão para criar um intervalo de números

/**
 * Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo valor.
 */

 function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};

console.log(rangeOfNumbers(1,7));

app.listen(3333);