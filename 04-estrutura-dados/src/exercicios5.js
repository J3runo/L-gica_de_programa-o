import leia, { question, questionInt } from "readline-sync"

var lista =[1,2,3,4,5,6,7,8,9]
var lista2 = []

for(var i = lista.length -1; i>=0; i--){
    lista2.push(lista[i])
}
console.log("LISTA NORMAL: ",lista,"\n","LISTA INVERTIDA: ",lista2)





/*
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
console.log(lista)*/