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
  });
  