class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
        
            'restitution':0.2,
            'friction':2.0,
            'density':5.0
        }
        this.Visiblity=225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("fotos/flecha2.png");
      Matter.Body.setVelocity(this.body, {x:+31, y:-13})
        World.add(world, this.body);
      }
      display(){

        if(this.body.position.y<528){
        var angle = this.body.angle;
        var pos= this.body.position;    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }

        else{
  World.remove(world, this.body)
  push();
  this.Visiblity=this.Visiblity-5;
  tint(225, this.Visiblity);
  image(this.image, this.body.position.x,this.body.position.y, this.width, this.height)
pop();
        }


      }



}