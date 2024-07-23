import leia from "readline-sync";
/*
var lista = [];
var par = [];
var impar = [];
var cont = 0,
  cont2 = 0;

for (var i = 0; i < 100; i++) {
  lista.push(parseInt(Math.random() * 1000));
}

for (var j = 0; j < lista.length; j++) {
  if (lista[j] % 2 === 0) {
    par.push(lista[j]);
    cont += 1;
  } else {
    impar.push(lista[j]);
    cont2 += 1;
  }
}
console.table(lista);
console.table(par);
console.table(impar);

console.log("Contador de numeros pares", cont);
console.log("Contador de numeros impares", cont2);
*/

var lista = [];
var duplicado = [];
var cont = 0;

for (var i = 0; i < 100; i++) {
  lista.push(parseInt(Math.random() * 20));
}

for (var i = 0; i < lista.length; i++) {
  for (var j = i + 1; j < lista.length; j++) {
    if (lista[j] === lista[i]) {
      duplicado.push(lista[j]);
      cont += 1;
    }
  }
}
console.table(lista);
console.table(duplicado);
console.log("Quantidade de numeros duplicados: " + cont);
//===============================================================
/*var lista = [];
var duplicado = [];
var cont = 0;

for (var i = 0; i < 100; i++) {
  lista.push(parseInt(Math.random() * 20));
}

for (var i = 0; i < lista.length; i++) {
  for (var j = i + 1; j < lista.length; j++) {
    if (lista[j] === lista[i] && !duplicado.includes(lista[i])) {
      duplicado.push(lista[i]);
      cont += 1;
      break; // Opcional: para evitar múltiplos incrementos de cont para o mesmo valor duplicado
    }
  }
}

console.table(lista);
console.table(duplicado);
console.log("Quantidade de numeros duplicados: " + cont);*/
