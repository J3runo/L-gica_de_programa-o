import leia from "readline-sync"


console.log("Cliente 1 ")
var nome1 = leia.question()

console.log("Total da compra ")
var valor1 = leia.questionFloat()

console.log("Cliente 2 ")
var nome2 = leia.question()

console.log("Total da compra ")
var valor2 = leia.questionFloat()

var total = (valor1 + valor2)

var media = (total/2)
console.log("Esse é o valor total R$:",total,"\n")
console.log("Esse é o valor medio R$",media,"\n")

if(valor1 >20){
    console.log("O cliente",nome1,"Gastou mais com o valor de R$:",valor1 )
    
} 
if (valor2 >20){
    console.log("O cliente",nome2,"Gastou mais com o valor de R$:",valor2)
    
}

