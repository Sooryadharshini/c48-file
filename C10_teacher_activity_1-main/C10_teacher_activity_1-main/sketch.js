var alex,alex_image;


function preload(){
  alex_image=loadImage("player.png");
  ground_image=loadImage("ground.png");
  bgImage=loadAnimation("bg.gif");

}


function setup(){

  createCanvas(600,300);

  bg=createSprite(300,150,600,300);
  bg.addAnimation("a",bgImage);

  ground=createSprite(200,310,1200,20);
  ground.addImage(ground_image);
  
  alex=createSprite(50,230,10,40);
  alex.addImage(alex_image);
  alex.scale=0.2;

  ground2=createSprite(100,250,200,20);
  ground2.visible=false;



}


function draw(){
  background(255);
  //image(bgImage,300,150,600,300);
  text(mouseX+","+mouseY,mouseX,mouseY);

  if(keyDown("space")){
    alex.velocityY=-10;
  }

  alex.velocityY+=0.8;

  ground.velocityX=-5;

  if(ground.x<0){
    ground.x=ground.width/2;
  }

  alex.collide(ground2);


  drawSprites();
}
