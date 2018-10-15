/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
	window.onload = window.setTimeout(() => document.querySelector('body').classList.remove('is-preload'), 100);

	//smart menu
	/* let smartMenu = document.querySelector('#smart-menu'),
		theMenu = document.querySelector('.menu-entry');

	smartMenu.addEventListener('click', () => {
		theMenu.classList.toggle('slide-toggle');
		smartMenu.classList.toggle('is-active');
	}); */
};
