import leia from "readline-sync"

var cont 

for (cont = 0; cont < 5; cont ++){

console.log("Digite um numero")
var numero = leia.questionInt();

if (numero % 2 === 0){
    console.log("O numero digitado é PAR","\n")
}
else{
    console.log("O numero digitado é IMPAR", "\n")
}
}