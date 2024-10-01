// Constructor de Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;

    // Método para mostrar la información de la persona
    this.mostrarInformacion = function() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
    };
}

// Crear una instancia del objeto Persona
const persona1 = new Persona('Juan', 30, 'Masculino');

// Mostrar la información de la persona por consola
persona1.mostrarInformacion();

// Crear un objeto caja utilizando const
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100, // en hojas
    fotografias: 20,
    enBuenEstado: true
};

// Imprimir el objeto entero por consola
console.log(caja);

// Imprimir cada propiedad del objeto y su tipo de dato
console.log(`Cuadernos: ${caja.cuadernos}, Tipo: ${typeof caja.cuadernos}`); // number
console.log(`Lápices: ${caja.lapices}, Tipo: ${typeof caja.lapices}`); // number
console.log(`Papel: ${caja.papel}, Tipo: ${typeof caja.papel}`); // number
console.log(`Fotografías: ${caja.fotografias}, Tipo: ${typeof caja.fotografias}`); // number
console.log(`En buen estado: ${caja.enBuenEstado}, Tipo: ${typeof caja.enBuenEstado}`); // boolean
