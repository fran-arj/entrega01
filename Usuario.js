class Usuario{
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre;
        this.apellido;
        this.libros;
        this.mascotas;
    }

    getFullName(){
        const fullname = `Nombre: ${nombre} Apellido: ${apellido} `;
        return fullname;
    }
    addMascota(string){
        return void;
    }
    countMascotas(){
        return Number;
    }
    addBook(String,String){
        return void;
    }
    getBookName(){
        return [];
    }
}

const user1 = new Usuario("Carlos","Perz","","");
console.log(user1.getFullName);