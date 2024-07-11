//maior numero no array
var lista = [];
var maior = 0;

for (var i = 0; i < 50; i++) {
  lista[i] = parseInt(Math.random() * 100);
}

for (var J = 0; J < lista.length; J++) {
  if (lista[J] > maior) {
    maior = lista[J];
  }
}

console.table(lista);
console.log(maior);
