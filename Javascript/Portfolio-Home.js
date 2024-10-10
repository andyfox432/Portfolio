const R1 = document.getElementsByClassName ('R1')[0];
const B1 = document.getElementsByClassName ('B1');

for (var i = 1; i < 100; i++){
	R1.innerHTML += "<div class='block B1'></div>";
	B1[i].style.transform = "rotate("+ 3.6 * i +"deg)";
	B1[i].style.animationDelay = `${i/40}s`;
}

const R2 = document.getElementsByClassName ('R2')[0];
const B2 = document.getElementsByClassName ('B2');

for (var i = 1; i < 100; i++){
	R2.innerHTML += "<div class='block B2'></div>";
	B2[i].style.transform = "rotate("+ 3.6 * i +"deg)";
	B2[i].style.animationDelay = `${i/40}s`;
}

const R3 = document.getElementsByClassName ('R3')[0];
const B3 = document.getElementsByClassName ('B3');

for (var i = 1; i < 100; i++) {
	R3.innerHTML += "<div class='block B3'></div>";
	B3[i].style.transform = "rotate("+ 3.6 * i +"deg)";
	B3[i].style.animationDelay = `${i/40}s`;
}

var typed = new Typed (".Changing", {
		strings: ["NTI Student", "Developer", "Gamer", "Designer"],
		typeSpeed: 100,
		backSpeed:100,
		loop: true
		}
	)

const MTH = document.getElementsByClassName ('MTH');

for (var i = 1; i < 52; i++) {
	MTH[i].style.animationDelay = `${i * 0.1}s`;
}