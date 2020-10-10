var A;
var B;
function setup() {
  createCanvas(800,400);
 B= createSprite(400, 200, 50, 50);
  A=createSprite(300,300,20,20);
  
}

function draw() {
  background(255,255,255);  
  A.x= mouseX;
  A.y=mouseY;
  if (A.x-B.x<=A.width/2+B.width/2 && B.x-A.x<=A.width/2+B.width/2&& A.y-B.y<=A.height/2+B.height/2 && B.y-A.y<=A.height/2+B.height/2){
    A.shapeColor="red";
    B.shapeColor="blue";
  }
  else {
    A.shapeColor="gray";
    B.shapeColor="gray";
  }
  drawSprites();
}