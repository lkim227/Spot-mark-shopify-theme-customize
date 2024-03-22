function copyURI(evt) {
	evt.preventDefault();
	navigator.clipboard.writeText(window.location.href);
}

const copyLinks = document.querySelectorAll('.copy-btn');

for (const copyLink of copyLinks) {
	copyLink.addEventListener('click', copyURI)
}
