// Función que recibe un array de números y retorna la sumatorio
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// Función que recibe un array de números y retorna el promedio 
function promedioArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Función que toma un array de strings y devuelve un nuevo array con las letras en mayúsculas
function convertirArrayAMayusculas(strings) {
    let mayusculas = [];
    for (let i = 0; i < strings.length; i++) {
        mayusculas.push(strings[i].toUpperCase());
    }
    return mayusculas;
}

// Función que toma un array de números y devuelve un nuevo array con solo los números pares
function filtrarNumerosPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

// Pruebas
console.log(sumarArray([1, 2, 3, 4])); // 10
console.log(promedioArray([1, 2, 3, 4])); // 2.5
console.log(convertirArrayAMayusculas(['hola', 'mundo'])); // ['HOLA', 'MUNDO']
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
