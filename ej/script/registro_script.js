// Esta funcion captura los campos del registro

document.addEventListener("DOMContentLoaded", function () {
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const emailconf = document.getElementById("emailconf");
const fechanac = document.getElementById("fechanac");
const login = document.getElementById("login");
const contrasena = document.getElementById("contrasena");
const avatar = document.querySelector('input[name="avatar"]');
const policyCheckbox = document.querySelector('.policy input[type="checkbox"]');
const form = document.querySelector("form");
const submitBtn = document.getElementById("submitBtn");
  
// Habilitar / deshabilitar el botón según checkbox
if (policyCheckbox && submitBtn) {
    policyCheckbox.addEventListener("change", function () {
    submitBtn.disabled = !policyCheckbox.checked;
});
    submitBtn.disabled = !policyCheckbox.checked;
}
  
// Validación al enviar
form.addEventListener("submit", function (event) {
event.preventDefault();
  
const ok = validarFormulario();
if (!ok) return;

// Guardar datos relevantes en localStorage 
    const usuario = {
    nombre: nombre.value.trim(),
    apellidos: apellidos.value.trim(),
    email: email.value.trim(),
    login: login.value.trim(),
    contrasena: contrasena.value.trim(),
    avatar: avatar.files[0] ? avatar.files[0].name : ""
};

try {
    // Recuperar el array actual de usuarios (si existe)
    const usuarios = JSON.parse(localStorage.getItem("UsuariosRegistrados")) || [];
  
    // Comprobar si ya existe el mismo login o email
    const existe = usuarios.some(u => u.login === usuario.login || u.email === usuario.email);
    if (existe) {
      alert("Este usuario o correo ya está registrado.");
      return;
    }
  
    // Añadir el nuevo usuario al array
    usuarios.push(usuario);
  
    // Guardar el array completo de nuevo
    localStorage.setItem("UsuariosRegistrados", JSON.stringify(usuarios));
  
    alert("Registro completado correctamente");
    window.location.href = "logged.html";
  } catch (e) {
    console.warn("localStorage no disponible:", e);
  };
  
// Función de validación
function validarFormulario() {
    // Nombre: mínimo 3 caracteres
    if (!nombre.value || nombre.value.trim().length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        nombre.focus();
        return false;
    }
  
    // Apellidos: al menos 2 palabras, cada una >= 3 caracteres
    const partes = apellidos.value.trim().split(/\s+/).filter(Boolean);
    if (partes.length < 2 || partes.some(p => p.length < 3)) {
        alert("Introduce al menos dos apellidos, cada uno con 3 o más caracteres");
        apellidos.focus();
        return false;
    }
  
    // Email: formato básico
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    if (!email.value || !emailRegex.test(email.value.trim())) {
        alert("Introduce un correo electrónico válido (usuario@dominio.ext)");
        email.focus();
        return false;
    }
  
    // Confirmar email
    if (!emailconf.value || email.value.trim() !== emailconf.value.trim()) {
        alert("Los campos Email y Confirmar Email deben coincidir");
        emailconf.focus();
        return false;
    }
  
    // Fecha de nacimiento: no futura, y razonable (> 1900)
    if (!fechanac.value) {
        alert("Introduce tu fecha de nacimiento.");
        fechanac.focus();
        return false;
    }
    else {
    const fecha = new Date(fechanac.value + "T00:00:00");
    const hoy = new Date();
    if (isNaN(fecha.getTime()) || fecha > hoy) {
        alert("Introduce una fecha de nacimiento válida (no puede ser futura)");
        fechanac.focus();
        return false;
    }
    const edad = hoy.getFullYear() - fecha.getFullYear() - ( (hoy.getMonth()<fecha.getMonth() || (hoy.getMonth()===fecha.getMonth() && hoy.getDate()<fecha.getDate())) ? 1 : 0 );
    if (edad < 12) {
        alert("Debes tener al menos 12 años para registrarte");
        fechanac.focus();
        return false;
    }
    }
  
    // Login: mínimo 5 caracteres
    if (!login.value || login.value.trim().length < 5) {
        alert("El login debe tener al menos 5 caracteres");
        login.focus();
        return false;
    }
  
    // Contraseña: 8+ chars, al menos 2 dígitos, 1 mayúscula, 1 minúscula y 1 símbolo
    // Regex: (?=(?:.*\d){2,}) asegura al menos 2 dígitos
    const pass = contrasena.value || "";
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=(?:.*\d){2,})(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passRegex.test(pass)) {
        alert("La contraseña debe tener 8 caracteres, al menos 2 números, 1 mayúscula, 1 minúscula y 1 carácter especial");
        contrasena.focus();
        return false;
    }
  
    // Avatar: comprobar extensión (si hay fichero)
    if (avatar && avatar.files && avatar.files.length > 0) {
    const fname = avatar.files[0].name.toLowerCase();
    if (!(/\.(jpg|jpeg|png|webp)$/i.test(fname))) {
        alert("El avatar debe ser una imagen en formato jpg, png o webp");
        avatar.focus();
        return false;
    }
    } 
    else {
        alert("Debes subir una imagen de perfil (jpg/png/webp)");
        avatar.focus();
        return false;
    }
  
    // Política: debe estar marcada
    if (policyCheckbox && !policyCheckbox.checked) {
        alert("Debes aceptar la política de privacidad para continuar");
        policyCheckbox.focus();
        return false;
    }
  
    return true;
}
});
});