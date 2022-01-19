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
  


app.listen(3333);