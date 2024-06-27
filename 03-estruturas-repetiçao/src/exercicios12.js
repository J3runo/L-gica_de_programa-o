import leia from "readline-sync"

var n = leia.questionInt("DIGITE UM NUMERO \n")
var result = 1

while(n >0){
    result = result * n
    console.log(result,"\n")
    n--
}
console.log("fatorial é " + result)