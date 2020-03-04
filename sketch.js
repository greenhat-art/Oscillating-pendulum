const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var string, base, ball;

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
    //making the ground
    ground = new Ground(250,height,500,20);
    //make the base
    var baseOptions = {
        isStatic : true
    }
    base = Bodies.rectangle(200,100,200,20,baseOptions);
    World.add(world,base);
    //making the ball
    var ballOptions = {
        restitution : 1.0,
        density : 1.0
      }
    ball  = Bodies.circle(200,200,40,ballOptions);
    World.add(world,ball);
    //creating boundaries
      
    //making the string
    var options = {
        bodyA : ball,
        bodyB : base,
        stiffness: 0.04,
        length : 190
      }
      var thread = Constraint.create(options);
      World.add(world,thread);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    fill("black");
    text("Press Space to move the pendulum along with the mouse",50,20);
    text("Press Enter to stop the Pendulum",100,50);
    //base
    fill ("blue");
    rectMode(CENTER);
    rect(base.position.x,base.position.y,200,25);
    ball
    fill("brown");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);
    //string
    strokeWeight(1);
    stroke("red");
    line(ball.position.x,ball.position.y,base.position.x,base.position.y)
    //movement
    if(keyCode === 32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    }
    else if (keyCode === ENTER){
    ball.position.x = 200;
    }
}
