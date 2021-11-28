var alex ;
var groundImg,juiceCanImg,coinImg,alexImg,appleImg,stoneImg;
var backgroundImg;

function preload(){
  groundImg = loadImage("ground.png");
  juiceCanImg = loadImage("juiceCan.png");
  coinImg = loadImage("goldCoin.png");
  alexImg = loadImage("player.png");
  backgroundImg = loadImage("background.gif");
  stoneImg=loadImage("stone.png")
  
}
function setup() {
  createCanvas( 800,400);
  
  bg=createSprite(400,200,800,400);
  bg.addImage("b",backgroundImg);

  alex=createSprite(100,360,20,20);
  alex.addAnimation("a",alexImg);
  alex.scale=0.2;

  

 
  invisibleGround = createSprite(width/2,height-10,width,125);  
  invisibleGround.shapeColor = "#f4cbaa";
  
  
  
  ground = createSprite(width/2,height,width/2);
  ground.addImage("ground",groundImg);
  ground.x = width/2
  ground.velocityX = -(6 + 3/100);
  ground.scale=0.92;
 }

function draw() {
  background("white");
 // image(backgroundImg,0,0,width,height);
  text(mouseX+","+mouseY,10,10,fill("red"));

  if((touches.length > 0 || keyDown("UP_ARROW")||keyDown("SPACE")) && alex.y  >= height-110) {
    alex.velocityY = -10;
     touches = [];
  }
  
  alex.velocityY = alex.velocityY + 0

  

  drawSprites();
}

function spawnStone(){
  if(frameCount % 60 === 0) {
    var stone= createSprite(600,310,20,30);
    stone.setCollider('circle',0,0,45)
  
  
    stone.velocityX = -(6+ 3/100);
  }
}