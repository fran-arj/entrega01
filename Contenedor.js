class Contenedor {
    constructor(file) {
        this.file = file;
      }
// importar fs
static fs = require('fs');

// Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
save(objDato) {
  let contenidoActual = this.getAll();
  const ids = contenidoActual.map((e) => e.id);
  const maxID = Math.max(...ids) + 1;
  objDato.id = maxID;
  contenidoActual = [...contenidoActual, objDato];
  // convertir para guardar
  const objDatoParsed = JSON.stringify(contenidoActual, null, 2);
  // Importar promises
  const fsPromises = require('fs').promises;
  //autoejecutar async / await
  (async () => {
    try {
      await fsPromises.writeFile(this.file, objDatoParsed);
    } catch (error) {
      return error;
    }
  })();
  return maxID;
}


}
