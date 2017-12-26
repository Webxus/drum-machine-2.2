'use strict';

/*Задача 2. Ударная установка
В рамках домашнего задания к лекции «Способы поиска нужного HTML-элемента»
Описание
При клике на кнопки <li class="drum-kit__drum"> с названием звука воспроизвести соответствующий звук.
Интерфейс
Для проигрывания звука следует обращаться к тегу audio, установленному в кнопке.
*/

const audio = document.getElementsByTagName('audio');

const clap = document.getElementsByClassName('drum-kit__drum key-clap');
const hihat = document.getElementsByClassName('drum-kit__drum key-hihat');
const kick = document.getElementsByClassName('drum-kit__drum key-kick');
const openhat = document.getElementsByClassName('drum-kit__drum key-openhat');
const boom = document.getElementsByClassName('drum-kit__drum key-boom');
const ride = document.getElementsByClassName('drum-kit__drum key-ride');

clap[0].onclick = function() {
	audio[0].play();
}
hihat[0].onclick = function() {
	audio[1].play();
}
kick[0].onclick = function() {
	audio[2].play();
}
openhat[0].onclick = function() {
	audio[3].play();
}
boom[0].onclick = function() {
	audio[4].play();
}
ride[0].onclick = function() {
	audio[5].play();
}