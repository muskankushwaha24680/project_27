
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1 , bob2 , bob3 , bob4 , bob5 ;
var roof ;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
roof = new Roof(430,100,400,50)

bob1 = new Bob(300,400,30)
bob2 = new Bob(360,400,30);
bob3 = new Bob(420,400,30);
bob4 = new Bob(480,400,30);
bob5 = new Bob(540,400,30);

rope1 = new Rope(bob1.body,{x: 300, y: 100});
rope2 = new Rope(bob2.body,{x: 360,y: 100 });
rope3 = new Rope(bob3.body,{x: 420 , y: 100});
rope4 = new Rope(bob4.body,{x: 480 , y: 100});
rope5 = new Rope(bob5.body,{ x: 540, y: 100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(bob1.body,bob1.body.position,{x: 100, y: -200})
}
}

