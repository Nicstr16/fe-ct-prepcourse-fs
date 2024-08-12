function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find(Element => typeof Element === "string" && Element.length >=5);
    
  } 
console.log (obtenerPrimerStringLargo([
  'this',
  'is',
  'a',
  'test',
  'with',
  'a',
  'long',
  'string',
]))

module.exports = obtenerPrimerStringLargo;
