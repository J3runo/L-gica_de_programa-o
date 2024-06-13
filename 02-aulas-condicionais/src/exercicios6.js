import leia from "readline-sync"


console.log("Valor do produto")
var valor = leia.questionInt()

console.log("Quantidade de moeda de R$1")
var moeda1 = leia.questionInt()

console.log("Quantidade de moeda de R$50")
var moeda50 = leia.questionInt()

console.log("Quantidade de moeda de R$25")
var moeda25 = leia.questionInt()

console.log("Quantidade de moeda de R$10")
var moeda10 = leia.questionInt()

console.log("Quantidade de moeda de R$5")
var moeda5 = leia.questionInt()


var totalmoedas1 = (moeda1 * 1)
var totalmoedas50 = (moeda50 * 0.50)
var totalmoedas25 = (moeda25 * 0.25)
var totalmoedas10 = (moeda10 * 0.10)
var totalmoedas5 = (moeda5 * 0.05)

var total = (totalmoedas1+totalmoedas50+totalmoedas25+totalmoedas10+totalmoedas5)
var troco = (valor - total)

if(total > valor){
    console.log("Compra aprovada! no valor de: R$",valor, "seu troco é R$:",troco)
}
else{
    console.log("Compra Recusada, o valor do produto é superior a R$:", total)
}

