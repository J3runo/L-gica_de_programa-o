import leia from "readline-sync"
/*var i = 1

while(i != 5 ){
    var nome = leia.question("digite o nome\n")
    console.log("Bem vindo " + nome,"\n")
    i++
}
*/

/*var carregando = true
var porcentagem = 0

while (carregando){
    console.log(porcentagem + " % carregando...")
   if(porcentagem < 100) {
    porcentagem ++
}
else {
    carregando = false
}
}
*/

/*var nota = leia.question("  DIGITE A NOTA ")
while(nota < 0.0 || nota >10.0){
    console.log("NOTA INVALIDA")
    nota = leia.question("DIGITE A NOTA NOVAMENTE: ")

}
console.log("NOTA VALIDA")
*/
/*var numero = leia.questionInt("DIGITE UM NUMERO\n")
for(var i = 0; i <= 10; i++){
    console.log(numero + " x " + i + " = " + ( i*numero))

}

var numero = leia.questionInt("DIGITE UM NUMERO\n")
*/
/*var nome = leia.question("digite o nome\n")

for (var i = 0; i < nome.length; i++ ){
    console.log(i) 
}
*/
var n1 = leia.question("primeiro numero")
var n2 = leia.question("segundo numero")
var passo = leia.question("passos")

for (var i = n1; i <= n2; i += passo){
    console.log(i)
}