// change require to es6 import style
import $ from 'jquery';

let num=0;

// Source: https://stackoverflow.com/questions/5638783/how-do-i-get-this-javascript-to-run-every-second
$(function(){
setInterval(oneSecondFunction, 1000);
});

function oneSecondFunction() {
	let text = `You've been on this page for ${num} seconds.`

	$("body").empty();
	$("body").append("<div>" + text + "</div>");
	num++;
}