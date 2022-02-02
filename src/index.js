const express = require("express");

const app = express();

console.log(`
**************************
**************************
`);


/**
 * Usar um array para armazenar uma coleção de dados

Abaixo está um exemplo da implementação mais simples de uma estrutura de dados array. Isso é conhecido como array unidimensional, significando que tem apenas 1 nível de profundidade, ou que não possui nenhum outro array aninhado dentro de si. Note que possui booleans, strings e numbers, entre outros tipos de dados do JavaScript válidos:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

A chamada a console.log exibe 7.

Todos os arrays possuem uma propriedade length, conforme mostrado acima, que pode ser muito facilmente acessado com a sintaxe Array.length. Uma implementação mais complexa de um array pode ser vista abaixo. Isso é conhecido como um array multidimensional, ou um array que contém outros arrays. Note que esse array também contém objetos JavaScript, os quais examinaremos bem de perto na próxima seção. Por agora, tudo que você precisa saber é que arrays também são capazes de armazenar objetos complexos.
 */

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

  console.log(complexArray);

console.log(`
**************************
**************************
`);

/**
 * Acessar o conteúdo de uma lista utilizando a notação de colchetes

A funcionalidade fundamental de qualquer estrutura de dados é, evidentemente, não só a capacidade de armazenar informação, como também a possibilidade de acessar esta informação quando necessário. Então, agora que aprendemos como criar um array, vamos começar a pensar em como podemos acessar as informações desse array.

Quando definimos um array simples como o que vemos abaixo, existem 3 itens nele:

let ourArray = ["a", "b", "c"];

Em um array, cada item do array possui um índice . Esse índice possui dois papéis: é a posição daquele item no array e como você o referencia. No entanto, é importante notar que arrays em JavaScript são indexados a partir do zero, o que significa que o primeiro elemento do array está, na verdade, na posição zero, e não na primeira. Para recuperar um elemento de um array, nós podemos ao final de um array adicionar um índice encapsulado com colchetes (por exemplo [0]), ou mais comumente, no final de uma variável que faz referência a um objeto array. Isso é conhecido como notação de colchetes. Por exemplo, se queremos recuperar o a de um array ourArray e atribuir a uma variável, nós podemos fazer isso com o código a seguir:

let ourVariable = ourArray[0];

Agora, ourVariable possui o valor de a.

Além de acessar o valor associado ao índice, você também pode definir um índice para um valor usando a mesma notação:

ourArray[1] = "not b anymore";

Usando a notação de colchetes, nós agora redefinimos o item no índice 1, alterando a string b, para not b anymore. Agora, ourArray é ["a", "not b anymore", "c"].

A fim de concluir esse desafio, defina a segunda posição (index 1) do myArray como qualquer coisa que deseje, exceto a letra b.

 */

// Resolução

let myArray = ["a", "b", "c", "d"];
// Altere apenas o código abaixo desta linha
myArray[1] = "batata";
// Altere apenas o código acima desta linha
console.log(myArray);

console.log(`
**************************
**************************
`);

/**
 * Adicionar itens em um array com push() e unshift()

O comprimento de um array, como os tipos de dados que pode conter, não são fixos. Arrays podem ser definidos com um comprimento de qualquer número de elementos e elementos podem ser adicionados e removidos com o passar do tempo. Em outras palavras, arrays são mutáveis. Nesse desafio, examinaremos dois métodos com os quais podemos modificar programaticamente um array: Array.push() e Array.unshift().

Ambos os métodos recebem 1 ou mais elementos como parâmetros e adicionam esses elementos ao array no qual o método está sendo chamado; o método push() adiciona elementos ao final do array, e unshift() adiciona ao início. Considere o seguinte:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');

romanNumerals teria os valores ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);

romanNumerals teria os valores ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Note que nós também podemos passar variáveis, as quais nos permitem uma flexibilidade ainda maior na modificação dinâmica dos dados de nosso array.

Definimos uma função, mixedNumbers, na qual estamos passando o array como um argumento. Modifique a função usando push() e unshift() para adicionar 'I', 2, 'three' no início do array e 7, 'VIII', 9 ao final para que o array retornado contenha a representação dos números de 1 a 9 em ordem.

 */

function mixedNumbers(arr) {
    // Altere apenas o código abaixo desta linha
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9)
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  console.log("Antes da função >>" + ['IV', 5, 'six']);
  console.log(mixedNumbers(['IV', 5, 'six']));

