let dropdownState = false;
let dropdown = document.querySelector('.hamburger-dropdown');
let navicon = document.getElementById('nav-icon1');

navicon.addEventListener('click', function(){
	this.classList.toggle('open');
	dropdownState = !dropdownState;
	if (dropdownState) {
		dropdown.classList.toggle('block');
	}
	dropdownState = !dropdownState;
})










