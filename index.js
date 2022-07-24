// Set Menu 
let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");

menuBtn.onclick = function(){
    sideNav.style.right == "-220px"
    if(sideNav.style.right == "-220px")
    {
        sideNav.style.right = "0";
        menu.src = 'img/close.png';
    }
    else
    {
        sideNav.style.right = "-220px";
        menu.src = 'img/menu.png'
    }
}

// Scroll Speed of Side Nav
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});