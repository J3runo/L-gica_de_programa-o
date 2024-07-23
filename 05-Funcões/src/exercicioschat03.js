import leia from "readline-sync";

var numero = leia.questionInt("DIGITE UM NUMERO INTEIRO POSITIVO: ");
var numerostr = numero.toString();
var cont = 0;

for (var i = 0; i < numerostr.length; i++) {
  cont += 1;
}
console.log("O numero " + numero + " tem " + cont + " digitos!");
