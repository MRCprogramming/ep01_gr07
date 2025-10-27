// Contenido para el NUEVO archivo: script/compra_script.js

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  
  const packId = params.get('pack');

  if (packId === 'seasiatico') {
    document.querySelector('.descripcion1').style.display = 'block';
    document.querySelector('.descripcion2').style.display = 'none';
    document.querySelector('.descripcion3').style.display = 'none';
  } 
  else if (packId === 'grecia') {
    document.querySelector('.descripcion1').style.display = 'none';
    document.querySelector('.descripcion2').style.display = 'block';
    document.querySelector('.descripcion3').style.display = 'none';
  } 
  else if (packId === 'china') {
    document.querySelector('.descripcion1').style.display = 'none';
    document.querySelector('.descripcion2').style.display = 'none';
    document.querySelector('.descripcion3').style.display = 'block';
  } 
});

// Capturar parametros de la página de compra
document.addEventListener("DOMContentLoaded", function () {
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const tarjeta_tipo = document.getElementById("tarjeta_tipo");
const tarjeta_num = document.getElementById("tarjeta_num");
const tarjeta_titular = document.getElementById("tarjeta_titular");
const tarjeta_fecha = document.getElementById("tarjeta_fecha");
const tarjeta_cvv = document.getElementById("tarjeta_cvv");
const ComprarBtn = document.getElementById("ComprarBtn");
const BorrarBtn = document.getElementById("BorrarBtn");
}
/*
Nombre 
Correo electrónico 
Tipo de tarjeta 
Selecciona tipo
Número de tarjeta 
1234 5678 9012 3456
Nombre del titular 
Fecha caducidad 
---------- de ----
CVV 
Comprar
Borrar */