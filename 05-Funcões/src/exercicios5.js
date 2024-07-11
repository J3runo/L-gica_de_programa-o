

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


var c = 1000 
var cResult = cont1 /  c *100, cResult2 =cont2 / c *100, cResult3 = cont3 / c *100  
var cResult4 = cont4  / c *100,cResult5 = cont5  / c *100, cResult6 = cont6    / c *100


console.log(lista)
console.log("1",cont1,"por",cResult.toFixed(2) + "%")
console.log("2",cont2,"por",cResult2.toFixed(2) + "%")
console.log("3",cont3,"por",cResult3.toFixed(2) + "%")
console.log("4",cont4,"por",cResult4.toFixed(2) + "%")
console.log("5",cont5,"por",cResult5.toFixed(2) + "%")
console.log("6",cont6,"por",cResult6.toFixed(2) + "%")
console.log("-------------------------------")

if( cResult > 17){
    console.log("DADO 1 VICIADO "+cResult.toFixed(2)+" % " )
    console.log("-------------------------------")
}if(cResult2 > 17){
    console.log("DADO 2 VICIADO "+cResult2.toFixed(2)+" % ")
    console.log("-------------------------------")
}if(cResult3 > 17 ){
    console.log("DADO 3 VICIADO "+cResult3.toFixed(2)+" % ")
    console.log("-------------------------------")
}if(cResult4 > 17){
    console.log("DADO 4  VICIADO "+cResult4.toFixed(2)+" % ")
    console.log("-------------------------------")
}if(cResult5 > 17){
    console.log("DADO 5 VICIADO "+cResult5.toFixed(2)+" % ")
    console.log("-------------------------------")
}if(cResult6 > 17){
    console.log("DADO 6 VICIADO "+cResult6.toFixed(2)+" % ")
    console.log("-------------------------------")
}
else if(cResult<17&&cResult2<17&&cResult3<17&&cResult4<17&&cResult5<17&&cResult6<17){
    console.log("NÃO HÁ DADO VICIADO!!!")
    console.log("-------------------------------")
}

        //Do Professor
/*
var vetor = []

var valor = [0,0,0,0,0,0]


for(var i=0; i<1000; i++){
    vetor[i] = parseInt(Math.random() * 6) +1;
}
console.table(vetor)
for(var i=0; i<vetor.length; i++){
    valor[vetor[i]]++
}
console.log(valor)

var porcetLados = []

for(var i=1; i<valor.length;i++){
    porcetLados[i] = 100/vetor.length * valor[i]
}

console.log(porcetLados)



*/