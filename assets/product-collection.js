class ProductCollectionSlider extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.sliderWrapper = this.querySelector(
      ".pc_img_swiper"
    );
    if (!this.sliderWrapper) return;
    const resizeObserver = new ResizeObserver((entries) => this.init());
    resizeObserver.observe(this.sliderWrapper);
  }
  init() {
    const slider = new Swiper(this.sliderWrapper, {
      autoHeight: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
      horizontal: JSON.parse(this.sliderWrapper.dataset.horizontal),
      freeMode: JSON.parse(this.sliderWrapper.dataset.freemode),
      spaceBetween: parseInt(this.sliderWrapper.dataset.mobilespace),
      grabCursor: JSON.parse(this.sliderWrapper.dataset.grabcursor),
      loop: JSON.parse(this.sliderWrapper.dataset.loop),
      speed: parseInt(this.sliderWrapper.dataset.speed),
      autoplay: {
        enabled: JSON.parse(this.sliderWrapper.dataset.autoplay),
        delay: parseInt(this.sliderWrapper.dataset.delay),
        disableOnInteraction: JSON.parse(
          this.sliderWrapper.dataset.disableoninteraction
        ),
        reverseDirection: JSON.parse(
          this.sliderWrapper.dataset.reversedirection
        ),
      },
      navigation: {
        nextEl: ".pc_next",
        prevEl: ".pc_prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        359: {
          autoHeight: true,
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
          spaceBetween: parseInt(this.sliderWrapper.dataset.mobilespace),
        },
        768: {
          autoHeight: true,
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidestab),
          spaceBetween: parseInt(this.sliderWrapper.dataset.tabspace),
        },
        1024: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slideslaptop),
          spaceBetween: parseInt(this.sliderWrapper.dataset.laptopspace),
        },
        1440: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidesdesktop),
          spaceBetween: parseInt(this.sliderWrapper.dataset.desktopspace),
        },
      },
      onSlideChangeStart: function(swiper){
        setSwiperHeight();
    }
    });
   
    return slider;
  }
}
customElements.define("collection-slider", ProductCollectionSlider);

class ProductDetailsSlider extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.sliderWrapper = this.querySelector(
      ".pc_details_swiper"
    );
    if (!this.sliderWrapper) return;
    const resizeObserver = new ResizeObserver((entries) => this.init());
    resizeObserver.observe(this.sliderWrapper);
  }
  init() {
    const slider = new Swiper(this.sliderWrapper, {
      effect: 'fade',
      crossFade: true,
      slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
      horizontal: JSON.parse(this.sliderWrapper.dataset.horizontal),
      freeMode: JSON.parse(this.sliderWrapper.dataset.freemode),
      spaceBetween: parseInt(this.sliderWrapper.dataset.mobilespace),
      grabCursor: JSON.parse(this.sliderWrapper.dataset.grabcursor),
      loop: JSON.parse(this.sliderWrapper.dataset.loop),
      speed: parseInt(this.sliderWrapper.dataset.speed),
      autoplay: {
        enabled: JSON.parse(this.sliderWrapper.dataset.autoplay),
        delay: parseInt(this.sliderWrapper.dataset.delay),
        disableOnInteraction: JSON.parse(
          this.sliderWrapper.dataset.disableoninteraction
        ),
        reverseDirection: JSON.parse(
          this.sliderWrapper.dataset.reversedirection
        ),
      },
      navigation: {
        nextEl: ".pc_next",
        prevEl: ".pc_prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        359: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
          spaceBetween: parseInt(this.sliderWrapper.dataset.mobilespace),
        },
        768: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidestab),
          spaceBetween: parseInt(this.sliderWrapper.dataset.tabspace),
        },
        1024: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slideslaptop),
          spaceBetween: parseInt(this.sliderWrapper.dataset.laptopspace),
        },
        1440: {
          slidesPerView: parseInt(this.sliderWrapper.dataset.slidesdesktop),
          spaceBetween: parseInt(this.sliderWrapper.dataset.desktopspace),
        },
      },
    });
    return slider;
  }
}
customElements.define("details-slider", ProductDetailsSlider);
