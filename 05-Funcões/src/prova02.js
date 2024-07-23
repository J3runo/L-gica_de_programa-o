import leia from "readline-sync";

var palavra = "";
var palavraInvertida = "";

palavra = leia.question("DIGITE UMA PALAVRA: ");
for (var i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}
if (palavra === palavraInvertida) {
  console.log("A Palavra é um palindromo");
} else {
  console.log("A Palavra não é um palindromo");
}
console.log("Palavra normal: " + palavra);
console.log("Palavra invertida: " + palavraInvertida);
