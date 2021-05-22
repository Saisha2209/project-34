const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 575, 70, 70);
  box2=new Box(600,505,70,70)
  box3=new Box(600,470,70,70)
  box4=new Box(600,400,70,70)
  box5=new Box(600,330,70,70)
  box6=new Box(600,260,70,70)
  boxA = new Box(900, 575, 70, 70);
  boxB = new Box(900, 505, 70, 70);
  boxC = new Box(900, 470, 70, 70);
  boxD=new Box(900,400,70,70)
  boxE=new Box(900,330,70,70)
  boxF=new Box(900,260,70,70)
  boxG=new Box(900,190,70,70)
  boxH=new Box(900,120,70,70)
  boxI=new Box(700,575,70,70)
  boxII=new Box(700,505,70,70)
  boxIII=new Box(700,470,70,70)
  boxIV=new Box(700,400,70,70)
  unBox=new Box(800,575,70,70)
  deuxBox=new Box(800,505,70,70)
  troisBox=new Box(800,470,70,70)
  quatreBox=new Box(800,400,70,70)
  quinzeBox=new Box(800,370,70,70)
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display()
  boxA.display();
  boxB.display();
  boxC.display();
  boxD.display();
  boxE.display();
  boxF.display();
  boxG.display();
  boxH.display();
  boxI.display();
  boxII.display();
  boxIII.display();
  boxIV.display();
  unBox.display();
  deuxBox.display();
  troisBox.display();
  quatreBox.display();
  quinzeBox.display();
  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
 
 Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  rope.fly();

}
