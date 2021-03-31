
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, groundObject;
var world;
var paper, paperOptions;
var groundOptions;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	groundOptions= {
		isStatic: true
	}

	 groundObject=new Ground(width/2, 670, width, 20);
	//groundObject = Bodies.rectangle(450, 600, 1400, 240, groundOptions);
	dustbinObj=new Dustbin(1200, 650);
        paper= new Paper(200, 200);
	//paper = Bodies.circle(200, 200, 120);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
// fill("red");
//rect(groundObject.position.x, groundObject.position.y, groundObject.width, groundObject.height);

  groundObject.display();
  dustbinObj.display();
	paper.display();

}

function keyPressed(){
	var force= {x: 130, y: -115};
	if (keyCode=== UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, force);
	}
}
