(function () {
	const twentytwenty = () => {
		const twentytwentySlider = $(
			".twentytwenty-container[data-orientation!='vertical']",
		).twentytwenty({ default_offset_pct: 0.5 });
	};
	twentytwenty();
	document.addEventListener("shopify:section:load", function () {
		twentytwenty();
	});
})();
