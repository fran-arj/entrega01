// -------------------------------------
// ------------- test ------------------
// --- instancia de prueba ---
const miArchivo = 'productos.txt';
const misDatos = new Contenedor(miArchivo);

// --- datos ejemplo ---
const data1 = {
tittle: 'Tablet',
price: '412',
thumbnail: 'tablet.png',
};
const data2 = {
tittle: 'asdassa',
price: '999',
thumbnail: 'adasd.png',
};

// --- save(Object): Number ---
const saveID = misDatos.save(data1);
console.log('saveID', saveID);

// --- getById(Number): Object ---
/* const resultID = misDatos.getById(1);
console.log('resultID', resultID); */

// --- getAll(): Object[] ---
/* const resultAll = misDatos.getAll();
console.log('resultAll', resultAll); */

// --- deleteById(Number): boolean ---
/* const deleteID = misDatos.deleteById(1);
console.log('deleteID', deleteID); */

// --- deleteAll(): boolean ---
/* const deleteAll = misDatos.deleteAll();
console.log('deleteAll', deleteAll); */