

function Person(x, y) {
  this.pos = createVector(50, height);
  this.vel = createVector(1.5, 0);
  this.acc = createVector(0, 0);
  this.score = 0;
  // this.mass = 0;

  this.applyForce = function(force) {
    // var f = force.copy();
    // f.div(this.mass);
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    stroke(255);
    rect(this.pos.x, this.pos.y - 50, 30, 50, 30);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -0.5; //-1 for bouncing
      this.pos.y = height;
    }


    // if(this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  }

  this.hits = function(coin) {
    //if person is over coin, do something
    if (this.pos.x >= coin.pos.x && this.pos.x <= coin.pos.x + 40 && this.pos.y >= coin.pos.y && this.pos.y <= coin.pos.y + 100) // 100? See if 40
    {
      coin.pos.y = -400;
      this.score++;
    }
  }

}
