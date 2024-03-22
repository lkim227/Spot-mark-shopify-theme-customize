class landingEconomy extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.sliderWrapper = this.querySelector(".landing__economy_swiper");
    if (!this.sliderWrapper) return;
    const resizeObserver = new ResizeObserver((entries) => this.init());
    resizeObserver.observe(this.sliderWrapper);
    // console.log("testdd",this.sliderWrapper.dataset)
  }
  init() {
    const slider = new Swiper(this.sliderWrapper, {
      slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
      grabCursor: true,
      speed: 1000,
      navigation: {
        nextEl: ".landing-economy-next",
        prevEl: ".landing-economy-prev",
      },
      breakpoints: {
        359: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
          spaceBetween: 15,
        },
        768: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidestab),
          spaceBetween: 21,
        },
        1024: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slideslaptop),
          spaceBetween: 21,
        },
        1440: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidesdesktop),
          spaceBetween: 21,
        },
      },
    });

    return slider;
  }
}
customElements.define("economy-slider", landingEconomy);
