
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roofObject,rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.

	Engine.run(engine);

	bobDiameter=25;
  
	bobObject1=new Bob(150,300,25)
	bobObject2=new Bob(175,300,25)
	bobObject3=new Bob(200,300,25)
	bobObject4=new Bob(225,300,25)
	bobObject5=new Bob(250,300,25)

	roofObject=new Roof(200,200,20,140)
	

	rope1=new rope(bobObject1.Body,roofObject.Body,-bobDiameter*2,0)
     rope2=new rope(bobObject2.Body,roofObject.Body,-bobDiameter*1,0)
	rope3=new rope(bobObject3.Body,roofObject.Body,-bobDiameter*0,0)
	rope4=new rope(bobObject4.Body,roofObject.Body,-bobDiameter*-1,0)
	rope5=new rope(bobObject5.Body,roofObject.Body,-bobDiameter*-2,0)

}


function draw() {
  rectMode(CENTER);
  background(220);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function keyPressed() { 
if (keyCode === UP_ARROW) { 
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
} 
}
