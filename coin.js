 function Coin(x, y) {
   this.pos = createVector(x, y);
   
   this.show = function() {
     fill(0, 255, 0);
     rect(this.pos.x, this.pos.y, 50, 50);
   }
 }
