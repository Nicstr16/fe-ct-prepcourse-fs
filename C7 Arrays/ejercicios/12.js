function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(function(elemento){return elemento.toUpperCase();});
}
console.log(convertirStringAMayusculas(['hello', 'world']))
module.exports = convertirStringAMayusculas;
