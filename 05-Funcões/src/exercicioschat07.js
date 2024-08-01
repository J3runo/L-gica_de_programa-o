import leia from "readline-sync";
/* INVERTE A LISTA
var lista = [];
var listaInvertida = [];

lista = leia.question("Palavras: ");

for (var i = lista.length - 1; i >= 0; i--) {
  listaInvertida += lista[i];
}
if (lista === listaInvertida) {
  console.log("É igual ");
} else {
  console.log("Não é igual ");
}
console.log("Normal: " + lista);
console.log("Invertida: " + listaInvertida);
*/
/* ORDENA EM ORDEM CRECENTE 
var lista = [];
var listaOrdenada = [];

for (var i = 0; i < 50; i++) {
  lista[i] = parseInt(Math.random() * 1000);
}

listaOrdenada = [...lista].sort((a, b) => a - b);
console.table(listaOrdenada);
console.table(lista);
*/

/* ORDENA EM ORDEM DECRECENTE 
var lista = [];
var listaOrdenada = [];

for (var i = 0; i < 50; i++) {
  lista[i] = parseInt(Math.random() * 1000);
}

listaOrdenada = [...lista].sort((a, b) => b - a);
console.table(listaOrdenada);
console.table(lista);
*/
/*
 Gera e organiza o alfabeto
var lista = [];
var listaInvertida = [];

for (var i = 0; i < 26; i++) {
  var num = parseInt(Math.random() * 25);
  switch (num) {
    case 0:
      lista[i] = "A";
      break;
    case 1:
      lista[i] = "B";
      break;
    case 2:
      lista[i] = "C";
      break;
    case 3:
      lista[i] = "D";
      break;
    case 4:
      lista[i] = "E";
      break;
    case 5:
      lista[i] = "F";
      break;
    case 6:
      lista[i] = "G";
      break;
    case 7:
      lista[i] = "H";
      break;
    case 8:
      lista[i] = "I";
      break;
    case 9:
      lista[i] = "J";
      break;
    case 10:
      lista[i] = "K";
      break;
    case 11:
      lista[i] = "L";
      break;
    case 12:
      lista[i] = "M";
      break;
    case 13:
      lista[i] = "N";
      break;
    case 14:
      lista[i] = "O";
      break;
    case 15:
      lista[i] = "P";
      break;
    case 16:
      lista[i] = "Q";
      break;
    case 17:
      lista[i] = "R";
      break;
    case 18:
      lista[i] = "S";
      break;
    case 19:
      lista[i] = "T";
      break;
    case 20:
      lista[i] = "U";
      break;
    case 21:
      lista[i] = "V";
      break;
    case 22:
      lista[i] = "W";
      break;
    case 23:
      lista[i] = "X";
      break;
    case 24:
      lista[i] = "Y";
      break;
    case 25:
      lista[i] = "Z";
      break;
  }
}

listaInvertida = [...lista].sort();

console.log(lista);
console.log(listaInvertida);
*/
/* 
    Gera e organiza o alfabeto
var lista = [];
var listaInvertida = [];
var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Preenche a lista com 26 letras aleatórias do alfabeto
for (var i = 0; i < 26; i++) {
  var num = parseInt(Math.random() * 26);
  lista[i] = alfabeto[num];
}

// Inverte a lista
listaInvertida = [...lista].sort();

console.log("Lista original:", lista);
console.log("Lista invertida:", listaInvertida);
*/
/*
var operação = leia.keyInSelect([
  "+",
  "-",
  "/",
  "x" + "\n" + "Escolha a operacao",
]);

var N1 = leia.questionFloat("Numero1: ");
var N2 = leia.questionFloat("Numero2: ");
var result;
if (operação === 0) {
  var result = N1 + N2;
} else if (operação === 1) {
  var result = N1 - N2;
} else if (operação === 2) {
  var result = N1 / N2;
} else if (operação === 3) {
  var result = N1 * N2;
}

console.log("Resultado = " + result);
*/
/*
var texto = leia.question("Escreva um frase: ");
var palavras = texto.split(" ");
var cont = 0;

for (var i = 0; i < palavras.length; i++) {
  cont++;
}
console.log(texto);
console.log(palavras);
console.log("Numero de palavras: " + cont);
*/
