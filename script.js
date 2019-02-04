"use strict";
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let sqLen = 25;
let sqPad = 5;
let sidePad = 2.5;
let totalLen = sqLen + sidePad * 2;

let decay = 40;
let delay = 140;
let minNumSqs = 10;
let maxNumSqs = 20;

function loop() {
	window.setTimeout(function() {
		window.requestAnimationFrame(del);
		for (let i = 0; i < decay; i++) {
			window.requestAnimationFrame(drawSquares);
		}
		window.requestAnimationFrame(loop);
	}, delay);
	

}

function del() {
	ctx.save();
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.restore();
}

function drawSquares() {
	let numSqs = Math.floor((Math.random() * minNumSqs) + 
		                    (maxNumSqs - minNumSqs));
	let xLoc = Math.floor((Math.random() * canvas.width) / totalLen) 
	                      * totalLen;
	let yLoc = Math.floor((Math.random() * canvas.height) / totalLen) 
	                      * totalLen;
	let opBase = Math.random();

	for (let i = 0; i < numSqs; i++) {
		let opacity = Math.abs(opBase - (0.10 * i));
		ctx.fillStyle = "rgba(126, 224, 255, " + opacity + ")";
		ctx.fillRect(xLoc + ((sqPad + sqLen) * i), yLoc, sqLen, sqLen);
	}
}

window.requestAnimationFrame(loop);