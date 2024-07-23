import leia from "readline-sync";
/*
var unidadeMedida = leia.question(
  "Digite a unidade de medida inicial (Celsius, Kelvin, Fahrenheit): "
);
var temperatura = parseFloat(leia.question("Digite a temperatura: "));
var unidadeFinal = leia.question(
  "Digite a unidade de medida final (Celsius, Kelvin, Fahrenheit): "
);
var resultado;

if (unidadeMedida === "Celsius" && unidadeFinal === "Fahrenheit") {
  resultado = temperatura * 1.8 + 32;
} else if (unidadeMedida === "Fahrenheit" && unidadeFinal === "Celsius") {
  resultado = (temperatura - 32) * (5 / 9);
} else if (unidadeMedida === "Celsius" && unidadeFinal === "Kelvin") {
  resultado = temperatura + 273.15;
} else if (unidadeMedida === "Kelvin" && unidadeFinal === "Celsius") {
  resultado = temperatura - 273.15;
} else if (unidadeMedida === "Fahrenheit" && unidadeFinal === "Kelvin") {
  resultado = (temperatura - 32) * (5 / 9) + 273.15;
} else if (unidadeMedida === "Kelvin" && unidadeFinal === "Fahrenheit") {
  resultado = (temperatura - 273.15) * 1.8 + 32;
} else {
  console.log("Unidade de medida inválida.");
  process.exit(1);
}

console.log(
  "Temperatura em " +
    unidadeMedida +
    " convertida para " +
    unidadeFinal +
    ": " +
    resultado
);
*/
console.log("conversor de temperaturas!");

var unidadeOrigem = leia.question(
  "Digite a unidade de medida de origem (Celsius, Fahrenheit ou Kelvin): "
);
var unidadeDestino = leia.question(
  "Digite a unidade de medida para qual deseja converter (Celsius, Fahrenheit ou Kelvin): "
);
var temperatura = parseFloat(leia.question("Digite a temperatura: "));

function celsiusParaFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function celsiusParaKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinParaCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitParaKelvin(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9) + 273.15;
}

function kelvinParaFahrenheit(kelvin) {
  return (kelvin - 273.15) * 1.8 + 32;
}

function converterTemperatura(origem, temperatura, destino) {
  var temperaturaConvertida;

  if (origem === "Celsius" && destino === "Fahrenheit") {
    temperaturaConvertida = celsiusParaFahrenheit(temperatura);
  } else if (origem === "Fahrenheit" && destino === "Celsius") {
    temperaturaConvertida = fahrenheitParaCelsius(temperatura);
  } else if (origem === "Celsius" && destino === "Kelvin") {
    temperaturaConvertida = celsiusParaKelvin(temperatura);
  } else if (origem === "Kelvin" && destino === "Celsius") {
    temperaturaConvertida = kelvinParaCelsius(temperatura);
  } else if (origem === "Fahrenheit" && destino === "Kelvin") {
    temperaturaConvertida = fahrenheitParaKelvin(temperatura);
  } else if (origem === "Kelvin" && destino === "Fahrenheit") {
    temperaturaConvertida = kelvinParaFahrenheit(temperatura);
  } else {
  }
  console.log(
    "A temperatura convertida é: " + temperaturaConvertida.toFixed(2) + destino
  );
}

converterTemperatura(unidadeOrigem, temperatura, unidadeDestino);
