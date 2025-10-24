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
document.querySelector(".btn.login").addEventListener("click", function(event){
    event.preventDefault();
    let UsuarioInput = document.querySelector(".usuarioInput").value.trim();
    let ContrasenaInput = document.querySelector(".passwordInput").value.trim();

    console.log(UsuarioInput);
    console.log(ContrasenaInput);

    if (UsuarioInput === localStorage.getItem("Usuario") && ContrasenaInput === localStorage.getItem("Contrasena")) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("Usuario", UsuarioInput);
        localStorage.setItem("Contrasena", ContrasenaInput);    
        window.location.href = "logged.html";
    } 
    else {
        alert("Usuario o contraseña incorrectos");
    };
});