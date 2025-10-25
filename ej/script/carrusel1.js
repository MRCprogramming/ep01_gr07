const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
let contador = 0;
let autoSlideTimer;

leftBtn.addEventListener('click', () => {
  contador = (contador + 2)%3;
  updateContainer(contador);
  iniciarAutoSlide();
});

rightBtn.addEventListener('click', () => {
    contador = (contador + 1)%3;
    updateContainer(contador);
    iniciarAutoSlide();
});

function updateContainer(num) {
  if (num == 0) {
    document.querySelector('.slide1').style.display = 'block';
    document.querySelector('.slide2').style.display = 'none';
    document.querySelector('.slide3').style.display = 'none';
  } else if (num == 1) {
    document.querySelector('.slide1').style.display = 'none';
    document.querySelector('.slide2').style.display = 'block';
    document.querySelector('.slide3').style.display = 'none';
  } else if (num == 2) {
    document.querySelector('.slide1').style.display = 'none';
    document.querySelector('.slide2').style.display = 'none';
    document.querySelector('.slide3').style.display = 'block';
  }
}

function iniciarAutoSlide() {
  // Cambio cada 3 segs
  autoSlideTimer = setInterval(() => {
    contador = (contador + 1) % 3;
    updateContainer(contador);
  }, 3000);
}

iniciarAutoSlide(); // Iniciar autoslide