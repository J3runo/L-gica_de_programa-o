import leia from "readline-sync"

var lista = []
var lista2 = []
var soma = 0
for(var i = 0; i<5; i++){
    lista[i] = leia.questionInt("digite o numero\n")
    soma += lista[i]
    lista2 = soma

}
console.log("A SOMA DOS NUMEROS: ",lista,"\n","É: ",lista2 )