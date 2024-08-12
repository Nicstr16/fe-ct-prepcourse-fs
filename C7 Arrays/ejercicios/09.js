function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   return array [Math.floor(Math.random()*array.length)];
}
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5]))
module.exports = obtenerElementoAleatorio;
