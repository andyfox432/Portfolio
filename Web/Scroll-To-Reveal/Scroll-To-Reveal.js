let section = document.querySelector('section');
window.addEventListener('scroll', function(){
    let value = window.scrollY * 2;
    section.style.clipPath = "circle(" + value + "px at left center)";
})