import leia from "readline-sync"

// decimal para binario

var decimal = leia.questionInt("digite um numero decimal\n")
var result
var resto
var binario = ""

while(decimal >0){
    result = parseInt(decimal / 2)
    resto = decimal % 2
    decimal = result 
    binario = resto + binario 
}

console.log("o binario é = " + binario)
