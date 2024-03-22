(function () {
	let swiperMulticolumn;
	const multicolumnSwipeEnabled = document.querySelector(
		".swiper--multicolumn",
	);

	const addClasses = () => {
		const slides = document.querySelectorAll(".multicolumn-list__item");
		slides.forEach((slide) => {
			slide.classList.add("swiper-slide");
		});
	};

	const initSlider = () => {
		swiperMulticolumn = new Swiper(".swiper--multicolumn", {
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 0,
				},
				640: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 24,
				},
			},

			pagination: {
				el: ".multicolumn__pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".multicolumn__button-next",
				prevEl: ".multicolumn__button-prev",
			},
		});
	};

	const destroySlider = () => {
		const slides = document.querySelectorAll(".multicolumn-list__item");

		if (Array.isArray(swiperMulticolumn)) {
			swiperMulticolumn.forEach((swiper) => {
				swiper.destroy(true, true);
			});
		} else {
			swiperMulticolumn.destroy(true, true);
		}
		swiperMulticolumn = null;

		slides.forEach((slide) => {
			slide.removeAttribute("style");
			slide.classList.remove("swiper-slide");
		});
	};

	const initMulticolumn = () => {
		const multicolumnSection = document.querySelector(".multicolumn-section");

		const sectionResizeObserver = new ResizeObserver((entries) => {
			const [entry] = entries;

			if (entry.contentRect.width < 991 && multicolumnSwipeEnabled) {
				addClasses();
				initSlider();
			} else if (swiperMulticolumn) {
				destroySlider();
			}
		});

		sectionResizeObserver.observe(multicolumnSection);
	};

	if (swiperMulticolumn) {
		destroySlider();
	}
	addClasses();
	initMulticolumn();
	initSlider();
	document.addEventListener("shopify:section:load", function () {
		if (swiperMulticolumn) {
			destroySlider();
		}
		addClasses();
		initMulticolumn();
		initSlider();
	});
})();
