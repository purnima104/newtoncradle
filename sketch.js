
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball1=new Ball(320,500)
  ball2=new Ball(420,500)
  ball3=new Ball(520,500)
  beam=new Beam(400,100,400,30)

  //creating constrained bodies

  cball1=new ConstraintBody({x:320,y:100},ball1.body)
  cball2=new ConstraintBody({x:420,y:100},ball2.body)
  cball3=new ConstraintBody({x:520,y:100},ball3.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  beam.display();
  ball1.display();
  ball2.display();
  ball3.display();
  cball1.display();
  cball2.display();
  cball3.display();
  drawSprites();
 
}



