import leia from "readline-sync";

while (opcao !== 0) {
  var palavra = "";
  var palavraInvertida = "";
  palavra = leia.question("DIGITE UMA PALAVRA: ").toUpperCase();
  palavra = palavra.replaceAll(" ", "");

  for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }
  if (palavraInvertida === palavra) {
    console.log(`A PALAVRA ${palavra} É UM PALINDROMO!!! `);
  } else {
    console.log(`A PALAVRA ${palavra} NAO É PALINDROMO!!!`);
  }
  console.log("--------------------------------------------");
  console.log(
    `A PALAVRA ${palavra} DE TRAZ PARA FRENTE FICA: ${palavraInvertida}`
  );
  var opcao = leia.keyInSelect(["CONTINUAR"]) + 1;
}
