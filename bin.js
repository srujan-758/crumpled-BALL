class Bin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("dustbin.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      imageMode(CENTER);
      image(this.image,704,558,170,130);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };