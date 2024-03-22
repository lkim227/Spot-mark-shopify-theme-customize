(function () {
	function swiperInit() {
		subSliderInit(true);
		sliderInit(true);
	}

	document.addEventListener('shopify:section:load', function (e) {
		swiperInit();
	});

	window.addEventListener('resize', function () {
		$('.js-media-list').each(function () {
			this.swiper.destroy();
		});
		$('.js-media-sublist').each(function () {
			this.swiper.destroy();
		});

		swiperInit();
	});

	swiperInit();
})();
