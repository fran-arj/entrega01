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
  const maxID = (ids.length>0) ? (Math.max(...ids) + 1) : 1;
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

// Recibe un id y devuelve el objeto con ese id, o null si no está.
getById(idDato) {
  if (Contenedor.fs.existsSync(this.file)) {
    const contenido = Contenedor.fs.readFileSync(this.file, 'utf-8');
    const contenidoParsed = JSON.parse(contenido);
    const contenidoID = contenidoParsed.find((e) => e.id === idDato);
    return contenidoID === undefined ? null : contenidoID;
  } else {
    return null;
  }
}
// Devuelve un array con los objetos presentes en el archivo.
getAll() {
  if (Contenedor.fs.existsSync(this.file)) {
    const contenido = Contenedor.fs.readFileSync(this.file, 'utf-8');
    const contenidoParsed = contenido === '' ? [] : JSON.parse(contenido);
    return contenidoParsed;
  } else {
    return [];
  }
}
//Elimina del archivo el objeto con el id buscado.
deleteById(idDato) {
  if (Contenedor.fs.existsSync(this.file)) {
    const contenido = Contenedor.fs.readFileSync(this.file, 'utf-8');
    const contenidoParsed = JSON.parse(contenido);
    const contenidoFilter = contenidoParsed.filter((e) => e.id !== idDato);
    // convertir para guardar
    const objDatoSave = JSON.stringify(contenidoFilter, null, 2);
    const fsPromises = require('fs').promises;
    //autoejecutar async / await
    (async () => {
      try {
        await fsPromises.writeFile(this.file, objDatoSave);
      } catch (error) {
        return error;
      }
    })();
    return true;
  } else {
    return false;
  }
}
// Elimina todos los objetos presentes en el archivo.
deleteAll() {
  if (Contenedor.fs.existsSync(this.file)) {
    // para guardar
    const objDatoSave = '';
    const fsPromises = require('fs').promises;
    //autoejecutar async / await
    (async () => {
      try {
        await fsPromises.writeFile(this.file, objDatoSave);
      } catch (error) {
        return error;
      }
    })();
    return true;
  } else {
    return false;
  }
}
}

module.exports = Contenedor;
