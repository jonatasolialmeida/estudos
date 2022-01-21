const express = require("express");

const app = express();

/**
 * Comparar com o operador lógico AND

Às vezes, você precisará testar mais de uma coisa de cada vez. O operador lógico AND (&&) retornará true apenas se os operadores à esquerda e à direita forem verdadeiros.

O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de outro if:
 */

function isMore(num) {
if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";
}

console.log(isMore(6));

/**
 * ó retornará Yes se num for maior que 5 e menor que 10. A mesma lógica pode ser escrita assim:
 */

    function isMore2(num) {
        if (num > 5 && num < 10) {
            return "Yes";
          }
          return "No";
          
    }

    console.log(isMore2(4));

/**
 * Usar a ordem lógica em instruções if else
A ordem é importante em instruções if e else if.
A função é executada de cima para baixo, então você deve ser cuidadoso com qual instrução vem primeiro.
Tomemos como exemplo estas duas funções.
Aqui está a primeira:
 */
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

// A segunda apenas altera a ordem das instruções if e else if:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

// Embora as duas funções pareçam praticamente idênticas, se passarmos um número para ambas, teremos saídas diferentes.

console.log(foo(0));
console.log(bar(0));

/**
 * foo(0) retornará a string Less than one e bar(0) retornará a string Less than two.
 */

//  OBS a funçao termina se a primeira condição for atendida

function caseInSwitch(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha

switch (val) {
 case 1:
 answer = "alpha";
 break;
 case 2:
 answer = "beta";
 break;
 case 3:
 answer = "gamma";
 break;
 case 4:
 answer = "delta";
 break; 
}


  // Altere apenas o código acima desta linha
  return answer;
}

console.log(caseInSwitch(1));

/**
 * etornar valores booleanos das funções

Você pode se lembrar de Comparação com o operador de igualdade, em que todos os operadores de comparação retornam um valor booleano true ou false.

Às vezes, as pessoas usam uma instrução if/else para fazer uma comparação, dessa forma:
 */

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// Mas há uma forma melhor de fazer isso. Já que === retorna true ou false, podemos retornar o resultado da comparação:

function isEqual2(a, b) {
  return a === b;
}

console.log(isEqual(10,12))
console.log(isEqual2(10,10))

app.listen(3333);