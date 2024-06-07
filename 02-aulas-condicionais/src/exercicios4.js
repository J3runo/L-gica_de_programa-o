import leia from "readline-sync"

var cont 

for (cont = 0; cont < 5; cont ++){

console.log("Quantas Maçãs")
var quantidade = leia.question()

if(quantidade >=12){
    console.log("Valor a Pagar R$", quantidade * 0.25)    
}
else{
    console.log("Valor a Pagar R$", quantidade * 0.30,)
}
}