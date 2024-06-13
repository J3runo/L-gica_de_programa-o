import leia from "readline-sync"

console.log(" Doe para o criança esperanca")
console.log("\\-------x----------x---------/","\n")
console.log(" Para doar R$:10 tecle 1","\n","Para doar R$:25 tecle 2","\n","Para doar R$:50 tecle 3","\n","Para doar qualquer valor tecle 4 ")
var tecle = leia.questionInt()



switch(tecle){
    case 1:
    console.log("Obrigado por doar R$ 10 para o CRIANÇA ESPERANÇA" )
    console.log("=================================================")
    break;
    case 2:
    console.log("Obrigado por doar R$ 25 para o CRIANÇA ESPERANÇA" )
    console.log("=================================================")
    break;
    case 3:
    console.log("Obrigado por doar R$ 50 para o CRIANÇA ESPERANÇA" )
    console.log("=================================================")
    break;
    case 4:
    console.log("Digite o valor desejado")
    var qualquervalor = leia.questionFloat("R$: ")
    console.log("Obrigado por doar para o CRIANCA ESPERANÇA", "\n", "O valor de R$",qualquervalor, "foi doado com sucesso!!!")
    console.log("============================================")
    break;
    default:
        console.log("Opção Invalida Tente novamente")
}

