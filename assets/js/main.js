$(document).ready(function() {
	AOS.init();

	tocbot.init({
		tocSelector: '#js-toc',
		contentSelector: '.c-product-page__post-content',
		headingSelector: 'h1, h2, h3, h4',
		hasInnerContainers: true,
		collapseDepth: 4,
	});
});
