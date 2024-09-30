# Tarea-2-ing-software

## Ejercicios

1 Variables y Tipos de Datos

1. Declara una variable llamada `nombre` y asígnale un valor de tipo `string`.
2. Declara una variable llamada edad y asígnale un valor de tipo `number`.
3. Declara una variable llamada `puedoConducir` y asígnale un valor de tipo `boolean` .
4. Para cada variable se debe imprimir por consola el resultado de cada variable declarada.
5. Para cada variable se debe imprimir el tipo de dato que es por consola.

Ejemplo
const apellido = 'Salazar';
console.log(apellido); // Salazar
console.log(typeof apellido); // String

2 Operadores Aritméticos

Dado los siguiente valores numéricos:

```jsx
const numero1 = 20;
const numero2 = 40;
```

Se debe hacer lo siguiente:

1. `Suma (+)`: Suma numero1 y numero2. Muestra el resultado por consola.
2. `Resta (-)`: Resta numero1 y numero2. Muestra el resultado por consola.
3. `Multiplicación (*)`: Multiplica numero1 y numero2. Muestra el resultado por consola.
4. `División (/)`: Divide numero1 y numero2. Muestra el resultado por consola.
5. `Modulo (%)`:  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.

3  Operadores de asignación y comparación

Dado los siguientes valores numéricos:

```jsx
const numero1 = 15;
const numero2 = 20;
const numero3 = '25';
```

1. Muestre por consola si el numero1 es mayor o igual que numero2.
2. Muestre por consola si el numero1 es menor o igual que numero2.
3. Muestre por consola si el numero1 es menor que numero3.
4. Muestre por consola si el numero3 es menor que numero2.
5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
6. Muestre por consola si el numero1 es estrictamente igual al numero2.

<aside>
💡 Recordar que es diferente `==` y `===` .

</aside>

4 Condicionales

Dado los siguientes valores numéricos:
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
​
Imprimir en consola el número mayor de los tres.
Imprimir en consola el número menor de los tres.
Imprimir en consola si el numero1 es par o impar.
Imprimir en consola si el numero2 es par o impar.
Imprimir en consola si el numero3 es par o impar.
Imprimir en consola si el numero1 es múltiplo de 5.
Imprimir en consola si el numero2 es múltiplo de 5.
Imprimir en consola si el numero3 es múltiplo de 5.
Ejemplo
const numero1 = 30
const numero2 = 20

if (numero1 > numero2) {
  console.log('numero1 es mayor que numero2')
}

5 Ciclos

1. Imprimir en consola los números del 1 al 10.
2. Imprimir en consola los números del 10 al 1.
3. Imprimir en consola los números del 1 al 10 pero solo los pares.
4. Imprimir en consola los números del 1 al 10 pero solo los impares.
5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

### Ejemplo
for (let i = 0; i < 10; i++) {
  console.log(i)
}
// En consola:
  // 0
  // 1
  // 2
  // ...
  // 9

6 Funciones

Crea una función que reciba un string y retorne el string en mayúsculas.
Crea una función que reciba un string y retorne el string en minúsculas.
Crear una función que reciba como parámetro 2 números y los reste.
Crear una función que reciba como parámetro 2 números y los divida.
Crear una función que reciba como parámetro 2 números y los multiplique.
Crear una función que reciba un string y devuelva la longitud del string.

Ejemplo
function suma (numero1, numero2) {
  return numero1 + numero2
}

  const resultado = suma(10, 20)
  console.log(resultado) // 30

7  Arrays

Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
Ejemplo
const numeros = [1, 2, 3, 4, 5]
// Agregar un elemento al final del arreglo
numeros.push(6)
console.log(numeros) // [1, 2, 3, 4, 5, 6]

// Eliminar el ultimo elemento del arreglo
numeros.pop()
console.log(numeros) // [0, 1, 2, 3, 4, 5]

8 Objetos

1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

### Ejemplo

---

Crear un objeto llamado computador y definir sus propiedades, las cuales son:

- Teclado
- Pantalla
- Mouse
- Marca
- Enciende?
- Precio

const computador = {
		teclado: "Redragon Kurama",
		mouse: "Logitech G203",
		marca: "ASUS",
		enciende: true,
		precio: 450000
}

console.log(computador); // {teclado: 'Redragon Kurama', mouse: 'Logitech G203', marca: 'ASUS', enciende: true, precio: 450000}
console.log(computador.teclado); // Redragon Kurama
console.log(computador.mouse); // Logitech G203
console.log(computador.marca); // ASUS
console.log(computador.enciende); // true
console.log(computador.precio); // 450000
console.log(typeof computador); // object
console.log(typeof computador.teclado); // string
console.log(typeof computador.mouse); // string
console.log(typeof computador.marca); // string
console.log(typeof computador.enciende); // boolean
console.log(typeof computador.precio); // number

9 Desestructuración en JavaScript

1. Utiliza desestructuración para extraer las propiedades `nombre`, `apellido` y `ciudad` del objeto `usuario`.
2. Extrae el primer interés del arreglo `intereses` en una variable llamada `primerInteres`.
3. Extrae el `email` y `linkedin` de los contactos del usuario.
4. Extrae `calle` y `numero` de la dirección, pero renómbralos como `calleUsuario` y `numeroUsuario`.

### Ejercicio

---

Tienes un objeto que representa a un usuario con su información personal, contactos, y algunos intereses. Necesitas extraer varios valores utilizando desestructuración para utilizarlos posteriormente en el código.

const usuario = {
  nombre: 'Diego',
  apellido: 'Salazar',
  edad: 21,
  direccion: {
    calle: 'Villa los corales',
    numero: 123,
    ciudad: 'Concepción',
    pais: 'Chile'
  },
  contactos: {
    telefono: '123456789',
    email: 'diegosalazar@example.com',
    redesSociales: {
      instagram: '@diego',
    }
  },
  intereses: ['Programación', 'Música', 'Ajedrez']
};

1. xtrae el nombre, el apellido y la ciudad en variables separadas.
2. Extrae el primer interés en una variable llamada "primerInteres".
3. Extrae el email y el instagram en variables separadas.
4. Extrae la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario".
5. Imprime en consola todas las variables que extrajiste.

// Diego
// Salazar
// Concepción
// Programación
// diegosalazar@example.com
// @diego
// Villa los corales
// 123