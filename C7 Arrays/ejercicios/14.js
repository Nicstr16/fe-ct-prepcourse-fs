function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayores = array.filter(number => number>10);
  return mayores.length;
}
console.log(contarElementosMayoresA10([1, 2, 3, 4, 5]))
module.exports = contarElementosMayoresA10;
