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

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search); // Capturar aquello tras el ?
  const packId = params.get('pack'); // Guardar valor seasiatico grecia o china

  if (packId === 'seasiatico') {
    document.querySelector('#info-seasiatico').classList.add('visible');
  } else if (packId === 'grecia') {
    document.querySelector('#info-grecia').classList.add('visible');
  } else if (packId === 'china') {
    document.querySelector('#info-china').classList.add('visible');
  }
  const form = document.querySelector('#buy-form'); // variable formulario
  const buyButton = document.querySelector('#do-buy'); // variable botón comprar
  const clearButton = document.querySelector('#clear'); // variable botón borrar

  const nombreCliente = document.querySelector('#cliente_nombre');
  const emailCliente = document.querySelector('#cliente_email');
  const tipoTarjeta = document.querySelector('#tarjeta_tipo');
  const numTarjeta = document.querySelector('#tarjeta_num');
  const titularTarjeta = document.querySelector('#tarjeta_titular');
  const fechaTarjeta = document.querySelector('#tarjeta_fecha');
  const cvvTarjeta = document.querySelector('#tarjeta_cvv');


  buyButton.addEventListener('click', () => {
    if (validarFormulario()) {
      alert('Compra realizada');
    }
  });

  clearButton.addEventListener('click', () => {
    form.reset();
  });
  
  function validarFormulario() {
    
    if (nombreCliente.value.trim().length < 3) {
      alert('Error: El nombre completo debe tener al menos 3 caracteres.');
      return false;
    }

    if (!esEmailValido(emailCliente.value)) { // ! es NO
      alert('Error: Introduce un correo electrónico válido (ej. nombre@dominio.com).');
      return false;
    }

    if (tipoTarjeta.value === "") {
      alert('Error: Debes seleccionar un tipo de tarjeta.');
      return false;
    }

    if (!esNumTarjetaValido(numTarjeta.value)) {
      alert('Error: El número de tarjeta debe tener 13, 15, 16 o 19 dígitos.');
      return false;
    }

    if (titularTarjeta.value.trim().length < 3) {
      alert('Error: El nombre del titular de la tarjeta debe tener al menos 3 caracteres.');
      return false;
    }

    if (!esFechaValida(fechaTarjeta.value)) {
      alert('Error: La fecha de caducidad no es válida o ya ha expirado.');
      return false;
    }

    if (!esCvvValido(cvvTarjeta.value)) {
      alert('Error: El CVV debe tener 3 dígitos.');
      return false;
    }
    return true;
  }

  function esEmailValido(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function esNumTarjetaValido(num) {
    const soloDigitos = num.replace(/\s/g, ''); // Quita espacios (los reemplaza por nada)
    const longitud = soloDigitos.length;
    // test() comprueba patrones
    return /^\d+$/.test(soloDigitos) && (longitud === 13 || longitud === 15 || longitud === 16 || longitud === 19);
  }

  function esFechaValida(fechaInput) {
    if (!fechaInput) {
      return false;
    }
    
    const [year, month] = fechaInput.split('-').map(Number);
    
    const hoy = new Date();
    const añoActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1; // getMonth() 0-11
    
    if (year < añoActual) {
      return false;
    }
    if (year === añoActual && month < mesActual) {
      return false;
    }
    
    return true; 
  }

  function esCvvValido(cvv) { // Comprobar CVV
    const re = /^\d{3}$/;
    return re.test(cvv);
  }
});

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