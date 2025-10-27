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