class hero {
    constructor (x,y,width,height){
    var options={
      'restitution':0,
      'friction':0,
      'density':1
    }
    this.image=loadImage("Superhero-01.png")
    this.body = Bodies.rectangle(x, y,width,height, options);
          this.x=x;
          this.y=y;
          this.width=width;
          this.height=height;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          imageMode(CENTER);
          image(this.image,this.x,this.y,this.width,this.height);
          pop();
        }
      };
    