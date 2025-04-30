 const input = document.getElementById("inputComentarios");
 const boton = document.getElementById("btnAgregar");
 const lista = document.getElementById("listaComentariosUl");


  function agregarComentario() {
  const texto = input.value.trim(); 


  if (texto !== ""){

  const li = document.createElement("li");

  const comentarioTexto = document.createTextNode(texto);
  li.appendChild(comentarioTexto); 

  const fechaHora = new Date().toLocaleString();
  const divFecha = document.createElement("div");
  divFecha.className = "fecha"; 
  divFecha.textContent = fechaHora;
  li.appendChild(divFecha);

  const botonEliminar = document.createElement("button");
  botonEliminar.className = "btnEliminar";
  botonEliminar.textContent = "Eliminar";
  li.appendChild(botonEliminar);

  botonEliminar.addEventListener("click", () => {
    lista.removeChild(li);
  })

  
  lista.appendChild(li);
  input.value = "";

  }else{
    alert("Por favor, escribe un comentario antes de agregarlo.");

  }
  }

  // 2. Usamos la misma función en el botón
boton.addEventListener("click", agregarComentario);

// 3. Y también cuando presionas Enter
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") { 
    agregarComentario();
  }
});
