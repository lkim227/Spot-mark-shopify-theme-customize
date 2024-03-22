(function () {
	const initMarqueeSlider1 = () => {
		let slider1 = new Swiper('.js-marquee', {
			slidesPerView: 4,
			spaceBetween: 20,
			direction: 'vertical',
			loop: true,
			shortSwipes: false,
			longSwipes: false,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
				reverseDirection: true
			},
			freeMode: true,
			speed: 11000,
			breakpoints: {
				0: {
					slidesPerView: 4
				},
				576: {
					spaceBetween: 30
				},
				750: {
					spaceBetween: 50
				},
				990: {
					spaceBetween: 70
				},
				1200: {
					spaceBetween: 100,
					slidesPerView: 2
				}
			}
		});
	}

	const initMarqueeSlider2 = () => {
		let slider2 = new Swiper('.js-marquee-reverse', {
			slidesPerView: 4,
			spaceBetween: 20,
			direction: 'vertical',
			loop: true,
			shortSwipes: false,
			longSwipes: false,
			allowTouchMove: false,
			autoplay: {
				delay: 1,
			},
			freeMode: true,
			speed: 21000,
			breakpoints: {
				0: {
					slidesPerView: 4
				},
				576: {
					spaceBetween: 30
				},
				750: {
					spaceBetween: 50
				},
				990: {
					spaceBetween: 70
				},
				1200: {
					spaceBetween: 100,
					slidesPerView: 2
				}
			}
		});
	}

	const setMarqueeAnimation = () => {
		initMarqueeSlider1();
		initMarqueeSlider2();
	};

	document.addEventListener('shopify:section:load', () => {
		setTimeout(() => {
			setMarqueeAnimation();
		}, 100);
	});

	window.addEventListener('resize', function () {
		$('.js-marquee').each(function () {
			this.swiper.destroy();
		});
		$('.js-marquee-reverse').each(function () {
			this.swiper.destroy();
		});
		setMarqueeAnimation();
	});

	document.addEventListener('visibilitychange', function() {
		if (!document.hidden) {
			$('.js-marquee').each(function () {
				this.swiper.destroy();
			});
			$('.js-marquee-reverse').each(function () {
				this.swiper.destroy();
			});
			setMarqueeAnimation();
		}
	});

	setTimeout(() => {
		setMarqueeAnimation();
	}, 100);
})();