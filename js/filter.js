/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var Knop = document.querySelector('button');
var Form = document.querySelector('form');

function filteren () {
Form.classList.toggle('show');
}

Knop.addEventListener('click', filteren); 
