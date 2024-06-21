import leia from "readline-sync";

var maior ;
var menor ;

for(var i=0; i<=5; i++){
    var n = leia.questionFloat("DIGITE UM NUMERO\n")
    if(i === 0 ){
        menor = n
        maior = n
    }
    if(n > maior){
        maior = n
    }
    else if(n < menor){
        menor = n
    }
    }
console.log(menor)
console.log(maior)