console.log(`
**************************
**************************
`);

/**
 * Remover itens de um array com pop() e shift()

Tanto push() e unshift() possuem métodos correspondentes que são quase opostos funcionais: pop() e shift(). Como você já pode ter adivinhado, em vez de adicionar, pop() remove um elemento do fim de um array, enquanto shift() remove um elemento do início. A diferença chave entre pop() e shift() e seus primos push() e unshift(), é que nenhum dos métodos recebe parâmetros. Cada um deles só permite que seja modificado um elemento por vez em um array.

Vamos dar uma olhada:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();

greetings teria o valor ['whats up?', 'hello'].

greetings.shift();

greetings teria o valor ['hello'].

Nós também podemos retornar o valor do elemento removido com qualquer método dessa forma:

let popped = greetings.pop();

greetings teria o valor [] e popped teria o valor hello.

Nós definimos uma função, popShift, a qual recebe um array como argumento e retorna um novo array. Modifique a função, usando pop() e shift(), para remover o primeiro e o último elemento do array passado como argumento, e atribua os valores removidos para suas variáveis correspondentes, para que o array retornado contenha seus valores.

 */

function popShift(arr) {
    let popped = arr.pop(); // Altere esta linha
    let shifted = arr.shift(); // Altere esta linha
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

console.log(`
**************************
**************************
`);

/**
 * Remover itens usando splice()

Pois bem. Aprendemos como remover elementos do início e do fim de arrays usando shift() e pop(), mas e se quisermos remover um elemento de algum lugar do meio? Ou remover mais de um elemento de uma vez? Bem, é aí que splice() pode ser útil. splice() nos permite fazer isso: remover qualquer número de elementos consecutivos de qualquer lugar no array.

splice pode receber 3 parâmetros, mas por agora, nós focaremos apenas nos 2 primeiros. Os dois primeiros parâmetros de splice() são inteiros que representam índices, ou posições, do array do qual o método splice() está sendo chamado. Lembre-se: arrays são indexados a zero. Então, para indicar o primeiro elemento do array, usaríamos 0. O primeiro parâmetro de splice() representa o índice no array do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem removidos. Por exemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

Aqui, nós removemos 2 elementos, começando com o terceiro elemento (no índice 2). array teria o valor ['today', 'was', 'great'].

splice() não apenas modifica o array do qual está sendo chamado, mas também retorna um novo array contendo os valores dos elementos removidos:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);

newArray tem o valor ['really', 'happy'].

Iniciamos um array arr. Use splice() para remover elementos do arr, para que apenas contenha elementos que somam ao valor de 10.

 */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Altere apenas o código abaixo desta linha
arr.splice(0,1);

// também posso passar o primeiro argumento somente, (O INDICE NESSE CASO) e ele removerá a partir daquele indice em diante
arr.splice(3,)
// Altere apenas o código acima desta linha
console.log(arr);

/**
 * TAMBÉM POSSO PASSAR O arr.length COMO SEGUNDO ARGUMENTO PARA REMOVER TUDO
 * 
 * EXEMPLO
 * 
 * const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Altere apenas o código abaixo desta linha
arr.splice(0,arr.length);
// arr.splice(3,)
// Altere apenas o código acima desta linha
console.log(arr);
 */

console.log(`
**************************
**************************
`);

/**
 * Adicionar itens usando splice()

Você se lembra de quando mencionamos no último desafio que splice() pode receber até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto por um ou mais elementos, para adicionar algo ao array. Isso pode ser incrivelmente útil para mudar rapidamente de um elemento, ou um conjunto de elementos, para outro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

A segunda ocorrência de 12 é removida, e adicionamos 13 e 14 no mesmo índice. O array numbers agora seria [ 10, 11, 12, 13, 14, 15 ].

Aqui, começamos com um array de números. Em seguida, passamos o seguinte para splice(): o índice no qual começar a deletar os elementos (3), o número de elementos a serem deletados (1) e os argumentos restantes (13, 14) serão inseridos com início no mesmo índice. Note que pode haver um número qualquer de elementos (separado por vírgulas) seguindo amountToDelete, cada um dos quais é inserido.

Definimos uma função, htmlColorNames, a qual recebe um array de cores HTML como argumento. Modifique a função usando splice() para remover os dois primeiros elementos do array e adicionar 'DarkSalmon' e 'BlanchedAlmond' em seus respectivos lugares.

 */

function htmlColorNames(arr) {
    // Altere apenas o código abaixo desta linha
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

console.log(`
**************************
**************************
`);

/**
 * Copiar itens de um array usando slice()

O próximo método que abordaremos é slice(). Em vez de modificar um array, slice() copia ou extrai um determinado número de elementos para um novo array, deixando o array em que o método é chamado inalterado. slice() recebe apenas 2 parâmetros — o primeiro é o índice aonde começar a extração e o segundo é o índice no qual parar a extração (a extração ocorrerá até esse índice mas não o incluirá). Considere isto:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

todaysWeather teria o valor ['snow', 'sleet'], enquanto weatherConditions ainda teria ['rain', 'snow', 'sleet', 'hail', 'clear'].

Assim, criamos um novo array extraindo elementos de um array existente.

Definimos uma função, forecast, que recebe um array como argumento. Modifique a função usando slice() para extrair a informação do array passado como argumento e retorne um novo array contendo os elementos strings warm e sunny.

 */

function forecast(arr) {
    // Altere apenas o código abaixo desta linha
  let array = arr.slice(2,4);
    return array;
  }
  
  // Altere apenas o código acima desta linha
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


console.log(`
**************************
**************************
`);

/**
 * Copiar um array com o operador spread

Enquanto slice() nos permite sermos seletivos sobre quais elementos de um array copiar, entre várias outras tarefas úteis, o novo operador spread do ES6 nos permite facilmente copiar todos os elementos de um array, em ordem, com uma sintaxe simples e altamente legível. A sintaxe de spread é simplesmente essa: ...

Na prática, podemos usar o operador "spread" para copiar um array assim:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

thatArray é igual a [true, true, undefined, false, null]. thisArray permanece inalterado e thatArray contém os mesmos elementos que thisArray.

Definimos uma função, copyMachine que recebe arr (um array) e num (um número) como argumentos. A função deve retornar um novo array composto de num cópias de arr. Fizemos a maior parte do trabalho para você, mas isso ainda não está certo. Modifique a função usando a sintaxe de spread para que ela funcione corretamente (dica: outro método já mencionado pode ser útil aqui!).

 */

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Altere apenas o código abaixo desta linha
  newArr.push([...arr]);
      // Altere apenas o código acima desta linha
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

console.log(`
**************************
**************************
`);

/**
 * Combinar arrays com o operador spread

Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou de inserir todos os elementos de um array em outro, em qualquer índice. Com sintaxe mais tradicional, podemos concatenar arrays, mas isso só nos permite combinar arrays no final de um e no início de outro. A sintaxe do spread torna a seguinte operação extremamente simples:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

thatArray teria o valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando a sintaxe de spread, acabamos de conseguir uma operação que teria sido mais complexa e mais extensa se tivéssemos utilizado métodos tradicionais.

Definimos uma função spreadOut que retorna a variável sentence. Modifique a função usando o operador spread para que ele retorne o array ['learning', 'to', 'code', 'is', 'fun'].

 */

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Altere esta linha
    return sentence;
  }
  
  console.log(spreadOut());

console.log(`
**************************
**************************
`);

/**
 * Verificar a presença de um elemento com indexOf()

Já que arrays podem ser alterados, ou mutados, a qualquer momento, não há garantia de onde um dado estará em um determinado array, ou se esse elemento sequer existe. Felizmente, o JavaScript nos fornece outro método integrado, indexOf(), que nos permite rapidamente e facilmente checar pela presença de um elemento em um array. indexOf() recebe um elemento como parâmetro, e quando chamado, retorna a posição, ou índice, daquele elemento, ou -1 se o elemento não existe no array.

Por exemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

indexOf('dates') retorna -1, indexOf('oranges') retorna 2 e indexOf('pears') retorna 1 (o primeiro índice no qual cada elemento existe).

indexOf() pode ser incrivelmente útil para verificar rapidamente a presença de um elemento em um array. Definimos uma função, quickCheck, que recebe um array e um elemento como argumentos. Modifique a função usando indexOf() para que retorne true se o elemento passado existe no array, e false caso não exista.

 */

function quickCheck(arr, elem) {
    // Altere apenas o código abaixo desta linha
  if (arr.indexOf(elem) >= 0) {
    return true;
  } 
    return false;
    // Altere apenas o código acima desta linha
  }
  
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));


console.log(`
**************************
**************************
`);


console.log(`
**************************
**************************
`);


console.log(`
**************************
**************************
`);


console.log(`
**************************
**************************
`);
app.listen(3030);