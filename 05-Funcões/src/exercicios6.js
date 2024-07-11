import leia from "readline-sync"

var gabarito = []
var respostaProva = []
var nota = 0

for(var i = 0; i <10;i++){
    gabarito [i]= leia.question("INFORME A RESPOSTA DA QUESTAO "+ (i + 1)+"\n")
}

console.log("DIGITE SUAS RESPOSTAS")
for (var i=0;i<10;i++){
    respostaProva[i]= leia.question("INFORME A RESPOSTA DA QUESTÃO "+(i+1)+"\n")
}

for(var i=0;i<gabarito.length;i++){
    if(gabarito[i]===respostaProva[i]){
        nota++
    }
}



console.table(gabarito)
console.table(respostaProva)
console.log("Sua nota foi: "+nota)
console.log("--------------------------------")