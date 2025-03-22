alert("Bienvenido a tu sistema de calificaciones");


let nota

nota = prompt("Por favor ingresa tu calificación");

if(nota >= 90 && nota <= 100){
    alert("Excelente");
}else if(nota >= 75 && nota <= 85){
    alert("Bien");
}else if (nota >= 60 && nota < 75){
    alert("Suficiente");
}else if (nota <= 59 && nota >= 0){
    alert("Estás reprobado :(");
}else if (nota > 100){
    alert("Porfavor ingrese una calificacion valida");
}
    
