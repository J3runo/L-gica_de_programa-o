import leia from "readline-sync";

var lista = [];
var cont = 0;
do {
  var n = leia.questionInt("DIGITE UM NUMERO PAR\n");
  if (n % 2 === 0) {
    lista.push(" " + n);
  } else {
    console.log("NUMERO IMPAR");
    cont--;
  }

  cont++;
} while (cont < 4);
console.log("-----------------------");
console.log("Numeros pares digitados: " + lista);
console.log("-------------------------------------------");
