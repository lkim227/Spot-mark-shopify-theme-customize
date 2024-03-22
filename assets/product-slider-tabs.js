(function () {
	const initSliders = () => {
		let productSlider;
		let productSubSlider;
		const productSubSliders = document.querySelectorAll('.swiper-product-slider-tabs-thumbs');
		const productSliders = document.querySelectorAll('.swiper-product-slider-tabs');
		const pagination = document.querySelectorAll('.swiper-product-slider-tabs .swiper-pagination');

		productSliders.forEach((slider, index) => {
			productSubSlider = new Swiper(productSubSliders[index], {
				slidesPerView: 1,
				spaceBetween: 2,
				direction: 'horizontal',
				navigation: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				slideToClickedSlide: true,
				on: {
					touchEnd: function (s, e) {
						let range = 5;
						let diff = (s.touches.diff = s.isHorizontal()
							? s.touches.currentX - s.touches.startX
							: s.touches.currentY - s.touches.startY);
						if (diff < range || diff > -range) s.allowClick = true;
					}
				},
				breakpoints: {
					750: {
						slidesPerView: 4,
						direction: 'vertical',
						freeMode: true
					}
				}
			});

			productSlider = new Swiper(slider, {
				slidesPerView: 1,
				direction: 'horizontal',
				pagination: {
					el: pagination[index],
					bulletClass: 'swiper-bullet',
					bulletActiveClass: 'swiper-bullet-active',
					clickable: true,
					renderBullet: function(index, className) {
						return '<span class="' + className + ' swiper-bullet--svg-animation"><svg width="30" height="30" viewBox="0 0 28 28"><circle class="svg__circle" style="animation-duration: ' + this.el.getAttribute('data-duration') + 's" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle></svg></span>';
					}
				},
				autoplay: {
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
				thumbs: {
					swiper: window.matchMedia('(min-width: 750px)').matches ? productSubSlider : ''
				},
				breakpoints: {
					990: {
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

			if (window.matchMedia('(max-width: 749px)').matches) {
				productSubSlider.controller.control = productSlider;
				productSlider.controller.control = productSubSlider;
			}
		});
	};

	const destroySliders = () => {
		const productSubSliders = document.querySelectorAll('.swiper-product-slider-tabs-thumbs');
		const productSliders = document.querySelectorAll('.swiper-product-slider-tabs');

		productSliders.forEach((slider, index) => {
			if (slider.swiper !== undefined) slider.swiper.destroy();

			if (productSubSliders[index].swiper !== undefined) productSubSliders[index].swiper.destroy();
		});
	};

	const initSection = () => {
		const sections = document.querySelectorAll('.tabs-slider-section');

		const sectionResizeObserver = new ResizeObserver((entries) => {
			destroySliders();
			initSliders();
		});

		destroySliders();
		initSliders();

		sections.forEach(item => {
			sectionResizeObserver.observe(item);
		});
	};

	initSection();

	document.addEventListener('shopify:section:load', function () {
		initSection();
	});
})();