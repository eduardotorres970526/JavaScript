console.log("Hola mundo");

let nombre = "Malinali";// Declarar una variable llamada nomnre  y le asigno el valor de Malinali.
console.log(nombre);

nombre = "Daniel"; // Reasignando el valor de la variable nombre.
console.log(nombre);

// Number (números):
let edad = 26; // Entero
let estatura = 1.7; // Numero de punto decimal
let gradosCentigrados = -10.2 // Negativos

console.log(edad);
console.log(estatura);
console.log(gradosCentigrados);

// Concatenación: Es una operacion que nos permite crear una cadena de texto a partir de diferentes valores.
let mensajeFinal = nombre + " tiene " + edad + " años ";
console.log(mensajeFinal);

// const = constante no se puede reasignar.
const GRAVEDAD = 9.81;
const PI = 3.1416;

// GRAVEDAD = 10; // No se puede reasignar el valor de una constante.


// Boolean (Booleano): Nos permite que algo es verdadero o falso, prendido o apagado, 1 o 0.
// true / false
let esMayorDeEdad = true;
let esUnaPersonaMayor = false;
let tieneTerceraEdad = false;


// Palabra reservada: Es una palabra especial en el lenguaje de programación que no puede usasrse como nombre de variable, funciones, clases.



// Leer los datos de una mascota e imprimir un mensaje que incluya todos los datyos leídos.
// Utilizar al menos 1 vez cada tipo de dato (String, Number y Boolean)


// EJERCICIO 2
/*
Crear un cuestionario de 10 preguntas. Mostrar cada pregunta una por una y al final mostrar 
la respectiva pregunta con la respuesta ingresada por el usuario.
Que al menos 2 preguntas sean de opción múltiple.
Que al menos 2 preguntas sean respuesta de valores numéricos.
Cada pregunta debe tener la respuesta en los comentarios del código.
Agregar cada respuesta correcta a una variable.
*/



// Variables de entrada del usuario.

let AmigoHombre 
let PaisGrande 
let Continentes
let Animales
let SGM
let Luna
let Exploracion
let Multiplicacion
let Ejercito
let planeta

// Variables de respuestas correctas.

let AmigoHombreCorrecta = "Perro"
let PaisGrandeCorrecta = "Rusia"
let ContinentesCorrecta = 7
let AnimalesCorrecta = "Ballena Azul"
let SGMCorrecta = 1939
let LunaCorrecta = "Luna"
let ExploracionCorrecta = "Valentina Tereshkova"
let MultiplicacionCorrecta = 2000
let EjercitoCorrecta = "Estados Unidos"
let planetaCorrecta = "Jupiter" 


// Generacion de entradas de preguntas.

AmigoHombre = prompt("¿Cual es el animal considerado el mejor amigo del hombre?");    // Pregunta 1: R= Perro
PaisGrande = prompt("¿Cual es el pais mas grande del mundo?");    // Pregunta 2: R= Rusia
Continentes = prompt("¿Cuantos continentes hay en el mundo?");    // Pregunta 3: R= 7
Animales = prompt("¿Cual es el animal mas grande del mundo?");    // Pregunta 4: R= Ballena Azul
SGM = prompt("¿En que año estalló la Segunda Guerra Mundial?");    // Pregunta 5: R= 1939
Luna = prompt("¿Cual es el satelite natural de la tierra?");    // Pregunta 6: R= Luna
Exploracion = prompt("¿Cual es el nombre de la primera mujer en viajar al espacio?");    // Pregunta 7: R= Valentina Tereshkova
Multiplicacion = prompt("¿Cuanto es 20 multiplicado por 100?");    // Pregunta 8: R= 2000
Ejercito = prompt("¿Cual es el ejercito mas poderoso del mundo?");    // Pregunta 9: R= Estados Unidos
planeta = prompt("¿Cual es el planeta mas grande del sistema solar?");    // Pregunta 10: R= Jupiter

// Generaxion de salidas de las respuestas del usuario.

alert("¿Cual es el animal considerado el mejor amigo del hombre? " + AmigoHombre);
alert("¿Cual es el pais mas grande del mundo? " + PaisGrande);
alert("¿Cuantos continentes hay en el mundo? " + Continentes);
alert("¿Cual es el animal mas grande del mundo? " + Animales);
alert("¿En que año estalló la Segunda Guerra Mundial? " + SGM);
alert("¿Cual es el satelite natural de la tierra? " + Luna);
alert("¿Cual es el nombre de la primera mujer en viajar al espacio? " + Exploracion);
alert("¿En que pais se inventó la polvora? " + polvora);
alert("¿Cual es el ejercito mas poderoso del mundo? " + Ejercito);
alert("¿Cual es el planeta mas grande del sistema solar? " + planeta);