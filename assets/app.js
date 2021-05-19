(function() {
	"use strict";

	// Add Scripts Here
    
	const emailComponent = document.getElementsByClassName('temporary-email');
	const hideButton = document.getElementsByClassName('hide')

	hideButton[0].addEventListener('click', () => {
		if(emailComponent[0].classList.contains('inactive')){
			emailComponent[0].classList.remove('inactive')
		}
		else {
			emailComponent[0].className += ' inactive'
		}
	})

	const menu = document.getElementsByClassName('menu')[0]
	const extendedMenu = document.getElementsByClassName('extended')[0]
	menu.addEventListener('click', () => {
		if(extendedMenu.classList.contains('inactive')){
			extendedMenu.classList.remove('inactive')
		}
		else {
			extendedMenu.className += ' inactive'
		}
	})
})();