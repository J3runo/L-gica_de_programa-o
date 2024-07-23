import leia from "readline-sync";

function calculadora(a, b, operacao) {
  switch (operacao) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return "operação inválida";
  }
}

var a = parseFloat(leia.question("n1: "));
var b = parseFloat(leia.question("n2: "));
var operacao = leia.keyInSelect(["+", "-", "*", "/"], "Escolha a operação:");

console.log(calculadora(a, b, operacao));
