/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */
/*eslint-env browser*/
/*eslint 'no-console':0*/
/*global Audio: false */

//BRON: In de les besproken code 

var Knop = document.querySelector('button');
var Form = document.querySelector('form');
var More = document.querySelector('.wow');
var Web = document.querySelector('body');
var Hide = document.querySelector('.hide');
var Knop2 = document.querySelector('#knop');
var audio = new Audio();
audio.src = "content/nogodno.mp3";

//verschillende fuctie aangemaakt die gaan werken wanneer de functie wordt aangeroepen

function filteren() {
  Form.classList.toggle('show');
}

function foetsie() {
  Hide.classList.toggle('daarisdie');
}

function raar() {
  Web.classList.toggle('raar');
  audio.play();
}

//Classlist Toggle zorgt ervoor dat er een class aangemaakt wordt met de waarde die de jijzelf bepaalt.


Knop2.addEventListener('click', foetsie);

More.addEventListener('click', raar);

Knop.addEventListener('click', filteren);
