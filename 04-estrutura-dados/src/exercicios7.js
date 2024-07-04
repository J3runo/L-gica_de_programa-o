import leia from "readline-sync"
var pai = []
var mae = []
var filho = []

for(var i = 0; i<=50; i++ ){
    pai.push (parseInt(Math.random()*100))
    mae.push (parseInt(Math.random()*100))
    if(i %2===0){
        filho.push(" Pai: "+pai[i])
    }else{
        filho.push(" Mae: "+mae[i])
    }
}

console.log("pai|| "+pai)
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")
console.log("mae|| "+mae)
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")
console.log("filho|| "+filho,"\n")
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n")