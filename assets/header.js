(function () {
	const header = () => {
		const megaMenuLinks = document.querySelectorAll(".list-menu--megamenu");
		megaMenuLinks.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				link.classList.add("list-menu--megamenu-visible");

				link.addEventListener("mousemove", () => {
					link.classList.add("list-menu--megamenu-visible");
				});

				link.addEventListener("mouseleave", () => {
					setTimeout(() => {
						link.classList.remove("list-menu--megamenu-visible");
					}, 300);
					link.addEventListener("mouseenter", () => {
						link.classList.add("list-menu--megamenu-visible");
					});
				});
			});
		});
	};

	document.addEventListener("shopify:section:load", header);

	header();
})();
