const express = require("express");

const app = express();

// construção da função 
function reusableFunction() {
    console.log("Hi World")
  }
  
//   chamada da função
  reusableFunction();

//   funçoes com parametros
function testFun(param1, param2) {
    console.log(param1, param2);
  }

//   na chamada da função passo os arumentos
testFun("Argumento 1", 2);

function testFun2(param1, param2) {
    console.log(param1 + param2);
  }

testFun2(5,6)

// Retornar um valor de uma função com return

function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);

  console.log(answer);

//  Diferença entre escop local e global
//  É possível ter as variáveis local e global com o mesmo nome. Quando você faz isso, a variável local tem precedência sobre a variável global.

const outerWear = "T-Shirt";

function myOutfit() {
  // Altere apenas o código abaixo desta linha
const outerWear ="sweater";
  // Altere apenas o código acima desta linha
  console.log(outerWear);
}

myOutfit();

// valor undefined retornado de uma função
// Uma função pode incluir a instrução return mas ela não precisa fazer isso. No caso de a função não ter uma instrução return, quando você a chamar, a função processa o código interno, mas o valor retornado é undefined.

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

console.log(addThree());
console.log(addFive());

//  atribuindo o retorno de uma função em uma variável

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Altere apenas o código abaixo desta linha
processed = processArg(7);

console.log(processed);

app.listen(3333);