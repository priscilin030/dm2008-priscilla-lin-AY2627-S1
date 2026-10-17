// DM2008 — Activity 3b
// One Function Wonder (30 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.

let angle1 = 0;
let angle2 = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(177, 220, 252);
  noStroke();

  // Creating the for loop to duplicate the drawing
  for (let i = 0; i < 5; i++) {
    drawWindmill(30 * i, 30 * i, 150, 20);
    angle1 += 0.01;
    angle2 += 0.02;
  }

  // Drawing the windmill
  function drawWindmill(x, y, z, w) {

  // White rectangle
  translate(x, y);
  fill(255);
  rect(0, 40, 10, 70);

  // Pink blade
  push();
  rotate(angle1);
  fill(250, 112, 183);
  ellipse(0, 0, z, w);

  // White cloud
  pop();
  fill(255);
  ellipse(0, 80, 30);
  ellipse(15, 80, 20);
  ellipse(-15, 80, 20);

  // Yellow blade
  push();
  rotate(angle2);
  fill(250, 222, 100);
  ellipse(0, 0, z, w);

  // White center
  pop();
  fill(255);
  ellipse(0, 0, 10);
  }
}