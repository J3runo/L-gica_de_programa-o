import leia, { questionInt } from "readline-sync"

var aut = "sim"
var auto = "nao"
var idade = leia.question("Idade" + "\n")
if(idade >= 18){
    var nome = leia.question("Nome completo" + "\n")
    console.log("Pode viajar " + nome)
    }

else {
    var per = leia.question("Permisao sim ou nao? " + "\n")
    if(per === aut ){
        var nomecompleto = leia.question("Nome completo " + "\n")
        console.log("Pode viajar " + nomecompleto)
    }
    else if(per === auto) {
        console.log("Não Autorizado! " + "\n")
    
    }
    else {console.log("Opção invalida")
}
}
