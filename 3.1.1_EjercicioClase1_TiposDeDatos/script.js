console.log("Hola mundo");

let nombre = "Malinali";// Declarar una variable llamada nombre  y le asigno el valor de Malinali.
console.log(nombre + ": Esta es una variable de tipo 'String'"); // Imprimir el valor de la variable nombre.

nombre = "Daniel"; // Reasignando el valor de la variable nombre.
console.log(nombre);

// Number (números):
let edad = 26; // Entero
let estatura = 1.7; // Numero de punto decimal
let gradosCentigrados = -10.2 // Negativos

console.log(edad + ": Esta es una variable de tipo 'Number' (entero)");
console.log(estatura + ": Esta es una variable de tipo 'Number' (decimal)");
console.log(gradosCentigrados) + ": Esta es una variable de tipo 'Number' (decimal negativo)";

// Concatenación: Es una operacion que nos permite crear una cadena de texto a partir de diferentes valores.
let mensajeFinal = nombre + " tiene " + edad + " años ";
console.log(mensajeFinal + ": Concatenación de variables de tipo 'String' y 'Number'");

// const = constante no se puede reasignar.
const GRAVEDAD = 9.81;
const PI = 3.1416;

console.log(GRAVEDAD + ": Esta es una constante de tipo 'Number' (decimal)");
console.log(PI + ": Esta es una constante de tipo 'Number' (decimal)");

// GRAVEDAD = 10; // No se puede reasignar el valor de una constante.


// Boolean (Booleano): Nos permite que algo es verdadero o falso, prendido o apagado, 1 o 0.
// true / false
let esMayorDeEdad = true;
let esUnaPersonaMayor = false;
let tieneTerceraEdad = false;

console.log(esMayorDeEdad + ": Esta es una variable de tipo 'Boolean' (verdadero)");
