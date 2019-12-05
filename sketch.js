// var particles = [];

var person;
var x = 0;
var coin = [];

// var obstacle;

function setup() {
  createCanvas(400, 400);
  person = new Person();
  for (var i = 0; i < 50; i++) {
    coin[i] = new Coin(400 + i * 100, height - 50 + i * -4);
  }
}

// function mousePressed() {
// var p = new Person(mouseX, mouseY, random(2, 4));
// person.push(p);
// }

function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -3);
    person.applyForce(jump);
  }

}

function draw() {
  background(100, 50, 100);

  translate(-person.pos.x + 50, 0);

  person.update();
  person.edges();
  person.display();
  
  
  if(person.score >= 45) {
  stroke(30, 200, 30);
  textSize(80);
  text("You Win", person.pos.x, 100);
  }


  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);


  if (mouseIsPressed) {
    var force = createVector(-0.1, 0);
    person.applyForce(force);
  }

  for (var i = 0; i < 50; i++) {
    //new coin
    coin[i].show();
    person.hits(coin[i]);
  }

  //old rect
  // fill(0, 0, 0);
  // rect(400, height - 50, 20, 20);


  //clouds
  for (let i = 0; i < 30; i++) {
    fill(255, 255, 255);
    ellipse(10 + i * random(400), 10 + i * random(1), 10, 10);
  }
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
// } *= 
