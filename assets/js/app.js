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



let slides = document.querySelectorAll('.slide');
var next = document.querySelectorAll('.arrow-right');
let previous = document.querySelectorAll('.arrow-left');

var count = 0;
console.log(next);
		
for (var i = 0; i < slides.length; i++) {
	next.addEventListener('click', function() {
		let first = slides[0];
		let last = slides[slides.length-1];
		slides[i] = slides[i+1];
		if (i = slides.length - 1) {
			slides[slides.length-1] = first;
		}
	})
}



