
      const mostrarContraseña = document.getElementById("contraseñaGenerada");

      function copiarContraseña() {
        navigator.clipboard.writeText(mostrarContraseña.innerText);
        alert("¡Contraseña copiada!");
      }

      function generarContraseña() {
        const longitud = parseInt(document.getElementById("longitud").value);
        const incluirMayus = document.getElementById("mayusculas").checked;
        const incluirMinus = document.getElementById("minusculas").checked;
        const incluirNumeros = document.getElementById("numeros").checked;
        const incluirSimbolos = document.getElementById("simbolos").checked;

        const letrasMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letrasMinus = "abcdefghijklmnopqrstuvwxyz";
        const numeros = "0123456789";
        const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

        let caracteres = "";
        if (incluirMayus) caracteres += letrasMayus;
        if (incluirMinus) caracteres += letrasMinus;
        if (incluirNumeros) caracteres += numeros;
        if (incluirSimbolos) caracteres += simbolos;

        let contraseña = "";
        for (let i = 0; i < longitud; i++) {
          const aleatorio = Math.floor(Math.random() * caracteres.length);
          contraseña += caracteres.charAt(aleatorio);
        }

        mostrarContraseña.innerText = contraseña || "";

        const fuerza = document.getElementById("medidor");
        if (longitud < 6) fuerza.innerText = "▯▯▯▯";
        else if (longitud < 10) fuerza.innerText = "▮▯▯▯";
        else if (longitud < 14) fuerza.innerText = "▮▮▯▯";
        else if (longitud < 18) fuerza.innerText = "▮▮▮▯";
        else fuerza.innerText = "▮▮▮▮";
      }
   