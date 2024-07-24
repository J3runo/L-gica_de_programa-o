var numero = [];
var verde = [];
var contVerde = 0;
var vermelho = [];
var contVermelho = 0;
var preto = [];
var contPreto = 0;

// Número de giros da roleta
var numeroDeGiros = 2000;

// Gerando números aleatórios simulando os giros da roleta
for (var i = 0; i < numeroDeGiros; i++) {
  numero.push(parseInt(Math.random() * 37));
}

// Classificando os números em preto, vermelho e verde
for (var j = 0; j < numero.length; j++) {
  if (numero[j] === 0) {
    verde.push(numero[j]);
    contVerde++;
  } else if (numero[j] % 2 === 0) {
    preto.push(numero[j]);
    contPreto++;
  } else {
    vermelho.push(numero[j]);
    contVermelho++;
  }
}

// Calculando as porcentagens
var Ppreto = (contPreto / numeroDeGiros) * 100;
var Pverde = (contVerde / numeroDeGiros) * 100;
var Pvermelho = (contVermelho / numeroDeGiros) * 100;

// Exibindo resultados
console.log(
  "Quantidade de verde: " + contVerde + " (" + Pverde.toFixed(2) + "%)"
);
console.log(
  "Quantidade de vermelho: " + contVermelho + " (" + Pvermelho.toFixed(2) + "%)"
);
console.log(
  "Quantidade de preto: " + contPreto + " (" + Ppreto.toFixed(2) + "%)"
);

// Verificando se alguma cor tem uma frequência maior que 40%
if (Ppreto > 40) {
  console.log(
    "A roleta pode estar viciada: Cor preto com frequência de " +
      Ppreto.toFixed(2) +
      "%"
  );
}
if (Pverde > 40) {
  console.log(
    "A roleta pode estar viciada: Cor verde com frequência de " +
      Pverde.toFixed(2) +
      "%"
  );
}
if (Pvermelho > 40) {
  console.log(
    "A roleta pode estar viciada: Cor vermelho com frequência de " +
      Pvermelho.toFixed(2) +
      "%"
  );
} else {
  console.log("A roleta parece não estar viciada.");
}
