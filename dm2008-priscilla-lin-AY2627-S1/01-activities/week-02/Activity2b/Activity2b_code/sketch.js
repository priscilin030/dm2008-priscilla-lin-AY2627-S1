// DM2008 — Activity 2b [Guided]
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating row of shapes.
// Add a condition to introduce variation — alternating color, size, or spacing.
// Then add one interaction (mouse or key) that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.

let w = 40

function setup() {
  createCanvas(400, 400);
}

// background to be the leaf
function draw() {
  background(33, 92, 18);
  noStroke();

// changed the alternating colours for the caterpillar body
  for (let i = 0; i < width; i += 20) {
    // % (modulo) alternates between 0 and non-zero — good for switching every other shape
    if (keyIsPressed) {
      fill(207, 27, 27);
    } else if (i % 30 == 0) {
      fill(51, 186, 45);
    } else {
      fill(30, 153, 23);
    }

// pushed the body back and changed the size to a variable
    ellipse(i + 60, height / 2, w);
  }

// added this keyIsPressed to change the size of the caterpillar's body
  if (keyIsPressed) {
    w += 0.1
  }
  
// ellipses to be the head of the hungry caterpillar
  fill(207, 27, 27)
  ellipse(30, height/2, 50)
  fill(240, 205, 7)
  ellipse(40, 197, 20)
  ellipse(20, 197, 20)
  fill(47, 140, 43)
  ellipse(40, 197, 15)
  ellipse(20, 197, 15)
  fill(0)
  ellipse(30, 212, 10)
  ellipse(40, 165, 5, 30)
  ellipse(20, 165, 5, 30)
}