// DM2008 — Activity 3a [Guided]
// Array Sampler (25 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.
//
// Try these:
// - Replace the colors with your own values (sizes, positions, text).
// - Use mousePressed() instead of keyPressed().
// - Use push() to add new items or splice() to remove them.
// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let palette = ["#fac5d2", "#e6c5fa", "#c5d4fa", "#c5faf7", "#c5fad5", "#f9fac5", "#fad8c5"];
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);

  // Even spacing based on how many items are in the array
  const spacing = width / (palette.length + 1);
  // Draw one circle for each palette color
  for (let i = 0; i < palette.length; i++) {
    fill(palette[currentIndex]);                   
    // use the i-th color
    const x = (i + 1) * spacing;        
    // position from the loop index
    ellipse(x, 50, 30);
    ellipse(x, 100, 30);
    ellipse(x, 150, 30);
    ellipse(x, height / 2, 30);
    ellipse(x, 250, 30);
    ellipse(x, 300, 30);
    ellipse(x, 350, 30);
  }
}

// Try changing the array while the loop keeps adapting
function keyPressed() {
  if (key == 'a' || key == 'A') {
    // Add a new random color to the end
    palette.push(color(random(255), random(255), random(255)));
  }
  if (key == 'r' || key == 'R' ) {
    // Remove the last color (if any)
    if (palette.length > 0) {
      palette.splice(palette.length - 1, 1);
    }
  }
}

// Advance to the next color each time a key is pressed
function mousePressed() {
  currentIndex++; // shorthand for currentIndex += 1

  // Wrap back to the start when we reach the end
  if (currentIndex >= palette.length) {
    currentIndex = 0;
  }

  console.log("Current index:", currentIndex, "→", palette[currentIndex]);
}
