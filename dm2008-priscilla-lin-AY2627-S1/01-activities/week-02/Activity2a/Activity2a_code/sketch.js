// DM2008 — Activity 2a [Guided]
// Mode Switch (20 min)
//
// Keys 1, 2, 3 switch between modes — each one changes the background color.
// Try extending each mode to also change the fill, size, or speed of the ellipse.
// Keep it simple: one clear change per mode that's easy to see on screen.
//
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0;       // ellipse1 x-position
let y = 0;       // ellipse2 x-position
let z = 0;       // ellipse3 x-position
let w = 0;       // ellipse4 x-position
let size = 20;   // ellipse size
let bgColor;     // background color, changed by key presses

function setup() {
  createCanvas(400, 400);
  bgColor = color(84, 100, 204);
}

function draw() {
  background(bgColor);
  noStroke()

  // --- Your if/else goes here ---
  // Try swapping this out for your own rule.
  if (keyIsPressed) {
    fill(222, 71, 71); // red on click
  } else {
    fill(240, 213, 12); // yellow
  }

  // Draw the ellipse1 at its current position
  ellipse(x, height / 2, size);
  // Move the ellipse
  x += 3;
  // Wrap around when it exits the right edge
  if (x > width + size / 2) {
    x = 0;
  }

 // Draw the ellipse2 at its current position
  ellipse(y, height / 3, size);
  // Move the ellipse
  y += 2;
  // Wrap around when it exits the right edge
  if (y > width + size / 3) {
    y = 0;
  }

// Draw the ellipse3 at its current position
  ellipse(z, height / 4, size);
  // Move the ellipse
  z += 4;
  // Wrap around when it exits the right edge
  if (z > width + size / 4) {
    z = 0;
  }

  // Draw the ellipse4 at its current position
  ellipse(w, 300, size);
  // Move the ellipse
  w += 1;
  // Wrap around when it exits the right edge
  if (w > width + size / 2) {
    w = 0;
  }
  
}

// Keys 1, 2, 3 change the background color — this is your mode switch
function keyPressed() {
  switch (key) {
    case "1":
      bgColor = color(104, 171, 109);
      break; // red
    case "2":
      bgColor = color(148, 104, 171);
      break; // green
    case "3":
      bgColor = color(171, 139, 104);
      break; // blue
    default:
      bgColor = color(84, 100, 204); // grey
  }
}
