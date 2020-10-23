
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var m1,m2,m3,m4
var boy, tree;
var boyI, treeI;
var lmango, lstone;
var stone1;
var l1;
function preload()
{
	boyI = loadImage('boy.png');
	treeI = loadImage('tree.png');
	
}

function setup() {
	createCanvas(1300, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	boy = createSprite(200,500,70,70);
	boy.addImage(boyI);
	boy.scale = 0.1

	stone1 = new Stone(199,498,30);

	tree= createSprite(750,320,100,100);
	tree.addImage(treeI);
	tree.scale = 0.5;

	m1 = new Mango(700,320,50,50);
	m2 = new Mango(786,320,50,50);
	m3 = new Mango(750,300,50,50);
	m4 = new Mango(768,300,50,50);


	l1 = new launcher(stone1.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
    m1.display();
    m2.display();
   m3.display();
	m4.display();
	stone1.display();
	l1.display();
	
	detectcollision(stone1,m1);
	detectcollision(stone1,m2);
	detectcollision(stone1,m3);
	detectcollision(stone1,m4);

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    l1.fly();
}

function detectollision(lstone,lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstone.r)
	  {
		
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:235, y:420})
		l1.attach(stone1.body);
	}
}
