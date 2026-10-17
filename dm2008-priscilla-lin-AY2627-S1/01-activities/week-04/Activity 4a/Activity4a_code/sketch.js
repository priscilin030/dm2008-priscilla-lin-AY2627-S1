// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavor randomizer.
//
// Suggested order:
// 1. Add the missing properties to the constructor (sz, x, y)
// 2. Fix show() so it uses this.flavor, this.x, this.y, this.sz
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();
  cookie = new Cookie("vanilla", 100, width / 2, height / 2);
  
}

function draw() {
  background(115, 65, 15);
  cookie.show();
}

class Cookie {
  constructor(flavor, sz, x, y) {
    // this. binds each value to this specific cookie object
    // Add the missing properties below
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  show() {
    // Fix this method — it should use this.flavor, this.x, this.y, this.sz
    switch (this.flavor) {
      case "chocolate":
        fill(196, 146, 96);
        break;
      case "vanilla":
        fill(255, 223, 150);
        break;
      case "strawberry":
        fill(252, 207, 240);
        break;
      default:
        fill(220, 180, 120);
    }
    ellipse(this.x, this.y, this.sz);
    
    fill(255);
    ellipse(180, 180, 10);
    ellipse(225, 200, 10);
    ellipse(190, 220, 10);
  }

  // Add a move() method — update this.x or this.y based on which key is pressed
  moveleft() {
    this.x -= 2;
  }

  moveright() {
    this.x += 2;
  }

  // Add a randomFlavor() method — set this.flavor to one of at least 3 options
  randomFlavor() {
  }
}


// Call cookie.move() when an arrow key is pressed
function keyPressed() {
  if (key == "a") {
  cookie.moveleft();
  }
  if (key == "d") {
  cookie.moveright()
  }
}

// Call cookie.randomFlavor() when the mouse is clicked
function mousePressed(){
  
}
