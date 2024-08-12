function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((acumulador,numero)=> acumulador + numero,0);
  return suma/resultadosTest.length;
}

console.log(promedioResultadosTest([1,2,3,4]))
module.exports = promedioResultadosTest;
