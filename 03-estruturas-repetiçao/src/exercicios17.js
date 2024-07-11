import leia from "readline-sync"


var nomeMaiorMedia;
var maiorMedia;
var i = 1

while(i<3){
    var nome = leia.question("digite o nome: ")
    var somaNotas =0.0
    for(var j = 1;j<=3; j++){
        somaNotas += leia.questionFloat("Nota ")
    }
    var media = somaNotas/3
    if(maiorMedia === undefined || media > maiorMedia){
        maiorMedia = media
        nomeMaiorMedia = nome
    }
    i++
}
console.log("Maior Media "+maiorMedia)
console.log("Nome Maior Media "+ nome)