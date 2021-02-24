
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundimg= loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(1500,400);


	engine = Engine.create();
	world = engine.world;

	ground1= new ground(600,400,1700,20);
	hero1= new hero(100,20,200,100);
	rope1= new slingshot(hero1.body,{x:200,y:150});

	block1= new block(500,100,50,60);
	block2= new block(500,40,50,60);
	block3= new block(600,260,50,60);
	block4= new block(700,260,50,60);
	block5= new block(600,160,50,60);

	block6= new block(600,100,50,60);
	block7= new block(500,200,50,60);
	block8= new block(600,40,50,60);

	block9= new block(500,160,50,60);



	block10= new block(700,200,50,60);
	block11= new block(700,160,50,60);
	block12= new block(700,100,50,60);
	block13= new block(700,40,50,60);
	block14= new block(500,280,50,50);

	monster1= new monster(500,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  
  
  drawSprites();
 ground1.display();
 hero1.display();
 rope1.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
monster1.display();
set();
}


function mouseDragged(){
    Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	rope1.fly();
}

function keyPressed(){
    if(keyCode === 32){
		rope1.attach(hero1.body);
		Matter.Body.setPosition(hero1.body, {x: 150 , y:300});
    }
}


