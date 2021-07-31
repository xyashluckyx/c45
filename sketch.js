var playerCar, ground;
var playerCarImg,groundImg;

function preload(){
    groundImg=loadImage("images/track.jpg");

    playerCarImg=loadImage("images/car1.jpg");
}

function setup(){
  createCanvas(1400,800);

  ground=createSprite(695,400,10,10);
  ground.velocityY=15;
  ground.addImage(groundImg);
  ground.scale=2.8;

  playerCar=createSprite(550,900,100,100);
  playerCar.velocityY=-10;
  playerCar.addImage(playerCarImg);
  playerCar.scale=0.1;

}

function draw(){
  background("black");

  if(ground.y>800){
    ground.y=400;
  }

  if(playerCar.y<=650){
    playerCar.velocityY=0;
  }

  if(keyDown(RIGHT_ARROW)){
    playerCar.x=playerCar.x+10;
  }
  
  if(keyDown(LEFT_ARROW)){
    playerCar.x=playerCar.x-10;
  }

  drawSprites();


}
