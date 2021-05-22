
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
	bob1 = new Bob(325,450,20,0)
	rope1 = new Rope(roof.body,bob1.body,0,0)
	bob2 = new Bob(380,450,100,0)
	rope2 = new Rope(roof.body,bob2.body,0,0)
	//bob3 = new Bob(550,395,0,0)
	// rope3 = new Rope(roof.body,bob3.body,0,0)
	// bob4 = new Bob(600,395,-20,0)
	// rope4 = new Rope(roof.body,bob4.body,0,0)
	// bob5 = new Bob(650,395,-40,0)
	// rope5 = new Rope(roof.body,bob5.body,0,0)

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
//   rope3.display()
//   bob3.display()
//   rope4.display()
//   bob4.display()
//   rope5.display()
//   bob5.display()

  drawSprites();
 


}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.applyForce(bob1.body, {x:bob1.body.position.x,y:bob1.body.position.y}, {x:-45,y:-20})
	}
}

