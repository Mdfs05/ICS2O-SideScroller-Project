// var particles = [];

var person;
var x = 0;
var coin = [];

// var obstacle;

function setup() {
  createCanvas(400, 400);
  person = new Person();
  for (var i = 0; i < 50; i++) {
    coin[i] = new Coin(400 + i * 100, height - 50 + i * -5);
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


  


  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);


  // Wind force
  // if (mouseIsPressed) {
  //   var force = createVector(-0.1, 0);
  //   person.applyForce(force);
  // }

  for (var i = 0; i < 50; i++) {
    //new coin
    coin[i].show();
    person.hits(coin[i]);
  }

  //old rect
  // fill(0, 0, 0);
  // rect(400, height - 50, 20, 20);


  //clouds
  
  var cloudXs = [];
  for (var j = 0; j < 25; j++) {
    cloudXs.push(j * 20);
  }
  
  for (let i = 0; i < cloudXs.length; i++) {
    fill(255, 255, 255);
    ellipse(1 + cloudXs[i] * 6, (10 + cloudXs[i] * 2) % 400, 100, 100);
  }
  // var wind = createVector(0.1, 0);

  // for(var i = 0; i <particles.length; i++) {
  // var gravity = createVector(0, 0.2 * particles[i].mass);

  // Wind is applied only when mouse is pressed
  // Maybe
  // if (mousePressed) {
  // particles[i].applyForce(wind);
}

// particles[i].update();
// particles[i].edges();  
// particles[i].display();
// }
// } *= 
