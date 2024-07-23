// Dobra dos valores do array e verifica duplicata

var array = [];
var arrayDobrado = [];
var igual = [];
var maiorNumero;
var maiorNumeroDobrado;
var menorNumeroDobrado;
var menorNumero;
// Preenchendo o array com valores aleatórios entre 0 e 99
PrencheArray();
// Dobrando os valores do array
DobraValor();
// Encontrando duplicatas
EncontraDuplicatas();
// Encontrando o maior número
MaiorNumero();
// Enconta menor numero
MenorNumero();
// Ordenando o array em ordem decrescente
OrganizaNumero();
// Exibindo resultados
console.log("Array original:");
console.table(array);
console.log("Maior número: " + maiorNumero);
console.log("Maior número dobrado: " + maiorNumeroDobrado);
console.log("Menor número: " + menorNumero);
console.log("Menor número dobrado: " + menorNumeroDobrado);
console.log("Array dobrado:");
console.table(arrayDobrado);
if (igual.length > 0) {
  console.log("Valores duplicados:");
  console.table(igual);
} else {
  console.log("Não há valores duplicados.");
}

function MaiorNumero() {
  maiorNumero = Math.max(...array);
  maiorNumeroDobrado = Math.max(...arrayDobrado);
}
function MenorNumero() {
  menorNumero = Math.min(...array);
  menorNumeroDobrado = Math.min(...arrayDobrado);
}

function OrganizaNumero() {
  array.sort((a, b) => b - a);
  arrayDobrado.sort((a, b) => b - a);
}

function EncontraDuplicatas() {
  for (var i = 0; i < array.length; i++) {
    for (var k = i + 1; k < array.length; k++) {
      if (array[k] === array[i] && !igual.includes(array[i])) {
        igual.push(array[i]);
      }
    }
  }
}

function DobraValor() {
  for (var j = 0; j < array.length; j++) {
    arrayDobrado.push(array[j] * 2);
  }
}

function PrencheArray() {
  for (var i = 0; i < 20; i++) {
    array[i] = parseInt(Math.random() * 100);
  }
}
