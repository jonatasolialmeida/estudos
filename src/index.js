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
teste2 = 24;

console.log(teste2);

// nomear variáveis que você não quer reatribuir, usando a palavra-chave const.

const nuncaMuda = 123;
console.log(nuncaMuda);

// É prática de alguns devs nomear const com MAISCULAS
// e ASSIM_TAMBEM

// const TESTE
// const TESTE_01

// indepedente do valor atribuido ao let i
// i++ sempre acrescentará + 1
let i = 50;

// aqui de dois em dois
i+=2
console.log(i);

let isi = 0;
isi = isi + 1;
isi = isi + 1;
isi = isi + 1;

console.log(isi);

let iso = 0;

iso = iso + 5;
iso = iso + 5;
iso = iso + 5;
iso+= 5;
console.log(iso);

app.listen(3333);