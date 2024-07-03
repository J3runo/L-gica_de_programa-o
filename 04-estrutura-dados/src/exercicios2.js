import leia from "readline-sync"

var lista = []
var lista2 = []

for(var i = 0; i<5; i++){
    lista[i] = leia.questionInt("digite o numero\n")
    lista2 [i] = lista[0]+[1]+[2]+[3]+[4]

}
console.log(lista,"\n",lista2 )