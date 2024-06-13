import leia from "readline-sync"
var cont 

for (cont = 0; cont < 5; cont ++){

console.log("Digite o mes")
var mes = leia.questionInt()



switch(mes){
    case 1://janeiro
        console.log("31 Dias")
        console.log("=================","\n")
    break;

    case 2: //fevereiro
        console.log("29 Dias")
        console.log("=================","\n")
    break;

    case 3:// marco
        console.log("31 Dias")
        console.log("=================","\n")
    break;

    case 4://abril:
        console.log("30 Dias")
        console.log("=================","\n")
    break;

    case 5://maio:
        console.log("31 Dias")
        console.log("=================","\n")
    break;

    case 6://junho:
        console.log("30 Dias")
        console.log("=================","\n")
    break;

    case 7://julho:
        console.log("31 Dias")
        console.log("=================","\n")
    break;

    case 8://agosto:
        console.log("31 Dias")
        console.log("=================","\n")
    break;

    case 9://setembro:
        console.log("30 Dias")
    break;

    case 10://outubro:
        console.log("31 Dias")
    break;

    case 11://novembro:
        console.log("30 Dias")
    break;

    case 12://dezembro:
        console.log("31 Dias")
    break;

    default:
        console.log("Mes invalido")

}
}








