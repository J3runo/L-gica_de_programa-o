import leia from "readline-sync"
/*var i = 1

while(i != 5 ){
    var nome = leia.question("digite o nome\n")
    console.log("Bem vindo " + nome,"\n")
    i++
}
*/

var carregando = true
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


