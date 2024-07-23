//SOMA DE TODOS NUMEROS PAR DE 1 A 100
import leia from "readline-sync";

export function somaPar() {
  var soma = 0;
  var inicio = leia.questionInt("DIGITE UM NUMERO DE INICIO: ");
  var fim = leia.questionInt("DIGITE UM NUMERO DE FIM: ");
  for (var i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }
  console.log(
    "A soma dos números pares de " + inicio + " a " + fim + " é: " + soma
  );
}

somaPar();
