class CommonSlider extends HTMLElement {
    constructor() {   
		super();
	}
    connectedCallback() {
        this.sliderWrapper = this.querySelector('.common__slideshow');
        if (!this.sliderWrapper) return;
        const resizeObserver = new ResizeObserver(entries => this.init());
        resizeObserver.observe(this.sliderWrapper);
        // console.log("testdd",this.sliderWrapper.dataset)
    }
    init(){
			let initial_slide = this.sliderWrapper.dataset.initialslide !== undefined ? parseInt(this.sliderWrapper.dataset.initialslide) : undefined;
			let centered_slides = this.sliderWrapper.dataset.centeredslides !== undefined ? JSON.parse(this.sliderWrapper.dataset.centeredslides) : undefined;
			let effect_fade = this.sliderWrapper.dataset.effectfade  !== undefined ? JSON.parse(this.sliderWrapper.dataset.effectfade) : undefined;
			let cross_fade = this.sliderWrapper.dataset.crossfade !== undefined ? JSON.parse(this.sliderWrapper.dataset.crossfade) : undefined;
			let next = this.querySelector(".swiper-button-next");
			let prev = this.querySelector(".swiper-button-prev");

		const slider = new Swiper( this.sliderWrapper, {
			initialSlide: initial_slide ? initial_slide : 1,
			centeredSlides: centered_slides ? centered_slides : false,
			effect: effect_fade ? 'fade' : 'slide',
			crossFade: cross_fade ? cross_fade : false,
			slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
			horizontal: true,
			freeMode: JSON.parse(this.sliderWrapper.dataset.freemode),
			spaceBetween: parseInt(this.sliderWrapper.dataset.desktopSpace),
			grabCursor: true,
			loop: JSON.parse(this.sliderWrapper.dataset.loop),
			speed: parseInt(this.sliderWrapper.dataset.speed),
			freeModeMomentum: JSON.parse(this.sliderWrapper.dataset.freemomentum),
			autoplay: {
                enabled: JSON.parse(this.sliderWrapper.dataset.autoplay),
                delay: parseInt(this.sliderWrapper.dataset.direction),
                disableOnInteraction: false,
                reverseDirection: JSON.parse(this.sliderWrapper.dataset.direction),
               	},
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
                359: {
					slidesPerView: parseFloat(this.sliderWrapper.dataset.slidesmobile),
					spaceBetween: parseInt(this.sliderWrapper.dataset.mobilespace)
				},
                768: {
					slidesPerView: parseFloat(this.sliderWrapper.dataset.slidestab),
					spaceBetween: parseInt(this.sliderWrapper.dataset.tabspace)
				},
                1024: {
									centeredSlides: false,
					slidesPerView: parseFloat(this.sliderWrapper.dataset.slideslaptop),
					spaceBetween: parseInt(this.sliderWrapper.dataset.laptopspace)
				},
				1440: {
					slidesPerView: parseFloat(this.sliderWrapper.dataset.slidesdesktop),
					spaceBetween: parseInt(this.sliderWrapper.dataset.desktopspace)
				}
			}
		  });
	  
		  return slider;

	}
}
customElements.define('slider-component', CommonSlider);