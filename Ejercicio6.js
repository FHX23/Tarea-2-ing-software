function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}
// Función que convierte un string a minúsculas
function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}

// Función que recibe dos números y los resta
function restar(numero1, numero2) {
    return numero1 - numero2;
}

// Función que recibe dos números y los divide
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

// Función que recibe dos números y los multiplica
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// Función que recibe un string y devuelve la longitud del string
function obtenerLongitud(texto) {
    return texto.length;
}

// Pruebas
console.log(convertirAMayusculas('hola mundo')); // HOLA MUNDO
console.log(convertirAMinusculas('HOLA MUNDO')); // hola mundo
console.log(restar(20, 10)); // 10
console.log(dividir(20, 5)); // 4
console.log(multiplicar(10, 5)); // 50
console.log(obtenerLongitud('hola mundo')); // 10

