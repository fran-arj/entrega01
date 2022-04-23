class Usuario{
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        const fullname = `Nombre: ${this.nombre} Apellido: ${this.apellido} `;
        return fullname;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    getCountMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        const libro = {
            nombre,
            autor
        }
        this.libros.push(libro);
    }

    getBookNames(){
      const bookNames = this.libros.map(item => item.nombre);
      return bookNames;  
    }
}

module.exports = Usuario;