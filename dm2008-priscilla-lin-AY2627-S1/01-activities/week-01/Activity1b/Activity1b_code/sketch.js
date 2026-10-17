// DM2008 — Activity 1b [Georg Nees]
// Learning By Making (30 min)

let x;
let y;
let w;

function setup() {
  createCanvas(600, 600)
  //made background cyan
  background(0, 255, 255);
}

function draw() {
  
  x = random(width);
  y = random(height);
  //increased the range to 200
  w = random(10, 200);
  //made background to turn into neon pink
  background(255, 0, 217, 2);
  
  stroke(255);
  //increased range of strokeWeight
  strokeWeight(random(0.5, 5));
  noFill();
  ellipse(x, y, w, w);
  //added a rectangle animation to follow my cursor
  rect(mouseX, mouseY, 100)
}

function keyPressed() {
    saveCanvas("Activity1b_image", "jpg");
}