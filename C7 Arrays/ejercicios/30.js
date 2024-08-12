function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let numerosRevisados = [];
  for (let i=0; i<numeros.length; i++){
    if (numerosRevisados.includes(numeros[i])){
      return numeros [i];
    }
    numerosRevisados.push(numeros[i]);
  }
}

module.exports = encontrarElementoRepetido;

console.log(encontrarElementoRepetido([1, 2, 3, 3, 4, 5]))
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 5]))
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 1]))
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 6]))