(function () {
	let parallaxInit = () => {
		let parallaxItems = document.querySelectorAll('.js-parallax');

		let scrollAnimate = function (parallaxItems) {
			for (let elem of parallaxItems) {
				let topPosition = elem.getBoundingClientRect().top,
					bottomPositon = topPosition + elem.getBoundingClientRect().height,
					cHeight = document.documentElement.clientHeight,
					scrollStartPoint =
						pageYOffset + document.documentElement.clientHeight;

				if (
					scrollStartPoint > topPosition + pageYOffset &&
					bottomPositon + pageYOffset > pageYOffset
				) {
					let start = topPosition + pageYOffset - cHeight;

					let end = bottomPositon + pageYOffset;
					let percentScroll = parseInt(
						(pageYOffset - start) / ((end - start) / 100),
					);

					let property = elem.getAttribute('data-parallax-property');
					let propertyVal =
						(parseInt(elem.getAttribute('data-parallax-property-value')) /
							100) *
						percentScroll;

					let parallaxSteps = elem.getAttribute('data-parallax-steps');
					switch (property) {
						case 'translateY':
							if (!parallaxSteps) {
								elem.setAttribute(
									'style',
									`transform: translate3d(0px, ${propertyVal}px, 0px)`,
								);
							} else {
								let parallaxStepsArray = parallaxSteps.split(', '),
									parallaxStepStart = parseInt(parallaxStepsArray[0]),
									parallaxStepEnd = parseInt(parallaxStepsArray[1]);

								if (
									percentScroll >= parallaxStepStart &&
									percentScroll <= parallaxStepEnd
								) {
									let stepPercentScroll =
										(100 / (parallaxStepEnd - parallaxStepStart)) *
										(percentScroll - parallaxStepStart);
									propertyVal =
										(parseInt(
											elem.getAttribute('data-parallax-property-value'),
										) /
											100) *
										stepPercentScroll;
								} else if (percentScroll > parallaxStepEnd) {
									propertyVal = parseInt(
										elem.getAttribute('data-parallax-property-value'),
									);
								} else {
									let stepPercentScroll = 0;
									propertyVal = stepPercentScroll;
								}

								elem.setAttribute(
									'style',
									`transform: translate3d(0px, ${propertyVal}px, 0px)`,
								);
							}

							break;
						case 'rotate':
							elem.setAttribute(
								'style',
								`transform: rotate(${propertyVal}deg)`,
							);
							break;
						case 'translateX':
							elem.setAttribute(
								'style',
								`transform: translateX(${propertyVal}px)`,
							);
							break;
						case 'scaleY':
							if (!parallaxSteps) {
								propertyVal = propertyVal / 100;
								elem.setAttribute('style', `transform: scaleY(${propertyVal})`);
							} else {
								let parallaxStepsArray = parallaxSteps.split(', '),
									parallaxStepStart = parseInt(parallaxStepsArray[0]),
									parallaxStepEnd = parseInt(parallaxStepsArray[1]);

								if (
									percentScroll >= parallaxStepStart &&
									percentScroll <= parallaxStepEnd
								) {
									let stepPercentScroll =
										(100 / (parallaxStepEnd - parallaxStepStart)) *
										(percentScroll - parallaxStepStart);
									propertyVal = stepPercentScroll / 100;
								} else if (percentScroll > parallaxStepEnd) {
									propertyVal =
										parseInt(
											elem.getAttribute('data-parallax-property-value'),
										) / 100;
								} else {
									let stepPercentScroll = 0;
									propertyVal = stepPercentScroll / 100;
								}
								elem.setAttribute('style', `transform: scaleY(${propertyVal})`);
							}
							break;
						case 'opacity':
							if (!parallaxSteps) {
								propertyVal = propertyVal / 100;
								elem.setAttribute('style', `opacity: ${propertyVal}`);
							} else {
								let parallaxStepsArray = parallaxSteps.split(', '),
									parallaxStepStart = parseInt(parallaxStepsArray[0]),
									parallaxStepEnd = parseInt(parallaxStepsArray[1]);

								if (
									percentScroll >= parallaxStepStart &&
									percentScroll <= parallaxStepEnd
								) {
									let stepPercentScroll =
										(100 / (parallaxStepEnd - parallaxStepStart)) *
										(percentScroll - parallaxStepStart);
									propertyVal = stepPercentScroll / 100;
								} else if (percentScroll > parallaxStepEnd) {
									propertyVal = parseInt(
										elem.getAttribute('data-parallax-property-value'),
									);
								} else {
									let stepPercentScroll = 0;
									propertyVal = stepPercentScroll / 100;
								}
								elem.setAttribute('style', `opacity: ${propertyVal}`);
							}
							break;
						case 'scaleX':
							if (!parallaxSteps) {
								propertyVal = propertyVal / 100;
							} else {
								let parallaxStepsArray = parallaxSteps.split(', '),
									parallaxStepStart = parseInt(parallaxStepsArray[0]),
									parallaxStepEnd = parseInt(parallaxStepsArray[1]);

								if (
									percentScroll >= parallaxStepStart &&
									percentScroll <= parallaxStepEnd
								) {
									let stepPercentScroll =
										(100 / (parallaxStepEnd - parallaxStepStart)) *
										(percentScroll - parallaxStepStart);
									propertyVal = stepPercentScroll / 100;
								} else if (percentScroll > parallaxStepEnd) {
									propertyVal = parseInt(
										elem.getAttribute('data-parallax-property-value'),
									);
								} else {
									let stepPercentScroll = 0;
									propertyVal = stepPercentScroll / 100;
								}
								elem.setAttribute('style', `transform: scaleX(${propertyVal})`);
							}
							break;
					}
				}
			}
		};

		scrollAnimate(parallaxItems);
	};

	window.onscroll = () => {
		parallaxInit();
	};
	parallaxInit();

	document.addEventListener('shopify:section:load', function () {
		parallaxInit();
	});
})();
