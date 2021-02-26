let x = 400;
let y = 500;
let r = 200
let rn = 400

let mode = true;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
}

function draw() {
	
	let s = rn/r
	fill('cyan')
	ellipse(x, y, r);
	fill('yellow')
	rect(x, y + 50/s, 50/s);
}

function mouseClicked() {
	mode = !mode;
	print(mode)
}