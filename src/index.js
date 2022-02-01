const express = require("express");

const app = express();

console.log("RODANDO");

/**
 * Usar o método test

Expressões regulares são usadas em linguagens de programação para encontrar e extrair partes de strings. Cria-se padrões que ajudam a encontrar tais partes.

Se você quiser encontrar a palavra the na string The dog chased the cat, você poderia usar a seguinte expressão regular: /the/. Note que aspas não são necessárias ao redor da expressão regular.

O JavaScript oferece múltiplas maneiras de usar regexes. Uma dessas maneiras é com o método .test(). O método .test() aplica a regex à string dentro dos parênteses e retorna true caso encontre o padrão ou false caso contrário.
 */

// O método test retorna true aqui.
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

// Aplique a regex myRegex na string myString usando o método .test().

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Altere esta linha

console.log(result);

console.log(`
*********************
*********************
`)

/**
 * Buscar uma string literal com diferentes possibilidades
 
 Ao usar regexes como /coding/, você pode procurar pelo padrão coding em strings.
 
 Isso funciona com strings únicas, mas é limitado a apenas um padrão. Você pode procurar por múltiplos padrões usando o operador de alternation, ou OR: |.
 
Este operador funciona para buscar padrões à esquerda e à direita dele. Por exemplo, se você quiser encontrar as strings yes ou no, a regex que você quer é /yes|no/.

Você pode também procurar por mais de dois padrões com este operador. É possível fazer isso ao adicionar mais instâncias do operador seguido do padrão desejado: /yes|no|maybe/.

Complete a regex petRegex para encontrar os pets dog, cat, bird, ou fish.

*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Altere esta linha
let result1 = petRegex.test(petString);
console.log(result1);

console.log(`
*********************
*********************
`)

/**
 * 
 * Ignorar maiúsculas e minúsculas ao buscar
 
 Até agora você escreveu regexes para encontrar strings literais. Mas, às vezes, você pode querer encontrar caixas diferentes.
 
 Caixa (-alta ou -baixa) é a diferença entre letras maiúsculas e minúsculas. São exemplos de caixa alta: A, B e C. a, b e c são exemplos de caixa baixa.
 
 Você pode encontrar ambas as caixas usando algo que chamamos de flag. Existem várias flags, mas agora nós queremos a flag que ignora a caixa - a flag i. Para usá-la é só colocar ao fim da regex. Por exemplo, escrever /ignorecase/i é uma forma. Essa regex pode encontrar as strings ignorecase, igNoreCase e IgnoreCase (e todas as outras combinações de maiúsculas e minúsculas).
 
 Escreva uma regex fccRegex que encontre freeCodeCamp, não importa em que caixa esteja. A regex não deve buscar abreviações ou variações com espaços.
 
 */

let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Altere esta linha
let result2 = fccRegex.test(myString1);

console.log(result2);

/**
 * Extrair resultados
 
 Até agora, você só tem verificado se existe ou não um padrão dentro de uma string. Você também pode extrair os resultados encontrados por meio do método .match().
 
 Para usar o método .match(), aplique o método em uma string e passe a regex dentro dos parênteses.
 
 Exemplo:
 
 "Hello, World!".match(/Hello/);
 let ourStr = "Regular expressions";
 let ourRegex = /expressions/;
 ourStr.match(ourRegex);
 
 Aqui, o primeiro match retorna ["Hello"] e, o segundo, ["expressions"].
 
 Note que o método .match se usa de forma "contrária" ao método .test que você usou até então:
 
 'string'.match(/regex/);
 /regex/.test('string');
 
 Aplique o método .match() para extrair a string coding.
 
 */
console.log(`
*********************
*********************
`)

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Altere esta linha
let result3 = extractStr.match(codingRegex); // Altere esta linha

console.log(result3);

console.log(`
*********************
*********************
`)

/**
 * Encontrar mais do que o primeiro resultado
 
 Até agora você foi capaz apenas de extrair ou buscar um resultado de uma vez.
 
 let testStr = "Repeat, Repeat, Repeat";
 let ourRegex = /Repeat/;
 testStr.match(ourRegex);
 
 match retorna ["Repeat"] aqui.
 
 Para buscar ou extrair um padrão além do primeiro resultado, você pode usar a flag g (de "global").
 
 let repeatRegex = /Repeat/g;
 testStr.match(repeatRegex);
 
 Aqui, match retorna o valor ["Repeat", "Repeat", "Repeat"]
 
 Usando a regex starRegex, encontre e extraia ambas ocorrências da palavra Twinkle da string twinkleStar.
 
 Observação:
 você pode usar múltiplas flags em uma regex: /search/gi
 
 */

let twinkleStar = "Twinkle, twinkle, little star";
// (g) pega todas as ocorrências e (i) desconsidera maisculas e minusculas
let starRegex = /Twinkle/gi; // Altere esta linha
let result4 = twinkleStar.match(starRegex); // Altere esta linha
console.log(result4);


console.log(`
*********************
*********************
`)

