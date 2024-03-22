(function () {

	const footer = () => {
		const footerDetails = document.querySelectorAll(
			'.footer .accordion details',
		);
		footerDetails.forEach((targetDetail) => {
			targetDetail.addEventListener('click', () => {
				footerDetails.forEach((detail) => {
					if (detail !== targetDetail) {
						detail.removeAttribute('open');
					}
				});
			});
		});

	}

	document.addEventListener('shopify:section:load', footer);
	footer();

})();