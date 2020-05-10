var Wall
var bullet

function setup() {
  createCanvas(1200,800);
  Wall = createSprite(400, 100, 50, 80);
  Wall.shapeColor = "white";
  Wall.debug = true;
  bullet= createSprite(400, 800,80,30);
  bullet.shapeColor = "gold";
  bullet.debug = true;

  bullet.velocityY = -5;
  
}

function draw() {
  background(0); 
  console.log("hollo");

  display(Wall);

  display(bullet);



 
  drawSprites();
}
