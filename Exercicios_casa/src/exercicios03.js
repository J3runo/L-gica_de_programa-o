import leia from "readline-sync";

while (opcao !== 0) {
  var opcao =
    leia.keyInSelect(
      ["C=>F", "F=>C", "C=>K", "K=>C", "F=>K", "K=>F"],
      "SELECIONE A CONVERSAO: Celsius, Fahrenheit, Kelvin"
    ) + 1;
  var temp = leia.questionInt("DIGITE A TEMPERATURA: ");
  switch (opcao) {
    case 1:
      resut = temp * 1.8 + 32;
      break;
    case 2:
      resut = (temp - 32) * (5 / 9);
      break;
    case 3:
      resut = temp + 273.15;
      break;
    case 4:
      resut = temp - 273.15;
      break;
    case 5:
      resut = (temp - 32) * (5 / 9) + 273.15;
      break;
    case 6:
      resut = (temp - 273.15) * 1.8 + 32;
      break;
  }
  var resut;

  console.log(`RESULTADO ${resut}°`);
  console.log("-------------------");
}
