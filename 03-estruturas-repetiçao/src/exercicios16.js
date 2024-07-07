import leia from "readline-sync";

var n = leia.questionInt("numero\n");
for (var i = n; i > 1; i--) {
  if (n > 1) {
    var result = n * i;
  } else "numero invalido";
}
console.log(result);
