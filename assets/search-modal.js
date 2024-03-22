(function() {
	const searchDetails = document.querySelector('.search .header__details');
	searchDetails.addEventListener('keyup', (e) => {
		if (e.key === 'Escape') {
			searchDetails.removeAttribute("open");
			console.log('esc')
		}
	});
})();