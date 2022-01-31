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

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Altere apenas o código abaixo desta linha
    const failureItems = [];
      for (let i = 0; i < arr.length; i++){
         failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
      }
    // Altere apenas o código acima desta linha
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);

  /**
   * Escrever declarações literais de objetos concisas usando a forma abreviada de propriedade de objeto

ES6 adiciona alguns suportes legais para facilmente definir literais de objetos.

Considere o seguinte código:
   */

/**
 * const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

 */

const getMousePosition = (x, y) => ({ x, y });

/**
 * Use a abreviação de propriedade de objeto com literais de objeto para criar e retornar um objeto com as propriedades name, age e gender.
 */

// RESOLUÇÃO

const createPerson = (name, age, gender) => {
    // Altere apenas o código abaixo desta linha
    return {
      name,
      age,
      gender
    };
    // Altere apenas o código acima desta linha
  };

  // Escrever funções declarativas concisas com ES6

//   const person1 = {
//     name1: "Taylor",
//     sayHello: function() {
//       return `Hello! My name is ${this.name1}.`;
//     }
//   };

// Com ES6, você pode remover a palavra-chave function e dois pontos ao definir funções em objetos. Aqui está um exemplo dessa sintaxe:

const person1 = {
    name1: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name1}.`;
    }
  };
  
//   Usar a sintaxe de classe para criar uma função construtora

/**
 * ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class.

Deve ser notado que a sintaxe class é apenas sintaxe, um syntatical sugar. JavaScript ainda não oferece suporte completo ao paradigma orientado a objetos, ao contrário do que acontece em linguagens como Java, Python, Ruby, etc.

No ES5, geralmente definimos uma função construtora (constructor function) e usamos a palavra-chave new para instanciar um objeto.
 */

// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
//   var zeus = new SpaceShuttle('Jupiter');
  
// A sintaxe class simplesmente substitui a criação da função construtora (constructor):

class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');

  /**
   * 

Use a palavra-chave class e declare o método constructor para criar a classe Vegetable.

A classe Vegetable permite criar um objeto vegetal com a propriedade name que é passada ao constructor.

   */

// Altere apenas o código abaixo desta linha
class Vegetable {
    constructor(name){
      this.name = name;
    }
    eat() {
        return ` Eu como ${this.name}`
    }
  }
  // Altere apenas o código acima desta linha
  console.log(`
  *******************
  *******************
  `)
  const vegetable = new Vegetable('Cenoura');
  console.log(vegetable.eat()); // Deve exibir "Eu como cenoura"'
  
  console.log(`
  *******************
  *******************
  `)
  
  class Person {
      constructor(name){
          this.name = name;
    }

    walk(){
        return `${this.name} está caminhando!`
    }

    eat(){
        return `${this.name} está comendo!`
    }

    run(){
        return `${this.name} está correndo!`
    }
}

const nana = new Person("Nana");
console.log(nana.name);
nana.name = "NANANA";
console.log(nana.name);
console.log(nana.run());

const felipe = new Person("Felipe");
console.log(felipe.walk());

const john = new Person("John");
console.log(john.eat());


console.log(`
*******************
*******************
`)

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);

  console.log(`
  *******************
  *******************
  `)

// Exportando funções

// const uppercaseString = (string) => {
//     return string.toUpperCase();
//   }
  
//   export const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }
  
//   export {uppercaseString};

//   importando tudo de um arquivo

// import * as stringFunctions from "./string_functions.js";

// importando funções especificas

// import { lowercaseString, uppercaseString } from "./string_functions.js"

/**
 * Exportar apenas um valor com export default

Na lição de export você aprendeu sobre a sintaxe que chamamos de exportação nomeada. Naquela lição você exportou múltiplas funções e variáveis que ficaram disponíveis para utilização em outros arquivos.

Há outra sintaxe para export que você precisa saber, conhecida como exportação padrão. Você usará essa sintaxe quando apenas um valor estiver sendo exportado de um arquivo ou módulo. Essa sintaxe também é usada para exportar um valor substituto caso o valor original não possa ser exportado.

Abaixo estão exemplos utilizando a sintaxe export default:
 */

// export default function add(x, y) {
//     return x + y;
//   }
  
//   export default function (x, y) {
//     return x + y;
//   }

  /**
   * O primeiro exemplo é uma função nomeada e o segundo é uma função anônima.

A sintaxe export default é usada para exportar um único valor de um arquivo ou módulo. Tenha em mente que você não pode usar o export default com var, let ou const
   */

/**
 * Concluir uma promessa com resolve e reject

Uma promessa possui três estados: pendente (pending), cumprida (fulfilled) e rejeitada (rejected). A promessa que você criou no desafio anterior está presa no estado pending para sempre porque você não adicionou uma forma de concluir a promessa. Os parâmetros resolve e reject passados para o argumento da promessa servem para este propósito. resolve é utilizado quando a promessa for bem-sucedida, enquanto reject é utilizado quando ela falhar. Ambos são métodos que recebem apenas um argumento, como no exemplo abaixo.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

O exemplo acima usa strings como argumento desses métodos, mas você pode passar qualquer outro tipo de dado. Geralmente, é passado um objeto para esses métodos. Assim você pode acessar as propriedades deste objeto e usá-las em seu site ou em qualquer outro lugar.

 */

/**
 * Adapte a promessa para ambas as situações de sucesso e fracasso. Se responseFromServer for true, chame o método resolve para completar a promessa com sucesso. Passe a string We got the data como argumento para o método resolve. Se responseFromServer for false, passe a string Data not received como argumento para o método reject.
 */

//  const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer representa uma resposta de um servidor
//     let responseFromServer;
  
//     if(responseFromServer) {
//       resolve("We got the data")// Altere esta linha
//     } else {  
//       reject("Data not received")// Altere esta linha
//     }
//   });

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

  makeServerRequest.catch(error => {
    console.log(error);
  });
  
  console.log(`
  *******************
  *******************
  `)
console.log("Rodando")

console.log(`
*******************
*******************
`)
console.log("Rodando DE VERDADE")
app.listen(3030);