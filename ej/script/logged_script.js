document.addEventListener("DOMContentLoaded", function () {
  // Obtener el usuario actual desde el registro
  const usuarioActual = JSON.parse(localStorage.getItem("UsuarioActivo"));
  
  // Referencias del DOM
  const nombreElemento = document.getElementById("NombreUsuario");
  const avatarElemento = document.getElementById("AvatarUsuario");
  const botonCerrar = document.getElementById("CerrarSesion");
  
  // Mostrar el nombre guardado
  nombreElemento.textContent = usuarioActual.nombre || usuarioActual.login || "Usuario";
  
  // Mostrar la imagen de perfil (o una por defecto)
  if (usuarioActual.avatar) {
    avatarElemento.src = usuarioActual.avatar;
  } else {
    avatarElemento.src = "images/profile-picture.png";
  }
  
  // Función para cerrar sesión con confirmación
  botonCerrar.addEventListener("click", function () {
    const confirmar = confirm("¿Desea cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("UsuarioActual");
      window.location.href = "index.html";
    }
  });
  const formConsejo = document.querySelector("#reg-form");
  const titulo = document.getElementById("titulo_consejo");
  const texto = document.getElementById("texto_consejo");
  const lista = document.querySelector("lista_consejos");

  if (!formConsejo || !lista) return;

  // Cargar los consejos ya guardados
  function cargar_consejos(){
    return JSON.parse(localStorage.getItem("ConsejosGuardados")) || [];
  }

  // Función para mostrar los tres últimos consejos
  function renderConsejos() {
    lista.innerHTML = "";
    const consejos = cargar_consejos();
    consejos.slice(0, 3).forEach(c => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = c.titulo;
      li.appendChild(link);
      lista.appendChild(li);
    });
  }
  // Mostrar los consejos guardados al cargar
  renderConsejos();

  // Escuchar el envío del formulario
  formConsejo.addEventListener("submit", function(event) {
    event.preventDefault();
    lert("hola");
    const tituloVal = titulo.value.trim();
    const textoVal = texto.value.trim();

    // Se validan los campos
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

    // Crear el objeto del consejo
    const nuevoConsejo = {
      titulo: tituloVal,
      texto: textoVal,
      fecha: new Date().toISOString()
    };

    // Añadir al principio de la lista
    const consejos = cargar_consejos();
    consejos.push(nuevoConsejo);
    // Guardar en localStorage
    localStorage.setItem("ConsejosGuardados", JSON.stringify(consejos));

    // Actualizar la lista 
    renderConsejos();

    // Limpiar formulario
    titulo.value = "";
    texto.value = "";
    alert("Consejo añadido correctamente");
  });
});
  