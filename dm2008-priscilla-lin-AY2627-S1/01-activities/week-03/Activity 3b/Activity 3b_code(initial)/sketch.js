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

  // a rectangle drawn normally
  fill(255);
  rect(width/2, 250, 20, 100);

  //pink blade
  push()
  // apply transformations
  translate(width/2, height/2); 
  // move origin to the canvas center
  rotate(angle1);                
  // rotate by our variable

  fill(250, 112, 183);
  ellipse(0, 0, 200, 20);          
  // drawn at the new origin, rotated

  // increment angle each frame
  angle1 += 0.09;

  //yellow blade
  pop();
  translate(width/2, height/2);
  rotate(angle2);   
  fill(250, 222, 100);
  ellipse(0, 0, 200, 20);

  angle2 += 0.05;

  push();
  fill(255);
  ellipse(0, 0, 10);

  pop();
   
}

