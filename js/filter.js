/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var Knop = document.querySelector('button');
var Form = document.querySelector('form');
var More = document.querySelector('.wow');
var Web = document.querySelector('body');
var Hide = document.querySelector('#hide');
var Knop2 = document.querySelector('#knop');

function filteren() {
  Form.classList.toggle('show');
}

function foetsie() {
  Hide.classList.toggle('tada');
}

function raar() {
  Web.classList.toggle('raar');
}

Knop2.addEventListener('click', foetsie);

More.addEventListener('click', raar);



Knop.addEventListener('click', filteren);
