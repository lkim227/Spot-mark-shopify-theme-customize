(function () {
	const initSlider = () => {
		let productSlider;
		const productSliders = document.querySelectorAll('.swiper-product-slider');

		productSliders.forEach((slider, index) => {
			productSlider = new Swiper(slider, {
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination',
					bulletClass: 'swiper-bullet',
					bulletActiveClass: 'swiper-bullet-active',
					clickable: true,
					renderBullet: function(index, className) {
						return '<span class="' + className + ' swiper-bullet--svg-animation"><svg width="30" height="30" viewBox="0 0 28 28"><circle class="svg__circle" style="animation-duration: ' + this.el.getAttribute('data-duration') + 's" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle></svg></span>';
					}
				},
				loop: true,
				autoplay: {
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
				breakpoints: {
					1200: {
						direction: 'vertical'
					}
				},
				on: {
					slideChange: function() {
						this.pagination.render();
						this.pagination.update();
					}
				}
			});
		});
	};

	const destroySlider = () => {
		const productSliders = document.querySelectorAll('.swiper-product-slider');

		productSliders.forEach((slider, index) => {
			if (slider.swiper !== undefined) slider.swiper.destroy();
		});
	};

	const initSection = () => {
		const sections = document.querySelectorAll('.product-slider-section');

		const sectionResizeObserver = new ResizeObserver((entries) => {
			destroySlider();
			initSlider();
		});

		destroySlider();
		initSlider();

		sections.forEach(item => {
			sectionResizeObserver.observe(item);
		});
	};

	initSection();

	document.addEventListener('shopify:section:load', function () {
		initSection();
	});
})();
