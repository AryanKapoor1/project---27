
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof 
var bob1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Ground(300,200,400,10)
	bob1 = new Bob(250,450)
	rope1 = new Rope(bob1.body,roof.body,0,0)
	bob2 = new Bob(300,450)
	rope2 = new Rope(bob2.body,roof.body,50,0)
	bob3 = new Bob(350,450)
	rope3 = new Rope(bob3.body,roof.body,100,0)
	bob4 = new Bob(400,450)
	rope4 = new Rope(bob4.body,roof.body,150,0)
	bob5 = new Bob(450,450)
	rope5 = new Rope(bob5.body,roof.body,200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display() 
  bob1.display()
  rope1.display()
  rope2.display()
  bob2.display()
  rope3.display()
  bob3.display()
  rope4.display()
  bob4.display()
  rope5.display()
  bob5.display()

  drawSprites();
 


}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.applyForce(bob1.body, {x:bob1.body.position.x,y:bob1.body.position.y}, {x:-10,y:-20})
	}
}

