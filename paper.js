class Paper {
  constructor(x, y) {
    this.x= x;
    this.y= y;
    this.r= 120;
    var options= {
      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 1.2
    }

    this.image= loadImage("img/paper.png");
    this.image.resize= 0.2;
    this.body= Bodies.circle(x, y, 20, options);

    World.add(world, this.body);
  }
  display() {
    var pos= this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white');
    fill('orange');
    rectMode(CENTER);
    image(this.image, this.x, this.y, this.r, this.r);
    pop();
  }
}
