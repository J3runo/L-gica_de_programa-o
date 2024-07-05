import leia from "readline-sync"


/*function mostrar(){
    var nome = leia.question("Digite o nome\n")
    console.log("Ola "+ nome)
}

//----------------------------------------------------------
function somar(num1,num2){
    var result = num1 + num2
    console.log("O RESULTADO É : " + result)
}
var num1= leia.questionInt("DIGITE O NUMERO\n")
var num2= leia.questionInt("DIGITE O NUMERO\n")
somar(num1,num2)
//----------------------------------------------------------

function subtrair(num1,num2){
    
    var result = num1 - num2
    console.log("O RESULTADO É : " + result)
}
subtrair(30,20)
*/
//----------------------------------------------------------

function multi(num1,num2){
    return num1 * num2
}

multi = leia.questionInt("numero\n")
var resutMulti = multi()

console.log(resutMulti)