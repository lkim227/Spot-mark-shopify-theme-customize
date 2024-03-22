class DetailsDisclosure extends HTMLElement {
	constructor() {
		super();
		this.mainDetailsToggle = this.querySelector('details');

		this.addEventListener('keyup', this.onKeyUp);
		document.addEventListener('click', this.onFocusOut.bind(this));
	}

	onKeyUp(event) {
		if (event.code.toUpperCase() !== 'ESCAPE') return;

		const openDetailsElement = event.target.closest('details[open]');
		if (!openDetailsElement) return;

		const summaryElement = openDetailsElement.querySelector('summary');
		openDetailsElement.removeAttribute('open');
		summaryElement.focus();
	}

	onFocusOut(e) {
		const withBoundaries = e.composedPath().includes(this.mainDetailsToggle);

		if (!withBoundaries) {
			this.mainDetailsToggle.removeAttribute('open');
		}
	}

	close() {
		this.mainDetailsToggle.removeAttribute('open')
	}
}

customElements.define('details-disclosure', DetailsDisclosure);
