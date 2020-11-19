var r1,mr1;

function setup() {
  createCanvas(800,400);
  r1 = createSprite(400, 200, 50, 50);
  mr1 = createSprite(600, 200, 80,80);
  r1.shapeColor = "red";
  mr1.shapeColor = "red";
}

function draw() {
  background(255,255,255);
  mr1.x=World.mouseX;
  mr1.y=World.mouseY;

  if(mr1.x - r1.x < r1.width/2 + mr1.width/2 && r1.x - mr1.x < r1.width/2 + mr1.width/2 && r1.y - mr1.y < r1.height/2 + mr1.height/2 && mr1.y - r1.y < r1.height/2 + mr1.height/2  ){
    mr1.shapeColor="green";
    r1.shapeColor="black";
  }else{
    mr1.shapeColor="red";
    r1.shapeColor="red";
  }

  console.log(mr1.x- r1.x);
  drawSprites();
}