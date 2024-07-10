var lista = [];
var lista2 = [];
var lista3 = [];
var listaF = [];

for (var i = 0; i < 9; i++) {
  lista.push(parseInt(Math.random() * 100));
  lista2.push(parseInt(Math.random() * 100));
  lista3.push(parseInt(Math.random() * 100));
  if (i < 3) {
    listaF.push("1°: "+lista[i]);
  } else if (i >= 3 && i < 6) {
    listaF.push("2°: "+lista2[i]);
  } else {
    listaF.push("3°: "+lista3[i]);
  }
}

console.table( lista);
console.log("---------------------------------");
console.table(lista2);
console.log("---------------------------------");
console.table( lista3);
console.log("---------------------------------");


console.table(listaF);

