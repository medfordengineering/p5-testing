//Set up an array to hold my objects
let mazus = []

function setup() {
	createCanvas(800, 800);
	background('lightblue');

}

function draw() {
	background('lightblue')
	//Place the mazus on the canvas
	for (i = 0; i < mazus.length; i++) {
		mazus[i].show()
	}
}

function mouseDragged() {
	//Create a new mazu for every mouse press
	let mazu = new Mazu(mouseX, mouseY)
	mazus.push(mazu);
}

class Mazu {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.color = 'darkorange'
		this.size = 10
	}
	show() {
		noStroke()
		fill(this.color)
		triangle(this.x, this.y, this.x + this.size, this.y + this.size, this.x - this.size, this.y + this.size)
		fill('darkorchid')
		ellipse(this.x, this.y, this.size / 2);
	}
	
}