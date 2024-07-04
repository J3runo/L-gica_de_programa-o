import leia from "readline-sync"

var lista = []
var maior = []

for(var i = 0; i <5; i++){

    lista[i] = leia.questionInt("DIGITE O NUMERO\n")
    if(lista [i] >= 10 ){
        maior.push(lista[i])

    }
}console.log(maior)