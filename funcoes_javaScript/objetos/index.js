const express = require("express");

const app = express();

// Acessando objeto com notação de .

const meuObjeto = {
    carro: "besourinho",
    celular: "azus da cunhada",
    notebook: "É do meu pai, sacou?"
}

console.log(meuObjeto.carro);

//  Acessando objeto com notação de []

const objetodaNana = {
    "carro": "besourinrin tamén!!!!",
    "celular top": "motoiola",
    " pc da nana": "é um desk rapá!"
}

// é usado no formato acima  entre aspas 
// e abaixo entre colchetes por causa do espaço nas propriedades

console.log(objetodaNana[" pc da nana"]);
console.log(objetodaNana["carro"]);
console.log(objetodaNana["celular top"]);

/**
 * Acessar propriedades de objetos com variáveis
Outro uso de notação de colchetes em objetos é para acessar a propriedade a qual está armazenada como o valor de uma variável. Isso pode ser muito útil para iterar através das propriedades de um objeto ou quando acessando uma tabela de pesquisa.
Aqui está um exemplo de usar uma variável para acessar uma propriedade:
 */

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  //   A string Doberman foi exibida no console.
  console.log(myBreed);
  

//   Outra forma de você usar esse conceito é quando o nome da propriedade é coletado dinamicamente, durante a execução do programa, da seguinte forma:


const someObj = {
    propName: "John"
  };
  
  function propPrefix(str) {
    const s = "prop";
    return s + str;
  }
  
  const someProp = propPrefix("Name");
  console.log(someObj[someProp]);

//   outro exemplo

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Altere apenas o código abaixo desta linha
  const playerNumber = 16;  // Altere esta linha
  const player = testObj[playerNumber];   // Altere esta linha

  console.log(player);

  /**
   * Atualizar propriedades do objeto

Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, como você atualizaria qualquer outra variável. Você pode usar notação de ponto ou colchete para atualizar.

Por exemplo, vamos dar uma olhada em ourDog:
   */

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  /**
   * Como ele é um cachorro particularmente feliz, vamos mudar seu nome para o texto Happy Camper. 
   * Veja como atualizamos a propriedade name do objeto: 
   * ourDog.name = "Happy Camper"; 
   * ou ourDog["name"] = "Happy Camper"; 
   * Agora, quando avaliamos ourDog.name, em vez de obter Camper, teremos seu novo nome, Happy Camper.
   */

//   outro exemplo

const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  const mudou = myDog1.name = "Happy Coder";
//    ou myDog["name"] = "Happy Coder";
console.log(mudou);

// é possível adicionar novas propriedades

myDog1.bark = "au au";
const add = myDog1;
console.log(add);

//  ou adicionar assim >> myDog1["bark"] = "au au"; 

//  é possível excluir uma propriedade do objeto

delete myDog1.tails
const exclui = myDog1;
console.log(exclui);

/**
 * Converta a instrução switch em um objeto chamado lookup. Use-o para pesquisar por val e atribua a string associada para a variável result.
 */

/***
 * function phoneticLookup(val) {
  let result = "";

  // Altere apenas o código abaixo desta linha
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Altere apenas o código acima desta linha
  return result;
}

phoneticLookup("charlie");
 */

// Resolução

function phoneticLookup(val) {
    let result = "";
  
    // Altere apenas o código abaixo desta linha
  
    const lookup = {
      "alpha":"Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",    
      "foxtrot": "Frank"
    }
  
    result = lookup[val];
  
    // Altere apenas o código acima desta linha
    return result;
  }
  
  console.log(phoneticLookup("charlie"));

  // Acessar objetos aninhados

  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

  console.log(ourStorage.cabinet["top drawer"].folder2);
  console.log(ourStorage.desk.drawer);
  console.log(ourStorage.cabinet["bottom drawer"]);

  /**
   * Acessar arrays aninhados

Como vimos em exemplos anteriores, objetos podem conter tanto objetos aninhados quanto arrays aninhados. Semelhante ao acesso de objetos aninhados, a notação de colchetes pode ser encadeada para se acessar arrays aninhados.

Aqui está um exemplo de como se acessar um array aninhado:
   */

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);

// EXERCICIO

/**
 * Usando a notação de ponto e de colchetes, defina a variável secondTree para o segundo item na lista de trees do objeto myPlants.
 */

 const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);

// EXIBIR COLEÇÕES DE DISCOS

/**
 * Exibir uma coleção de discos

Você recebeu um objeto literal representando uma parte da sua coleção de álbuns musicais. Cada álbum possui um número de id único como sua chave e diversas outras propriedades. Nem todos os álbuns possuem informações completas.

Você começa com uma função updateRecords que recebe um objeto literal, records, contendo a coleção de álbuns musicais, um id, uma prop(like artist ou tracks) e um value. Complete a função usando as regras abaixo para modificar o objeto passado para a função.

    A função precisa sempre retornar o objeto de coleção de discos completo.
    Se prop não for tracks e value não for uma string vazia, atualize ou defina aquela prop do álbum como value.
    Se prop for tracks mas o álbum não tiver uma propriedade tracks, crie um array vazio e adicione o value nesse array.
    Se prop for tracks e value não for uma string vazia, adicione value ao final do array existente de tracks do álbum.
    Se value for uma string vazia, remova a propriedade prop recebida do álbum.

Observação: uma cópia do objeto recordCollection é usada para testes.

 */

// Resolução

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Altere apenas o código abaixo desta linha
function updateRecords(records, id, prop, value) {

  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


app.listen(3333);