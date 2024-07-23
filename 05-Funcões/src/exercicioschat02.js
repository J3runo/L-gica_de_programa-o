//import { somaPar } from "./exercicioschat01.js";
import leia from "readline-sync";
//somaPar();

var iniciofatorial = 1;
var fatorial = leia.question("Digite o numero q quer fatorar: ");

for (var i = 1; i <= fatorial; i++) {
  iniciofatorial *= i;
}
console.log("Fatorial do numero " + fatorial + " é : " + iniciofatorial);
