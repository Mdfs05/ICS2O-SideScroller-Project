// var particles = [];

var person;

// var obstacle;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

// function mousePressed() {
  // var p = new Person(mouseX, mouseY, random(2, 4));
  // person.push(p);
// }

function draw() {
  background(100, 50, 100);
  
  translate(-person.pos.x + 50, 0);
  
  if (mouseIsPressed) {
  var force = createVector(-0.1, 0);
  person.applyForce(force);
  }
  
  person.update();
  person.display();
  
  fill(255, 255, 255);
  rect(400, height-50, 50, 50);
  // var wind = createVector(0.1, 0);
  
  // for(var i = 0; i <particles.length; i++) {
    // var gravity = createVector(0, 0.2 * particles[i].mass);
    
    //Wind is applied only when mouse is pressed
    // if (mousePressed) {
      // particles[i].applyForce(wind);
    }
    
    // particles[i].update();
    // particles[i].edges();
    // particles[i].display();
  // }
// } 
