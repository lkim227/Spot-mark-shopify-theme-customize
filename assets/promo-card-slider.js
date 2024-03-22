class promoCard extends HTMLElement {
    constructor() {   
		super();
	}
    connectedCallback() {
        this.sliderWrapper = this.querySelector('.promo-card-slider');
        if (!this.sliderWrapper) return;
        const resizeObserver = new ResizeObserver(entries => this.init());
        resizeObserver.observe(this.sliderWrapper);
    }
    init(){

		const slider = new Swiper( this.sliderWrapper, {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 10,
            mousewheel: false,
            grabCursor: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
            359: {
              direction: 'horizontal',
              slidesPerView: 1
            },
           768: {
              direction: 'vertical',
              slidesPerView: 2
            }
          }
		  });
		  return slider;

	}
}
customElements.define('promocard-component', promoCard);