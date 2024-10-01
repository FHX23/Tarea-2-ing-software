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
  

let nombre = usuario.nombre;
let apellido = usuario.apellido;
let ciudad = usuario.direccion.ciudad;

let primerinteres = usuario.intereses[0];

let email = usuario.contactos.email;
let instagram = usuario.contactos.redesSociales.instagram;

const calleUsuario = usuario.direccion.calle;
const numeroUsuario = usuario.direccion.numero;

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Ciudad: " + ciudad);
console.log("Primer Interés: " + primerinteres);
console.log("Email: " + email);
console.log("Instagram: " + instagram);
console.log("Calle: " + calleUsuario);
console.log("Número: " + numeroUsuario);
