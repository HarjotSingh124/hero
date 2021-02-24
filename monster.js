class monster {
    constructor (x,y){
    var options={
        isStatic: true,
      'restitution':0,
      'friction':0,
      'density':1
    }
    this.image=loadImage("Monster-02.png")
    this.body = Bodies.circle(x, y,0, options);
          this.x=x;
          this.y=y;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          imageMode(CENTER);
  
          image(this.image,this.x,this.y,80,80);
          pop();
        }
      };
    
    