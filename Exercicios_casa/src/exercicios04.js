import leia from "readline-sync";
var cont = 0;
while (cont < 3) {
  var nome = leia.question("NOME: ");
  var Pgols = leia.questionInt("GOLS: ") * 50;
  var Ppc = leia.questionInt("PASSES CERTOS: ") * 10;
  var Ppe = leia.questionInt("PASSES ERRADOS: ") * -5;

  var totalP = Pgols + Ppc + Ppe;
  var maiorP;
  var nomeM;
  if (maiorP === undefined) {
    maiorP = totalP;
    nomeM = nome;
  } else if (totalP > maiorP) {
    maiorP = totalP;
    nomeM = nome;
  }

  if (totalP < 50) {
    console.log("PESSIMA PARTIDA!!!");
  } else if (totalP > 50 && totalP < 100) {
    console.log("PARTIDA RUIM!!!");
  } else if (totalP > 100 && totalP < 150) {
    console.log("FEZ O BASICO!!!");
  } else if (totalP > 150 && totalP < 200) {
    console.log("FOI BEM NA PARTIDA!!!");
  } else {
    console.log("JOGOU DEMAIS!!!");
  }
  console.log("------------------------------");
  console.log("TOTAL DE PONTOS: " + totalP);
  cont++;
}
console.log(`MELHOR JOGADOR FOI ${nome} COM A PONTUACAO DE ${maiorP} pontos`);
