const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1, box2, box3;
var ground; 
var ball;
var slingShot

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(520, 389, 50, 200);
    box2 = new Box(520, 50, 50, 200);
    ground = new Ground(600,390,1200,10)
    ball = new Ball(300,300,100);
    slingShot = new SlingShot(ball.body,{x:300,y:50})

}

function draw(){
    background("aqua")
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ball.display();
    slingShot.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}