import leia from "readline-sync"

var cont 

for (cont = 0; cont < 5; cont ++){



console.log("Digite a placa do veiculo")
var placa = leia.questionInt() 


    switch(placa){
        case 0||1:
        console.log("Nao pode rodar na segunda-Feira ")
        console.log("--------------------------------------","\n")
        break;
        case 2||3:
            console.log("Nao pode rodar na Terca-Feira ")
            console.log("--------------------------------------","\n")
        break;
        case 3:
            console.log("Nao pode rodar na Quarta-Feira ")
            console.log("--------------------------------------","\n")
        break;
        case 4:
            console.log("Nao pode rodar na Quinta-Feira ")
            console.log("--------------------------------------","\n")
        break;
        case 5:
            console.log("Nao pode rodar na sexta-Feira ")
            console.log("--------------------------------------","\n")
        break;
        default:
        console.log("Placa invalida")
    }
}

