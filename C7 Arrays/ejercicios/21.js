function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  if (array.includes("Enero","Marzo","Noviembre")) {return array.filter(elemento => elemento === "Enero" || elemento === "Marzo" || elemento === "Noviembre");}
  else { return "No se encontraron los meses pedidos";}

  }

  console.log(mesesDelAño(["Diciembre","Marzo","Junio","Enero","Abril","Noviembre"]))

  module.exports = mesesDelAño;
