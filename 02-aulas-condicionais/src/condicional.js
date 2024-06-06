import leia from "readline-sync"

/*
console.log("Digite um numero");
    var n1 = leia.questionFloat();



while (n2 != n1) {


    console.log("chute um numero");
    var n2 = leia.questionFloat();



    if (n2 > n1) {

        console.log("Um numero menor ","\n")
    }
    else if (n2 < n1) {

        console.log("Um numero maior ","\n")


    }

}
console.log("Acertou mizeravi!!!")
console.log("x-----x------x-----x")
*/
console.log("Digite quantos dias trabalhou");
    var salario = leia.questionFloat();


switch(salario){
    case 1:
        console.log("Recebe 200 reais ")
        break;
    case 2:
        console.log("Recebe 400 reais")
        break;
    case 3:
        console.log("Recebe 600 reais")
        break;
    case 4:
        console.log("Recebe 800 reais")
        break;
    case 5:
        console.log("Recebe 1000 reais")
        break;
    default:
        console.log("Recebe mais de 1000 reais")

}
