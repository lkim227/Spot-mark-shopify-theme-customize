(function () {
	const initCollapsibleContent = () => {
		$(".collapsible-content__toggle").unbind("click").on("click", function () {
			const parent = $(this).parent();

			if (!parent.hasClass("active")) {
				parent
					.siblings(".collapsible-content__item.active")
					.removeClass("active");
				parent.addClass("active");
				$(this)
					.closest(".collapsible-content__items")
					.find(".collapsible-content__answer")
					.stop()
					.slideUp(300);
				$(this).next().stop().slideDown(300);
			} else {
				parent
					.siblings(".collapsible-content__item.active")
					.removeClass("active");
				parent
					.closest(".collapsible-content__items")
					.find(".collapsible-content__answer")
					.stop()
					.slideUp(300);
				parent.removeClass("active");
				$(this).next().stop().slideUp(300);
			}
		});
	};

	document.addEventListener("shopify:section:load", function () {
		initCollapsibleContent();
	});

	initCollapsibleContent();
})();
