// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let num = 0;

function oneSecondFunction() {
  document.getElementById('main').innerHTML = `<div>You've been on this page for ${num} seconds.</div>`;
  num += 1;
}

// Source: https://stackoverflow.com/questions/5638783/how-do-i-get-this-javascript-to-run-every-second
$(() => {
  setInterval(oneSecondFunction, 1000);
});
