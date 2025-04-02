// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
const userName = window.prompt("BIENVENIDO INGRESA TU NOMBRE");
let librosLeidos = ['Jack', 'Dorian Grey'];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log(`Los libros que has leído ${userName} son:`, librosLeidos);
}