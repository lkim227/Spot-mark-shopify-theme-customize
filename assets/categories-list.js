$(document).ready(function () {
	let collectionListHover = () => {
		$('.categories-list__title').mouseenter(function (event) {
			const categoriesListProducts = document.querySelectorAll('.categories-list__product');
			const dataIndex = this.getAttribute("data-index");
			categoriesListProducts.forEach(product => {
				if (product.dataset.index == dataIndex) {
					product.classList.add('active')
				}
				else {
					product.classList.remove("active");
				}
			});
		});
	};

	let checkBackground = () => {
		const categoriesListSection = document.querySelectorAll('.categories-list-section');
		const categoriesList = document.querySelectorAll('.categories-list');
		categoriesList.forEach(element => {
			if (element.classList.contains('color-background-1')) {
				categoriesListSection.forEach(section => {
					section.classList.add('no-padding');
				})
			}
		})
	}

	document.addEventListener('shopify:section:load', function () {
		checkBackground();
		collectionListHover();
	});

	checkBackground();
	collectionListHover();
});
