import leia from "readline-sync"


var par = 0
var impar = 0
var n;
for(var i = 0; i<6; i++) {
    n = leia.questionInt("Digite um numero\n")
    if (n % 2 === 0 ){
        if (par === 0){
            par = n
        }
        else{
            par *= n 
        }
        
    }
    else{
        impar += n
    }
}
console.log("\n",par)
console.log("\n",impar)