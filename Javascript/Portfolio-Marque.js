const MT = document.getElementsByClassName ('MT');

for (var i = 1; i < 52; i++) {
	MT[i].style.animationDelay = `${i * 0.1}s`;
}