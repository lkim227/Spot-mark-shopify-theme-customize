(() => {
	const initSliders = () => {
		const slideshows = document.querySelectorAll(".slideshow__swiper");
		slideshows.forEach((slideshow) => {
			const autoplay =
				slideshow.getAttribute("data-autoplay") === "true" ? true : false;
			const slideshowSwiper = new Swiper(slideshow, {
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				loop: true,
				autoHeight: false,
				allowTouchMove: true,
			});
			if (autoplay) {
				slideshowSwiper.autoplay.run();
				slideshowSwiper.autoplay.running = true;

				slideshow.addEventListener("mouseenter", () => {
					slideshowSwiper.autoplay.pause();
				});
				slideshow.addEventListener("mouseleave", () => {
					slideshowSwiper.autoplay.run();
				});
			}
			if (slideshowSwiper.addSlide.length < 2) {
				slideshowSwiper.allowTouchMove = false;
			} else {
				slideshowSwiper.allowTouchMove = true;
			}
			if (slideshowSwiper.addSlide.length > 1)
				slideshow.classList.add("slideshow__swiper--multiple-slides");
		});
	};

	initSliders();

	document.addEventListener("shopify:section:load", function () {
		initSliders();
	});
})();
