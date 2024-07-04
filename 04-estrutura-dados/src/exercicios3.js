import leia from "readline-sync"

var lista = []
var par = []

for(var i = 0; i<5; i++){
    lista [i] = leia.questionInt("DIGITE O NUMERO ")
    

if(lista[i] % 2 === 0){
    par.push (lista[i])}
}

console.log(lista,"\n","NUMEROS PARES SÃO:",par)