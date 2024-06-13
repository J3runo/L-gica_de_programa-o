import leia from "readline-sync"


console.log("Digite seu salario")
var salario = leia.questionFloat()
console.log("Digite valor do emprestimo")
var valorEm = leia.questionFloat()
console.log("Digite o numero de prestaçoes")
var np = leia.questionInt()

var valorPrestaçao = valorEm / np


if (valorPrestaçao > salario * 0.30 ){
    console.log("Emprestimo recusado")

}
else{
    console.log("Emprestimo Aprovado em :",np,"x", "de" ,valorPrestaçao)
}




