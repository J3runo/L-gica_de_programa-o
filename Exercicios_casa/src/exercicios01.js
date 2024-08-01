import leia from "readline-sync";

while (opcao !== 0) {
  var palavra = "";
  var vogais = ["A", "E", "I", "O", "U"];
  var vogaisEncontradas = [];
  var cont = 0;

  palavra = leia.question("DIGITE UMA PALAVRA: ").toUpperCase();

  for (var i = 0; i < palavra.length; i++) {
    for (var j = 0; j < vogais.length; j++) {
      if (palavra[i] === vogais[j]) {
        cont++;
        vogaisEncontradas.push(palavra[i]);
      }
    }
  }
  console.log(`NUMERO DE VOGAIS ENCONTRADAS ${cont}`);
  console.log(`VOGAIS ENCONTRADAS ${vogaisEncontradas}`);
  var opcao = leia.keyInSelect(["CONTINUAR"]) + 1;
}
