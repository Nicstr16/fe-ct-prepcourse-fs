function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  return secuencia.find(number=> number%n===0);
}

console.log(encontrarPrimerMultiploDeN(3,[1, 2, 3, 4, 5, 6, 7, 8, 9]))
module.exports = encontrarPrimerMultiploDeN;