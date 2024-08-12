function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map (number => number*(array.indexOf(number)));

}

console.log(multiplicarElementosPorIndice([]))
module.exports = multiplicarElementosPorIndice;
