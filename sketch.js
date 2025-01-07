const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boneco;

function preload(){

}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

 boneco = createSprite(width+10,height+10); 
 boneco.scale = 0.50;
 boneco.setCollider("circle", 0,0,227);
 boneco.visible = true;
}   

function draw() {
    background(bg_Img,0,0,width,height);
    Engine.update(engine);
  drawSprites()
}
