import leia, { question, questionInt } from "readline-sync"

var lista = []

for(var i = 0; i<10; i++){
    lista.push(leia.questionInt("numero"))
}
var inicio = 0
var fim = lista.length -1
while(inicio<fim){
    var aux = lista[inicio]
    lista[inicio] = lista[fim]
    lista[fim] = aux
    inicio++
    fim--
}
console.log(lista)