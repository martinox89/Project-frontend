/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


//Slider expansion selector

var menuNav = document.querySelector(".menu-nav");
var menuBtn = document.querySelector(".hamburger");





// CLICK EVENT ON HAMBURGER

var menuBarTop = document.querySelector(".line1");
var menuBarMiddle = document.querySelector(".line2");
var menuBarBottom = document.querySelector(".line3");



function Slider() {



    menuNav.classList.toggle("expanded");
    menuBtn.classList.toggle("hamburger-animate");
    menuBarMiddle.classList.toggle("middle-animate");
    menuBarTop.classList.toggle("top-animate");
    menuBarBottom.classList.toggle("bottom-animate");


}


menuBtn.addEventListener("click", Slider);
