import leia from 'readline-sync'

var n = leia.questionInt("NUMERO\n")

for(var i =1; i<=10; i++){
    
    var resut = n * i
    console.log(n, "x", 1,"=", resut )

}