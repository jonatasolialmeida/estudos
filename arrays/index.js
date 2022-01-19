const express = require("express");

const app = express();

//  Acessar arrays multidimensionais com índices

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  console.log(arr[3]);
  console.log(arr[3][0]);
  console.log(arr[3][0][1]);
  

//   EXEMPLOS DE ARRAY COM .push

const arr1 = [1, 2, 3];
arr1.push(4);

console.log(arr1);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

console.log(arr2)
// arr1 agora tem o valor de [1, 2, 3, 4] e arr2 tem o valor de ["Stimpson", "J", "cat", ["happy", "joy"]].

//  Manipulando arrays com pop()
// .pop() remove o ultimo elemento do array

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//  Manipular arrays com shift()
//  .shift()  remove o primeiro elemento do array

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray);
console.log(ourArray);

// Manipular arrays com unshift()
//  .unshift() adicionna elementos no inicio do array

const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift();
console.log(ourArray2);
ourArray2.unshift("Happy");
console.log(ourArray2);


app.listen(3333);