import leia from "readline-sync";

var numero = leia.questionInt("Digite um número inteiro positivo: ");

// Verifica se o número é menor ou igual a 1
if (numero <= 1) {
  console.log("O número " + numero + " não é primo.");
} else {
  var ehPrimo = true;

  // Verifica se o número é divisível por algum número além de 1 e ele mesmo
  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  // Exibe o resultado baseado na variável ehPrimo
  if (ehPrimo) {
    console.log("O número " + numero + " é primo.");
  } else {
    console.log("O número " + numero + " não é primo.");
  }
}
