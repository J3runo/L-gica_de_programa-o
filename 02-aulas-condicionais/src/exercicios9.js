import leia from "readline-sync"
var cont 

for (cont = 0; cont < 5; cont ++){

console.log("Nome ")
var Nome = leia.question()
console.log("Salario ")
var Salario = leia.questionFloat()
console.log("Dependentes ")
var Dependentes = leia.questionFloat()

var Salariototal= ""
    
switch(Dependentes){
    case 0:
        Salariototal = Salario + (Salario * 0.02)
    console.log("O salario do funcionario",Nome, "é R$", Salariototal)
    break;
    case 1:
        Salariototal = Salario + (Salario * 0.05)
    console.log("O salario do funcionario",Nome, "é R$",  Salariototal)
    break;
    case 2:
        Salariototal = Salario + (Salario * 0.07)
    console.log("O salario do funcionario",Nome, "é R$", Salariototal)
    break;
    case 3:
        Salariototal = Salario + (Salario * 0.10)
    console.log("O salario do funcionario",Nome, "é R$", Salariototal)
    break;
    default:
        Salariototal = Salario + (Salario * 0.15)
        console.log("O salario do funcionario",Nome, "é R$", Salariototal)
}































}