
class MobileSlider extends HTMLElement {
  constructor() {   
  super();
}
  connectedCallback() {
      this.sliderWrapper = this.querySelector('.mobile__slideshow');
      if (!this.sliderWrapper) return;
      const resizeObserver = new ResizeObserver(entries => this.init());
      resizeObserver.observe(this.sliderWrapper);

  }
  init(){

      const mediaQuery = window.matchMedia('(max-width: 768px)');




      const slider = new Swiper( this.sliderWrapper, {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slides),
          spaceBetween:  parseInt(this.sliderWrapper.dataset.spaceBetween),
          loop: JSON.parse(this.sliderWrapper.dataset.loop),
          speed: 500,
       
           slidesPerView:'auto',
           allowTouchMove: false,
           disableOnInteraction: true,  
           navigation: {
              nextEl: ".swiper-button-next-mobile",
              prevEl: ".swiper-button-prev-mobile",
          },
          breakpoints: {
            359: {
              loop: JSON.parse(this.sliderWrapper.dataset.loop),
              slidesPerView: parseInt(this.sliderWrapper.dataset.slides),
              spaceBetween:  parseInt(this.sliderWrapper.dataset.space),
            }
          }
        });

      if (mediaQuery.matches) {
            return slider;
       }else{
          return slider.destroy();
       }
}



}
customElements.define('mobile-slider', MobileSlider);

window.addEventListener('resize', function() {
 new MobileSlider();
});

