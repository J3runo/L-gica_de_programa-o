import leia from "readline-sync"

var val = 1.50;
var joao = 1.40;
var ano = 0;



while(val >= joao){
   
    val += 0.02;
    joao += 0.03;
    ano++;
}
console.log("joao sera maior que valentina em ", ano,"anos")
console.log("altura valentina",val.toFixed(2))
console.log("altura joao",joao.toFixed(2))