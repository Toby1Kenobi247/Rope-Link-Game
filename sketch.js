const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let Tengine;
let Tworld;
var ground;
var dogs;
var bones;
var rope;
var glued;

function setup() 
{
  createCanvas(600,900);
  frameRate(80);
  Tengine = Engine.create();
  Tworld = Tengine.world;
  ground = new Ground(300,800,600,30);
  dogs = Bodies.rectangle(300,755,80,80, {
    isStatic: true,
  });
  //dogs = createImg('pointer.png');
  var ball_options= {
    restitution : 0.95
  }

  rope = new Rope(10, {x:300, y:0});
  
  bones = Bodies.circle(200, 200, 20, ball_options);
  World.add(Tworld,bones);

  console.log(bones);
  console.log(dogs);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  Matter.Composite.add(rope.body, bones);

  glued = new Link(rope, bones);
}

function draw() 
{
  background(121,155,141);
  ground.show();
  fill("coral"); 
  rect(dogs.position.x,dogs.position.y,80,80);
   
  Engine.update(Tengine);
  
  ellipse(bones.position.x,bones.position.y, 20, 20);

  rope.show();

}
