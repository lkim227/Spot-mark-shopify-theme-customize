/* WR: Image Slider
--------------------------- */

const image_container = document.querySelectorAll('.image-slider-container');

image_container.forEach(container => {
  container.querySelector('.scroll-slider').addEventListener('input', (e) => {
    let value = e.target.value / 8;
    container.style.setProperty('--position', `${value}%`);
  })
});