function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let suma=num
  do{ suma= suma + 5;} while (suma-num<40);
  return suma;
}
console.log(doWhile(8))
module.exports = doWhile;