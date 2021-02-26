let angle = 0

function setup() {
	createCanvas(800, 800);
	background('white');
	noStroke()
	angleMode(DEGREES)
	rectMode(CENTER);
}

function draw() {
	angle += 30;
	ratio = width / 8;
	for (i = ratio; i < width; i += ratio) {
		spin(width/2, i, 'cornflowerblue', 50, angle);
	}
}

function spin(tx, ty, squareColor, s, r) {
	fill(squareColor)
	push();
	translate(tx, ty)
	rotate(r)
	rect(0, 0, s)
	circleColor = color('pink')
	circleColor.setAlpha(40)
	fill(circleColor)
	ellipse(-s / 2, -s / 2, s / 3);
	ellipse(s / 2, -s / 2, s / 3);
	ellipse(-s / 2, s / 2, s / 3);
	ellipse(s / 2, s / 2, s / 3);
	fill('cyan')
	ellipse(0, 0, s / 1.5, s / 2);
	pop();
}