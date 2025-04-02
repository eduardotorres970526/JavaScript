/*
     Objeto literal: Es un tipo de dato que nos permite guardar
     más de un valor dentro de una variable y acceder a los valores a través
     de llaves.
 
     [let | const] <nombreVariable> = {
         <nombreLlave1>: <valor>,
         <nombreLlave2>: <valor>,
         ...
         <nombreLlaveN>: <valor>
     }
 
     <valor> puede ser cualquier tipo de dato (String, Number, Boolean, otros objetos, arreglos, funciones)
 
 */
 
     function Libros() {
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.disponibilidad = disponibilidad
        this.descripcion = function(){
            console.log("El libro: " + '"' + this.titulo + '"' + " escrito por " + this.autor + " en el año " + this.anio + ", se encuentra " + this.disponibilidad);
        }

     }