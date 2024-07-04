import leia from "readline-sync"

var tempMax = []
var tempMin = []
var aux = 0

for(var i = 1; i<=30;i++){
    var max = Math.random()*12 + 20
    var min = Math.random()*12 + 20
    if(min > max){
        aux = min
        min = max
        max = aux
} 
    tempMax.push("dia "+ i + ": "+ max.toFixed(1)+"°C")
    tempMin.push("dia "+ i + ": "+ min.toFixed(1)+"°C")
}
for(var i=0; i <30; i++){
console.log("MAX: ",tempMax[i],"  MIN: ",tempMin[i])
console.log("xxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx")
}
