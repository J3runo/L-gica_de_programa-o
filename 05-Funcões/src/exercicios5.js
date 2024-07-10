

var lista = []

var cont=0, cont1 =0, cont2 =0, cont3 =0, cont4 =0, cont5 =0, cont6 =0


for(var i=0; i<1000; i++){
    lista[i] = parseInt(Math.random() * 6) +1;
    cont++
}

for(var i = 0; i<lista.length; i++){
    if(lista[i]===1){
        cont1++
    }else if(lista[i]===2){
        cont2++
    }else if(lista[i]===3){
        cont3++
    }else if(lista[i]===4){
        cont4++
    }else if(lista[i]===5){
        cont5++
    }else if(lista[i]===6){
        cont6++
    }
}
var c = 1000 / 100
var cResult = c * cont1  
var cResult = c * cont2  
var cResult = c * cont3  
var cResult = c * cont4  
var cResult = c * cont5  
var cResult = c * cont6    


console.log(lista)
console.log("1",cont1,"por",cResult + "%")
console.log("2",cont2,"por",cResult + "%")
console.log("3",cont3,"por",cResult + "%")
console.log("4",cont4,"por",cResult + "%")
console.log("5",cont5,"por",cResult + "%")
console.log("6",cont6,"por",cResult + "%")
