import leia from "readline-sync";

var numeroMagico;
var opçãojogo = leia.keyInSelect(["PvP", "PvE"]);

if (opçãojogo === 0) {
  numeroMagico = leia.questionInt("Digite o numero magico ", {
    hideEchoBack: true,
  }); //hideEchoBack: true esconde o numero com *
} else if (opçãojogo === 1) {
  var dificudade = leia.keyInSelect([
    "FACIL",
    "MEDIO",
    "DIFICIL",
    "SUPER DIFICIL",
  ]);
  switch (dificudade) {
    case 0: //facil
      numeroMagico = parseInt(Math.random() * 10);
      break;
    case 1: //medio
      numeroMagico = parseInt(Math.random() * 100); //Math.random() gera numero aleatório
      break;
    case 2: //dificil
      numeroMagico = parseInt(Math.random() * 1000);
      break;
    case 3: //superdificil
      numeroMagico = parseInt(Math.random() * 1000000);
      break;
  }
}
var tentativas = 0;
do {
  var palpite = leia.questionInt("DIGITE PALPITE: ");
  if (palpite > numeroMagico) {
    console.log("MAIS BAIXO");
  } else if (palpite < numeroMagico) {
    console.log("MAIS ALTO");
  } else {
    console.log("ACERTOU!!!");
  }
  tentativas++;
} while (palpite !== numeroMagico);

console.log("VOCE PRECISOU DE " + tentativas + " TENTATIVAS PARA ACERTAR");
