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
    addMascota(string){
        //return void;
    }
    countMascotas(){
        //return Number;
    }
    addBook(/*String,String*/){
        //return void;
    }
    getBookName(){
        //return [];
    }
}

module.exports = Usuario;

