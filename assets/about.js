(function () {
	const initProductAccordion = () => {
		$('.about__accordion-toggle').click(function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
				$(this).siblings('.about__accordion-description').eq($(this).index()).stop().slideDown(300);
			} else {
				$(this).removeClass('active');
				$(this).siblings('.about__accordion-description').stop().slideUp(300);
			}
		});
	};

	document.addEventListener('shopify:section:load', function () {
		initProductAccordion();
	});

	initProductAccordion();
})();