/**
 * Encontrar qualquer coisa com o caractere curinga
 
 Haverá vezes em que você não saberá (ou não precisará saber) quais caracteres exatamente farão parte das suas regexes. Pensar em todas as palavras que capturariam, digamos, um erro ortográfico levaria muito tempo. Por sorte, você pode economizar tempo usando o caractere curinga: .
 
 O caractere curinga . captura qualquer caractere. O curinga também pode ser chamado de ponto. Você pode usar o curinga como qualquer outro caractere na regex. Por exemplo, se você quiser encontrar hug, huh, hut ou hum, você pode usar a regex /hu./ para capturar todas as quatro palavras.
 
 let humStr = "I'll hum a song";
 let hugStr = "Bear hug";
 let huRegex = /hu./;
 huRegex.test(humStr);
 huRegex.test(hugStr);
 
 As duas chamadas a test retornam true.
 
 Complete a regex unRegex para que ela encontre as strings run, sun, fun, pun, nun e bun. A regex deve usar o caractere curinga.
 
 */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Altere esta linha
let result5 = unRegex.test(exampleStr);
console.log(result5);




console.log(`
*********************
*********************
`)

/**
 * Capturar um único caractere com múltiplas possibilidades
 
 Você aprendeu a capturar padrões literais (/literal/) e usar o caractere curinga (/./). Eles são os extremos das expressões regulares: um encontra o texto exato e o outro captura qualquer coisa. Existem formas de balancear esses extremos.
 
 Você pode ter alguma flexibilidade ao procurar um padrão literal usando classes de caracteres. Classes de caracteres permitem a definição de grupos de caracteres que você quer capturar ao colocá-los entre colchetes: [ e ].
 
 Por exemplo, se você quiser encontrar bag, big e bug mas não bog. Você pode escrever a regex /b[aiu]g/ para isso. [aiu] é a classe de caracteres que só capturará a, i ou u.
 
 let bigStr = "big";
 let bagStr = "bag";
 let bugStr = "bug";
 let bogStr = "bog";
 let bgRegex = /b[aiu]g/;
 bigStr.match(bgRegex);
 bagStr.match(bgRegex);
 bugStr.match(bgRegex);
 bogStr.match(bgRegex);
 
 As quatro chamadas a match retornarão os seguintes valores, nesta ordem: ["big"], ["bag"], ["bug"] e null.
 
 Use classe de caracteres de vogais (a, e, i, o, u) na sua regex vowelRegex para encontrar todas as vogais na string quoteSample.
 
 Observação: você quer encontrar tanto maiúsculas quanto minúsculas.
 
 */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Altere esta linha
let result6 = quoteSample.match(vowelRegex); // Altere esta linha
console.log(result6);

console.log(`
*********************
*********************
`)

/**
 * Capturar letras do alfabeto

Você viu como pode usar conjuntos de caracteres para especificar um grupo de caracteres para capturar. Mas você precisaria escrever muito para definir uma classe larga como, por exemplo, para capturar todas as letras do alfabeto. Felizmente há uma maneira de fazer com que elas fiquem pequenas e simples.

Você pode usar um hífen (-) para definir um intervalo de caracteres para capturar dentro de uma classe.

Por exemplo, para encontrar letras minúsculas de a a e, você pode escrever [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

As três chamadas a match retornam, na ordem, os valores: ["cat"], ["bat"] e null.

Capture todas as letras na string quoteSample.

Observação: você quer encontrar tanto maiúsculas quanto minúsculas.

 */

let quoteSample1 = "The quick brown 5 fox jumps over 3 the lazy 2 dog.";
//  o uso do (-) também serve para intervalos de números
let alphabetRegex = /[a-z]/gi; // Altere esta linha
let alphabetRegex1 = /[^aeiou]/gi; // Altere esta linha
let result7 = quoteSample1.match(alphabetRegex); // Altere esta linha
let result8 = quoteSample1.match(alphabetRegex1); // Altere esta linha

// exemplo dse uso com hifem em números

/**
 * E também é possível combinar intervalos de letras e números em uma única classe de caracteres.
 * let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

 */

console.log(result7);
console.log(result8);


/**
 * Capturar caracteres que aparecem uma ou mais vezes seguidas

Às vezes você precisa capturar um caractere, ou grupo de caracteres, que aparece uma ou mais vezes seguidas. Ou seja, que aparecem pelo menos uma vez e podem se repetir.

Você pode usar o caractere + para verificar se é o caso. Lembre-se que o caractere ou padrão precisa repetir-se consecutivamente. Ou seja, um atrás do outro.

Por exemplo, /a+/g encontra um resultado na string abc e retorna ["a"]. Mas o + também faz com que encontre um único resultado em aabc e retorne ["aa"].

Se a string fosse abab, a operação retornaria ["a", "a"] porque entre os dois a há um b. Por fim, se não houvesse nenhum a na string, como em bcd, nada seria encontrado.

Você quer capturar as ocorrências de s quando acontecer uma ou mais vezes em Mississippi. Escreva uma regex que use o caractere +.

 */

console.log(`
*********************
*********************
`)

let difficultSpelling = "Mississippi";
let myRegex2 = /s+/gi; // Altere esta linha
let result9 = difficultSpelling.match(myRegex2);

console.log(result9);

console.log(`
*********************
*********************
`)

app.listen(3030);

