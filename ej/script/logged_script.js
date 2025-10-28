document.addEventListener("DOMContentLoaded", function() {
    const nombre = document.getElementById("nombre");
    const avatar = document.querySelector('input[name="avatar"]');

    // Cargar datos del usuario desde localStorage
    const UsuariosRegistrados = JSON.parse(localStorage.getItem("UsuariosRegistrados")) || [];
    if (UsuariosRegistrados.length > 0) {
    const usuarioEncontrado = usuariosGuardados.find(
        u => u.login === UsuarioInput && u.contrasena === ContrasenaInput
      );}

        // Mostrar avatar
        if (usuarioEncontrado.avatar) {
            const avatarImg = document.getElementById("avatar");
        }
    });