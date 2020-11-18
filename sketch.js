
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100,680,70,90);
	ground= new Ground(400,700,1200,90);
	box1 = new Bin(700,644,170,40);
	box2 = new Box(790,590,20,150);
	box3 = new Box(620,590,20,150);

	Matter.Body.scale = 0.1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);
  
  
  paperObject.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  //drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:300,y:-200});
	}
}




