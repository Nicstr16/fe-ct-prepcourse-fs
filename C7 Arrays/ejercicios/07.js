function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (array.every(Element => typeof Element === "string")) {return array.sort();}
  else if (array.every(Element => typeof Element === "number")) {return array.sort((a,b) => a-b);}
  else return array;
  
}
console.log(ordenarArray(['perro', 'gato', 'elefante', 'jirafa', 'mono']))
module.exports = ordenarArray;
