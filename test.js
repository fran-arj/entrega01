const Usuario = require('./Usuario');

//instancia de Usuario
const user1 = new Usuario("Carlos","Perez",[],[]);
console.log(user1.getFullName());

//agrego mascotas
user1.addMascota("Clarita");
user1.addMascota("Tommy");
user1.addMascota("Fideo");

console.log(user1.getCountMascotas());

//agrego libros
user1.addBook("Rayuela", "Cortazar");
user1.addBook("El Aleph", "JL Borges");

console.log(user1.getBookNames());