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

console.log(slides.childNodes);
console.log(slides.children);
console.log(dots);

var num = 0;

dots[num].classList.add('active');
function slide(){
	var remove = slides.removeChild(slides.children[0]);
	for (let i = 0; i < dots.length; i++){
		dots[i].classList.remove('active');
	}
	num++;
		if (num === dots.length ) {
			// dots[num].classList.remove('active');
			dots[0].classList.add('active');
			slides.appendChild(remove);
			num = 0;
			return;
		}
	dots[num].classList.add('active');
	slides.appendChild(remove);
};



// }

// function slide(){
// 	let first = slides.children[0];
// 	console.log(first);
// 	for (let i = 0; i < slides.children.length; i++) {
// 		if (i === slides.children.length - 1){
// 			slides.children[i] = first;
// 			break;
// 		}
// 		slides.children[i] = slides.children[i + 1];
// 	}
// 	// console.log(arr);
// 	// return arr;
// }
// 	var remove = slides.removeChild(slides.children[0]);
// 	slides.appendChild(remove);
// }


// function myFunction() {
//   var list = document.getElementById("myList");
//   var remove = list.removeChild(list.childNodes[0]);
//   var demo = document.querySelector('#demo')
//   demo.appendChild(remove);
// }



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









