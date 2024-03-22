if (!customElements.get('quick-add-modal')) {
	customElements.define('quick-add-modal', class QuickAddModal extends ModalDialog {
		constructor() {
			super();
			this.modalContent = this.querySelector('[id^="QuickAddInfo-"]');
		}

		hide(preventFocus = false) {
			const cartDrawer = document.querySelector('cart-drawer');
			if (cartDrawer) cartDrawer.setActiveElement(this.openedBy);
			this.modalContent.innerHTML = '';

			$('.js-media-list').each(function () {
				this.swiper.destroy();
			});
			$('.js-media-sublist').each(function () {
				this.swiper.destroy();
			});

			subSliderInit(true);
			sliderInit(true);

			if (preventFocus) this.openedBy = null;
			super.hide();
		}

		show(opener) {
			opener.setAttribute('aria-disabled', true);
			opener.classList.add('loading');

			if (opener.querySelector('.loading-overlay__spinner')) {
				opener.querySelector('.loading-overlay__spinner').classList.remove('hidden');
			}

			fetch(opener.getAttribute('data-product-url'))
				.then((response) => response.text())
				.then((responseText) => {
					const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
					this.productElement = responseHTML.querySelector('section[id^="MainProduct-"]');
					this.preventDuplicatedIDs();
					this.removeDOMElements();
					this.setInnerHTML(this.modalContent, this.productElement.innerHTML, opener);

					if (window.Shopify && Shopify.PaymentButton) {
						Shopify.PaymentButton.init();
					}

					if (window.ProductModel) window.ProductModel.loadShopifyXR();

					this.removeGalleryListSemantic();
					this.updateImageSizes();
					this.preventVariantURLSwitching();
					super.show(opener);
				})
				.finally(() => {
					opener.removeAttribute('aria-disabled');
					opener.classList.remove('loading');

					if (opener.querySelector('.loading-overlay__spinner')) {
						opener.querySelector('.loading-overlay__spinner').classList.add('hidden');
					}

					subSliderInit();
					sliderInit();

					/* Toggle fields */
					$('.js-show-more').click(function (e) {
						e.preventDefault();
						$(this).siblings('input').removeClass('hidden');
						$(this).siblings('label').removeClass('hidden');
						$(this).remove();
					});
				});
		}

		setInnerHTML(element, html, opener) {
			element.innerHTML = html;

			// Reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.
			element.querySelectorAll('script').forEach(oldScriptTag => {
				const newScriptTag = document.createElement('script');
				Array.from(oldScriptTag.attributes).forEach(attribute => {
					newScriptTag.setAttribute(attribute.name, attribute.value)
				});
				newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));
				oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
			});

			// Read more button
			const moreBtn = document.createElement('a');
			moreBtn.textContent = `${theme.quickviewMore}`;
			moreBtn.setAttribute('href', opener.getAttribute('data-product-url'));
			moreBtn.setAttribute('class', 'product__full-details');
			element.querySelector('.product__info-container').appendChild(moreBtn);
		}

		removeDOMElements() {
			const relatedSlider = this.productElement.querySelectorAll('related-slider');
			if (relatedSlider) relatedSlider.forEach(el => { el.remove(); });

			const promoBanner = this.productElement.querySelectorAll('.promo-banner');
			if (promoBanner) promoBanner.forEach(el => { el.remove(); });

			const reviews = this.productElement.querySelector('[data-block-handle="reviews"]');
			if (reviews) reviews.remove();

			const about = this.productElement.querySelector('.about');
			if (about) about.remove();

			const text = this.productElement.querySelector('.product__text');
			if (text) text.remove();

			const shareButtons = this.productElement.querySelector('.share-buttons');
			if (shareButtons) shareButtons.remove();

			const rating = this.productElement.querySelector('.rating');
			if (rating) rating.remove();

			const productReviews = this.productElement.querySelector(
				"#shopify-product-reviews",
			);
			if (productReviews) productReviews.remove();

			const tags = this.productElement.querySelector('.product-tags');
			if (tags) tags.remove();

			const description = this.productElement.querySelector('.product__description');
			if (description) description.remove();

			const advantages = this.productElement.querySelectorAll('.advantage-text');
			advantages.forEach(advantage => {
				advantage.remove();
			});

			const note = this.productElement.querySelector('.note');
			if (note) note.remove();

			const pickupAvailability = this.productElement.querySelector('pickup-availability');
			if (pickupAvailability) pickupAvailability.remove();

			const productModal = this.productElement.querySelector('product-modal');
			if (productModal) productModal.remove();

			const productForm = this.productElement.querySelector('floated-form');
			if (productForm) productForm.remove();

			const gift = this.productElement.querySelector('.customer');
			if (gift) gift.remove();
		}

		preventDuplicatedIDs() {
			const sectionId = this.productElement.dataset.section;
			this.productElement.innerHTML = this.productElement.innerHTML.replaceAll(sectionId, `quickadd-${ sectionId }`);
			this.productElement.querySelectorAll('variant-selects, variant-radios').forEach((variantSelect) => {
				variantSelect.dataset.originalSection = sectionId;
			});
		}

		preventVariantURLSwitching() {
			if (this.modalContent.querySelector('variant-radios,variant-selects')) {
				this.modalContent.querySelector('variant-radios,variant-selects').setAttribute('data-update-url', 'false');
			}
		}

		removeGalleryListSemantic() {
			const galleryList = this.modalContent.querySelector('[id^="Slider-Gallery"]');
			if (!galleryList) return;

			galleryList.setAttribute('role', 'presentation');
			galleryList.querySelectorAll('[id^="Slide-"]').forEach(li => li.setAttribute('role', 'presentation'));
		}

		updateImageSizes() {
			const product = this.modalContent.querySelector('.product');
			const desktopColumns = product.classList.contains('product--columns');
			if (!desktopColumns) return;

			const mediaImages = product.querySelectorAll('.product__media img');
			if (!mediaImages.length) return;

			let mediaImageSizes = '(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)';

			if (product.classList.contains('product--medium')) {
				mediaImageSizes = mediaImageSizes.replace('715px', '605px');
			} else if (product.classList.contains('product--small')) {
				mediaImageSizes = mediaImageSizes.replace('715px', '495px');
			}

			mediaImages.forEach(img => img.setAttribute('sizes', mediaImageSizes));
		}
	});
}
