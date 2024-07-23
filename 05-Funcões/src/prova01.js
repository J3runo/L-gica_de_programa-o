import leia from "readline-sync";

var palavra = "";
var vogais = [];
palavra += leia.question("PALAVRA: ");

for (var i = 0; i < palavra.length; i++) {
  if (
    palavra[i] === "a" ||
    palavra[i] === "e" ||
    palavra[i] === "i" ||
    palavra[i] === "o" ||
    palavra[i] === "u"
  ) {
    vogais.push(palavra[i]);
  }
}
if (vogais.length > 0) {
  console.log("A palavra " + palavra);
  console.log("TEM ESSAS VOGAIS " + vogais);
} else {
  console.log("NÂO TEM VOGAIS ");
}
