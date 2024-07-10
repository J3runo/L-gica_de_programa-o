

var matriz = [];
for (var i = 0; i < 8; i++) {
    matriz[i] = [];
}


for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
        matriz[i][j] = parseInt(Math.random() * 100);
       }
}
var maior = []
for(var i=0; i<matriz.length; i++){
    for (var j = 0; j < matriz[i].length; j++){
    if(matriz[i][j]>10){
        maior.push(" "+matriz[i][j])
        }
    }
}


console.table(matriz)
console.table("Numeros Maiores que 10: "+ maior)
console.log("--------------------------------------")




