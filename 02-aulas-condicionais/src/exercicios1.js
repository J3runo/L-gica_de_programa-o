import leia from "readline-sync"

var senha = 1234

while( teste != senha){

console.log("digite a senha")
var teste = leia.questionInt();

if (teste == senha){
    console.log("Acesso permitido","\n")

}
else {
    console.log("Acesso Negado","\n")
}

console.log("Tente novamente")
}