      const input = document.getElementById("inputComentarios");
      const boton = document.getElementById("btnAgregar");
      const lista = document.getElementById("listaComentariosUl");

      boton.addEventListener("click", () => {
        const texto = input.value.trim();

        if (texto !== "") {
          const li = document.createElement("li");

          const fechaHora = new Date().toLocaleString();

          li.innerHTML = `
            ${texto}
            <div class="fecha">${fechaHora}</div>
            <button class="btnEliminar">Eliminar</button>
          `;

          // Agrega el comentario a la lista
          lista.appendChild(li);

          // Limpia el campo de texto
          input.value = "";

          // Evento para eliminar el comentario
          li.querySelector(".btnEliminar").addEventListener("click", () => {
            lista.removeChild(li);
          });
        } else {
          alert("Por favor escribe un comentario.");
        }
      });
