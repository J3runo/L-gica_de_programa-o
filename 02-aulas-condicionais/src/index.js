import leia from "readline-sync"



console.log("Digite o valor da primeira corrida");
var corrida1 = leia.questionFloat();
console.log("Digite o valor da segunda corrida");
var corrida2 = leia.questionFloat();
console.log("Digite o valor da terceira corrida");
var corrida3 = leia.questionFloat();
console.log("Digite o valor da quarta corrida");
var corrida4 = leia.questionFloat();
console.log("Digite o valor da quinta corrida");
var corrida5 = leia.questionFloat();



var valorbruto  = corrida1 + corrida2 + corrida3 + corrida4 + corrida5
var valorliquido = valorbruto - (valorbruto* 0,25)



console.log("o valor liquido é R$", valorliquido);