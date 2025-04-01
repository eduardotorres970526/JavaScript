
// Datos para el ejercicio: 
// Objetos -> Objeto literal -> Diccionario
// Estructura clave-valor.



// let fruta1 = {
//    nombre: "Naranja",
//    tipo: "Cítrico"
//}

// let fruta2 = {
//    nombre: "Manzana",
//    tipo: "Pomácea"
// }


// let frutasObjetos = [fruta1, fruta2];
// console.log(frutasObjetos[0].tipo); // Accediendo a las propiedades de un objeto literal.

let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];


let citricos = 0;
let pomaceas = 0;
let tropicales = 0;
let drupas = 0;
let cucurbitaceas = 0;
let baya = 0;

for(let i = 0; i < frutasConTipo.length; i++){
    if (frutasConTipo[i].tipo == "Cítrico"){
        citricos++;
    }else if (frutasConTipo[i].tipo == "Pomácea"){
        pomaceas++;
    }else if (frutasConTipo[i].tipo == "Tropical"){
        tropicales++;
    }else if (frutasConTipo[i].tipo == "Drupa"){
        drupas++;
    }else if (frutasConTipo[i].tipo == "Cucurbitácea"){
        cucurbitaceas++;
    }else if (frutasConTipo[i].tipo == "Baya"){
         baya++;
    }            
}; 

console.log("Hay " + citricos + " frutas cítricas."); 
console.log("Hay " + pomaceas + " frutas pomáceas.");
console.log("Hay " + tropicales + " frutas tropicales.");
console.log("Hay " + drupas + " frutas drupas.");
console.log("Hay " + cucurbitaceas + " frutas cucurbitáceas.");
console.log("Hay " + baya + " frutas bayas.");
