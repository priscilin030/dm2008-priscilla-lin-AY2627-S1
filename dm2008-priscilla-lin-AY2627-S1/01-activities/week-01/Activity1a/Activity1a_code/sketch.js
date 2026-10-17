// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //pastel green background
  background(233, 247, 218);
  //forming the shapes without outlines first
  noStroke();
  //miffy's body, pink to contrast the background
  fill(247, 161, 187)
  ellipse(200, 390, 200, 250)
  //miffy's head
  fill(255);
  ellipse(200, 250, 200, 150);
  ellipse(150, 150, 70, 150);
  ellipse(250, 150, 70, 150);
  //miffy's eyes
  fill(0);
  ellipse(150, 250, 10, 10);
  ellipse(250, 250, 10, 10);
  //lines for miffy's mouth
  stroke(0);
  strokeWeight(3);
  line(210, 270, 190, 280);
  line(190, 270, 210, 280);
  
}
