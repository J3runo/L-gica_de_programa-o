var lista = [];
var lista2 = [];
var lista3 = [];
var listaF = [];

for (var i = 0; i < 9; i++) {
  lista.push(parseInt(Math.random() * 100));
  lista2.push(parseInt(Math.random() * 100));
  lista3.push(parseInt(Math.random() * 100));
  if (i < 3) {
    listaF.push("primera lista " + lista[i]);
  } else if (i >= 3 && i < 6) {
    listaF.push("Segunda lista " + lista2[i]);
  } else {
    listaF.push("Terceira lista " + lista3[i]);
  }
}

console.log("lista " + lista);
console.log("---------------------------------");
console.log("lista2 " + lista2);
console.log("---------------------------------");
console.log("lista3 " + lista3);
console.log("---------------------------------");

for (var i = 0; i < listaF.length; i++) {
  console.log(listaF[i]);
  console.log("---------------------------------");
}
