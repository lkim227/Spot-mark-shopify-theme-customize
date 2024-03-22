(function () {
  const initSliders = () =>  {
    const swiperFeaturedProductsVertical = new Swiper('.swiper-featured-products--vertical', {
      slidesPerView: '1',
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination--products',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next--products',
        prevEl: '.swiper-button-prev--products',
      },
      breakpoints: {
        749: {
          slidesPerView: '2',
          slidesPerGroup: 2
        },
        1199: {
          slidesPerView: '3',
          slidesPerGroup: 3
        }
      }
    });

    const swiperFeaturedProductsHorizontal = new Swiper('.swiper-featured-products--horizontal', {
      slidesPerView: '1',
      spaceBetween: -1,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 1,
      pagination: {
        el: '.swiper-pagination--products',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next--products',
        prevEl: '.swiper-button-prev--products',
      },
      breakpoints: {
        989: {
          slidesPerView: '2',
          slidesPerGroup: 2
        },
        1359: {
          slidesPerView: '3',
          slidesPerGroup: 3
        }
      }
    });
  }

  const toggleButton = () => {
    const swiperPagination = document.querySelectorAll('.swiper-pagination--products .swiper-pagination-total');
    if (swiperPagination) {
      swiperPagination.forEach(element => {
        if (element.textContent == '1') {
          element.parentElement.parentElement.classList.add('hide');
          element.parentElement.parentElement.parentElement.classList.add('no-slider');
        }
        else {
          element.parentElement.parentElement.classList.remove('hide');
          element.parentElement.parentElement.parentElement.classList.remove('no-slider');
        }
      });
    }
  }

  const calcHeight = () => {
    const featuredProductsSectionBottom = document.querySelectorAll('.featured-products--bottom');
    featuredProductsSectionBottom.forEach(section => {
      const card = section.querySelector('.featured-products__products-item');
      const cardWrapper = section.querySelector('.featured-products__products-wrapper');
      const featuredProducts = section.querySelector('.featured-products__products');
      if (section && card) {
        const cardHeight = card.getBoundingClientRect().height;
        const cardWrapperHeight = cardWrapper.getBoundingClientRect().height;
        
        let featuredProductsHeight = featuredProducts.getBoundingClientRect().height;
        const marginTop = parseFloat(window.getComputedStyle(featuredProducts, null).getPropertyValue("margin-top"));
        featuredProductsHeight = featuredProductsHeight + marginTop;

        section.style.paddingBottom = '0';
        section.style.marginBottom = '0';
        section.style.paddingBottom = `${cardHeight / 2 + featuredProductsHeight - cardHeight}px`;
        section.style.marginBottom = `${cardHeight / 2 + cardWrapperHeight - featuredProductsHeight}px`;
      }
    });
	};

  const resizeFeaturedProducts = () => {
    const featuredProductsSection = document.querySelectorAll('.featured-products-section');

    const sectionResizeObserver = new ResizeObserver((entries) => {  
      initSliders();
      toggleButton();
      calcHeight();
    });

		initSliders();
		toggleButton();
		calcHeight();

    featuredProductsSection.forEach(section => {  
      sectionResizeObserver.observe(section);
    });
  }


  document.addEventListener('shopify:section:load', function () {
    resizeFeaturedProducts();
  });

  resizeFeaturedProducts();
})();