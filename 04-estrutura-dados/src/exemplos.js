import leia from "readline-sync"

/*var nome = [n]

 var n =leia.question("nome\n")

 console.log(nome[0])
*/

var lista = [""]
var listaI = []


for(var i = 0; i<3;i++){
    var nome = leia.question("nome ")
    var idade = leia.question("idade ")
    lista[i] = nome 
    listaI[i] = idade 

}


for (var valor of lista){
    if(valor.includes("no")){//busca o no
        console.log(valor)
    }
}

lista.forEach(valor =>){
    console.log(valor)
}

var listaFormatada = lista.join(', ' )
var listaIFormatada = listaI.join(', ' )

console.log(listaFormatada,"\n", listaIFormatada)