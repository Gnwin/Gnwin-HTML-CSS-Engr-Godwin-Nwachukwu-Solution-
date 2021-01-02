let dropdownState = false;
let navicon = document.getElementById('nav-icon1');
let dropdown = document.querySelector('.hamburger-dropdown');

navicon.addEventListener('click', function(){
	this.classList.toggle('open');
	dropdownState = !dropdownState;
	if (dropdownState) {
		dropdown.classList.toggle('block');
	}
	dropdownState = !dropdownState;
})


let slides = document.getElementById('carousel-inner');
let dots = document.querySelectorAll('.dot');

var num = 0;
dots[num].classList.add('active');

var remove;

function slide(n){
	remove = slides.removeChild(slides.children[n]);
	for (let i = 0; i < dots.length; i++){
		dots[i].classList.remove('active');
	}
	num++;
	if (num === dots.length) {
		dots[n].classList.add('active');
		slides.appendChild(remove);
		num = n;
		return;
	}
	dots[num].classList.add('active');
	slides.appendChild(remove);
};


function slideOne(){
	if (num === 0){
		dots[num].classList.remove('active');
		dots[dots.length-1].classList.add('active');
		remove = slides.removeChild(slides.children[slides.children.length - 1]);
		slides.insertBefore(remove, slides.childNodes[0]);
		num = dots.length-1;
		return;
	}
	num--
	for (let i = 0; i < dots.length; i++){
		dots[i].classList.remove('active');
	}
	remove = slides.removeChild(slides.children[slides.children.length - 1]);
	dots[num].classList.add('active');
	slides.insertBefore(remove, slides.childNodes[0]);
};


// arr = [1,2,3,4];
// function slide(arr){
//   let first = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//      if (i === arr.length - 1){
//        arr[i] = first;
//        break;
//      }
//      arr[i] = arr[i + 1];
//   }
//   console.log(arr);
//   // return arr;
// }

// this.slide(arr);
// this.slide(arr);
// this.slide(arr);
// this.slide(arr);









