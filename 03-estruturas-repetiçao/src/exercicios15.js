import leia from "readline-sync";

var i = 0;
var maiorA, menorA;
var femi = 0,
  mascu = 0;
var genero, altura;
var alturaF = 0,
  percentualM = 0,
  mediaAF = 0,
  mediaAP = 0,
  mediaPronta;

//=============================
while (i < 4) {
  // repetição
  genero = leia.keyInSelect(
    ["M", "F"],
    "Selecione o genero (0 para Masculino, 1 para Feminino): "
  );

  if (genero === 1) {
    // Se for feminino
    femi++;
  } else if (genero === 0) {
    // Se for masculino
    mascu++;
  } else {
    console.log("Opção inválida! Tente novamente.");
    continue; // Continua a iteração sem incrementar o contador i
  }

  altura = leia.questionFloat("Digite a altura (em metros): ");

  if (i === 0) {
    // Primeira repetição joga os dados nas variaveis
    maiorA = altura;
    menorA = altura;
  }

  if (genero === 1) {
    // Se for feminino soma altura q ja tem com a nova 
    alturaF += altura;
  }

  if (altura < menorA) {
    // Se altura for menor
    menorA = altura;
  } else if (altura > maiorA) {
    // Se altura for maior
    maiorA = altura;
  }

  mediaAP += altura;
  i++; // Incrementa o contador
}

mediaPronta = mediaAP / 10;
percentualM = (mascu / 10) * 100;
if (femi > 0) {
  mediaAF = alturaF / femi;
} else {
  mediaAF = 0;
}
console.log("Maior altura: ", maiorA.toFixed(2), "metros\n");
console.log("Menor altura: ", menorA.toFixed(2), "metros\n");
console.log("Média de altura das mulheres: ", mediaAF.toFixed(2), "metros\n");
console.log(
  "Média de altura da população: ",
  mediaPronta.toFixed(2),
  "metros\n"
);
console.log(
  "Percentual de homens na população: ",
  percentualM.toFixed(2),
  "%\n"
);
