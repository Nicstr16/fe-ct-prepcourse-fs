function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  //let suma=0
  //for (let i = 0;i< arrayOfNums.length; i++) {
  //  suma += arrayOfNums[i];
  //}
  //return suma;

  return arrayOfNums.reduce((acumulador,numero)=>acumulador + numero,0);

}

console.log(agregarNumeros([1,2,3,4]))
module.exports = agregarNumeros;
