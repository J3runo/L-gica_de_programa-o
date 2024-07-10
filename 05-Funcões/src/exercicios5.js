

var lista = []
var cont=0 
var cont1 =0, cont2 =0, cont3 =0, cont4 =0, cont5 =0, cont6 =0


for(var i=0; i<1000; i++){
    lista[i] = parseInt(Math.random() * 6) +1;
    cont++
}

for(var i = 0; i<lista.length; i++){
    if(lista[i]===1){
        cont1 += 1
    }else if(lista[i]===2){
        cont1 += 1
    }else if(lista[i]===3){
        cont1 += 1
    }else if(lista[i]===4){
        cont1 += 1
    }else if(lista[i]===5){
        cont1 += 1
    }else if(lista[i]===6){
        cont1 += 1
    }

}


console.log(lista)
console.log(cont1)
console.log(cont2)
console.log(cont3)
console.log(cont4)
console.log(cont5)
console.log(cont6)
