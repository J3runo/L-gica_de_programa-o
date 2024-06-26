import leia from "readline-sync"

var cont = 0;  

while(n != 0){
    var n = leia.questionInt("digite um numero\n")
    if(n>100 && n<200){
        cont++

    }
}
console.log(cont)