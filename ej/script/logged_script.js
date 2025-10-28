document.addEventListener("DOMContentLoaded", function () {
  // ========= DATOS DE USUARIO =========
  const usuarioActual = JSON.parse(localStorage.getItem("UsuarioActivo"));
  const nombreElemento = document.getElementById("NombreUsuario");
  const avatarElemento = document.getElementById("AvatarUsuario");
  const botonCerrar = document.getElementById("CerrarSesion");

  // Mostrar nombre e imagen
  if (usuarioActual) {
    nombreElemento.textContent = usuarioActual.nombre || usuarioActual.login || "Usuario";
    avatarElemento.src = usuarioActual.avatar || "images/profile-picture.png";
  }

  // Botón cerrar sesión
  botonCerrar.addEventListener("click", () => {
    if (confirm("¿Desea cerrar sesión?")) {
      localStorage.removeItem("UsuarioActivo");
      window.location.href = "index.html";
    }
  });

  // ========= CONSEJOS =========
  const formConsejo = document.getElementById("reg-form");
  const titulo = document.getElementById("titulo_consejo");
  const texto = document.getElementById("texto_consejo");
  const lista = document.getElementById("lista-consejos");

  if (!formConsejo || !lista) return;

  // Cargar consejos del localStorage
  function cargarConsejos() {
    return JSON.parse(localStorage.getItem("ConsejosGuardados")) || [];
  }

  // Guardar consejos en localStorage
  function guardarConsejos(arr) {
    localStorage.setItem("ConsejosGuardados", JSON.stringify(arr));
  }

  // Renderizar los tres últimos consejos
  function renderConsejos() {
    const consejos = cargarConsejos();
    lista.innerHTML = "";
    consejos.slice(0, 3).forEach((c) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = c.titulo;
      link.title = c.texto; // aparece al pasar el ratón
      li.appendChild(link);
      lista.appendChild(li);
    });
  }

  // Mostrar los guardados al entrar
  renderConsejos();

  // Manejar el envío del formulario
  formConsejo.addEventListener("submit", function (event) {
    event.preventDefault();

    const tituloVal = titulo.value.trim();
    const textoVal = texto.value.trim();

    if (tituloVal.length < 15) {
      alert("El título debe tener al menos 15 caracteres.");
      titulo.focus();
      return;
    }
    if (textoVal.length < 30) {
      alert("La descripción debe tener al menos 30 caracteres.");
      texto.focus();
      return;
    }

    // Crear consejo nuevo
    const nuevoConsejo = {
      titulo: tituloVal,
      texto: textoVal,
      fecha: new Date().toISOString(),
    };

    let consejos = cargarConsejos();
    // Añadir al principio
    consejos.unshift(nuevoConsejo);
    // Mantener solo los 3 más recientes
    if (consejos.length > 3) consejos = consejos.slice(0, 3);

    // Guardar y renderizar
    guardarConsejos(consejos);
    renderConsejos();

    // Limpiar
    titulo.value = "";
    texto.value = "";
    alert("Consejo añadido correctamente.");
  });
});
