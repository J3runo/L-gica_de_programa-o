var lista = [];
var duplicados = [];

for (var i = 0; i < 10; i++) {
  lista.push(parseInt(Math.random() * 15));
}
console.log("\nLista gerada: " + lista);
console.log("-----------------------------------------------");

for (var i = 0; i < lista.length; i++) {
  for (var j = i + 1; j < lista.length; j++) {
    if (lista[i] === lista[j]) {
      duplicados.push(lista[i]);
    }
  }
}

if (duplicados > 0) {
  console.log("Valores duplicados encontrados: " + duplicados);
  console.log("-----------------------------------------------");
} else {
  console.log("Não foram encontrados valores duplicados.");
  console.log("-----------------------------------------------");
}
