import leia, { questionInt } from "readline-sync"


var time1 = leia.question("Nome do time1" + "\n")
var time2 = leia.question("Nome do time2" + "\n")
var Gols1 = leia.questionInt(" Quantidade de Gols do " + time1 + "\n")
var Gols2 = leia.questionInt(" Quantidade de Gols do " + time2 + "\n")


var dif = (Gols1-Gols2)  * -1


if(dif === 0 ){
    console.log("EMPATE")
}
else if(dif === 1 || dif === 2 || dif === 3 ){
    console.log("PARTIDA NORMAL")
}
else if(dif > 4){
    console.log("GOLEADA")
}


