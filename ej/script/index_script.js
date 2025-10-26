// Cada vez que el usuario inicie sesion, se guardaran sus datos en el almacenamiento local
// Todo esto con el localStorage

let Usuario = "Pepe"
let Contrasena = "1234"

localStorage.setItem("Usuario", Usuario);
localStorage.setItem("Contrasena", Contrasena);

let usuarioEnLocalStorage = localStorage.getItem("Usuario");
let contrasenaEnLocalStorage = localStorage.getItem("Contrasena");

console.log(usuarioEnLocalStorage);
console.log(contrasenaEnLocalStorage);

// Función que verifica el inicio de sesión
document.querySelector(".btn.login").addEventListener("click", function(event) {
    event.preventDefault();
  
    let UsuarioInput = document.querySelector(".usuarioInput").value.trim();
    let ContrasenaInput = document.querySelector(".passwordInput").value.trim();
  
    // Recuperamos el array de usuarios registrados
    const usuariosGuardados = JSON.parse(localStorage.getItem("UsuariosRegistrados")) || [];
  
    if (usuariosGuardados.length === 0) {
      alert("No hay ningún usuario registrado. Por favor, regístrate primero");
      return;
    }
  
    // Buscamos el usuario que coincida login y contraseña
    const usuarioEncontrado = usuariosGuardados.find(
      u => u.login === UsuarioInput && u.contrasena === ContrasenaInput
    );
  
    if (usuarioEncontrado) {
      alert("Inicio de sesión exitoso");
      
      // Guardamos temporalmente quién inició sesión
      localStorage.setItem("UsuarioActivo", JSON.stringify(usuarioEncontrado));
      window.location.href = "logged.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
  