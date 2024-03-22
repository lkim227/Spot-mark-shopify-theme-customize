class tabSlider extends HTMLElement {
    constructor() {   
		super();
	}
    connectedCallback() {
        this.sliderWrapper = this.querySelector('.tab__slideshow');
        if (!this.sliderWrapper) return;
        const resizeObserver = new ResizeObserver(entries => this.init());
        resizeObserver.observe(this.sliderWrapper);
        // console.log("testdd",this.sliderWrapper.dataset)
    }
    init(){


		const slider = new Swiper( this.sliderWrapper, {
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
			breakpoints: {
                359: {
					slidesPerView: parseInt(this.sliderWrapper.dataset.slidesmobile),
					spaceBetween: parseInt(this.sliderWrapper.dataset.mobilespace)
				},
                768: {
					slidesPerView: parseInt(this.sliderWrapper.dataset.slidestab),
					spaceBetween: parseInt(this.sliderWrapper.dataset.tabspace)
				},
                1024: {
					slidesPerView: parseInt(this.sliderWrapper.dataset.slideslaptop),
					spaceBetween: parseInt(this.sliderWrapper.dataset.laptopspace)
				},
				1440: {
					slidesPerView: parseInt(this.sliderWrapper.dataset.slidesdesktop),
					spaceBetween: parseInt(this.sliderWrapper.dataset.desktopspace)
				}
			}
		  });


		  slider.on('slideChangeTransitionEnd', function (event) {
			
			slider.slides.forEach(Element => {

							
							var tab_id = $(Element).attr('data-tab');
							// remove the default classes
							$('.brand-list li').removeClass('swiper-slide-active');
							$('.brand-content').removeClass('active');
							// add new classes on mouse click
							$(Element).addClass('swiper-slide-active');
							$('#'+tab_id).addClass('active');



				
				});




		  

	     	});
		  return slider;

	}
}
customElements.define('tab-component', tabSlider);