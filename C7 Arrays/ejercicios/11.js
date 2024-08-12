function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map(function(number){return number*2;});
}

console.log(duplicarElementos([1, 2, 3]))
module.exports = duplicarElementos;
