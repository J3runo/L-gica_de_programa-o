import leia, { keyInSelect, question, questionInt } from "readline-sync"


var n = leia.questionInt("digite um numero\n")
var atual = 1
var proximo;
var anterior = 0
var result = "0-1"


for (var i = 2; i < n; i++){
    proximo = anterior + atual 
    anterior = atual 
    atual = proximo
    result = result + " - " + proximo
}   

console.log(result)














