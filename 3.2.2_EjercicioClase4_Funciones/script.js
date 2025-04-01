// Ejercicios adicionales
/*
    Fácil
    1. Modificar la función de agregarLibro para evitar agregar duplicados.
    2. Crear una función para buscar un libro por nombre. En caso de que exista, regresar true, caso contario regresar false.
    3. Crear una función que regrese todos los libros que empiecen con una letra en específico. Hint: startsWith()

    Medio
    4. Crear una función para eliminar un libro a partir del nombre.
    5. Crear una función que regrese todos los libros en orden alfabético.
    6. Crear una función que muestre todos los libros en mayúsculas. Hint: toUpperCase()

    Difícil
    7. Crear una función que muestre el nombre al revés de un libro en una posición N
          0       1                 2                         3                   4
        ["1984", "Un mundo feliz", "El fin de la eternidad", "Hábitos atómicos", "Inmune"]
        invertirNombre(3) -> "socimóta sotibáH"

        Hint: String.length ¿Cómo puedo usar un ciclo y la longitud de una cadena para invertirla?
*/

let = librosLeidos = []


function agregarLibro(Titulo) {

    return librosLeidos.push(Titulo);
}

agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Enero?")); 
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Febrero?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Marzo?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Abril?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Mayo?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Junio?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Julio?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Agosto?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Septiembre?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Octubre?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Noviembre?"));
agregarLibro(prompt("Hola!! Qué libro leíste en el mes de Diciembre?"));

console.log(librosLeidos)


