(function () {
	const initTimer = () => {
		$(".js-countdown").each(function () {
			const userDate = $(this).data("date");
			const userTime = $(this).data("time");
			const completedCountdown = $(this).data("completed");
			const countdown = $(this).find(".countdown__main");
			const countdownHeading = $(this).find(".countdown__end-info");
			const daysEl = $(this).find(".countdown_block_days");
			const hoursEl = $(this).find(".countdown_block_hours");
			const minutesEl = $(this).find(".countdown_block_minutes");
			const secondsEl = $(this).find(".countdown_block_seconds");
			const section = $(this).parent(".shopify-section");
			// ----------------------------------------------------------------
			const countdownDate = new Date(`${userDate}T${userTime}`);
			const now = new Date();
			const distance = countdownDate.getTime() - now.getTime();
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// ----------------------------------------------------------------
			if (distance < 0 && completedCountdown === "hide_section") {
				clearInterval(initTimer);
				section.stop(false, false).fadeOut(0);
			} else if (distance < 0 && completedCountdown === "show_text") {
				countdown.stop(false, false).fadeOut(0);
				countdownHeading.stop(false, false).fadeIn();
			} else {
				daysEl.html(days);
				hoursEl.html(hours);
				minutesEl.html(minutes);
				secondsEl.html(seconds);
			}
			// ----------------------------------------------------------------
		});
	};
	document.addEventListener("shopify:section:load", function () {
		if (!document.hidden) {
			setInterval(initTimer, 1000);
		}
	});
	document.addEventListener("shopify:section:reorder", function () {
		if (!document.hidden) {
			setInterval(initTimer, 1000);
		}
	});
	if (!document.hidden) {
		setInterval(initTimer, 1000);
	}
})();
