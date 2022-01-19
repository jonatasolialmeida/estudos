// estudo de variáveis free code camp

const express = require("express");

const app = express();

// com var é possível fazer nova atribuição
var teste = "rodando";
var teste = "funfando"
console.log(teste);

// impossível fazer nova atribuição com let
let teste2 = 23;
//  let teste2 = 25;  << por exemplo

console.log(teste2);

app.listen(3333);