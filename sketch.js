var bgSprite;
var bgImage;
var player;
var playerImage;

function preload(){
      //Load the images
      bgImage = loadImage("Images/background.jpg");
      playerImage = loadImage("Images/spaceship.png");

}
  
function setup(){

    createCanvas(windowWidth,windowHeight);
    //Create bg and add velocity to it 
    bgSprite = createSprite(windowWidth/2,windowHeight/2,50,50);
    bgSprite.addImage(bgImage);
    bgSprite.scale = 5;
    bgSprite.velocityX = -5;
    //Create player and add image
    player = createSprite(200,windowHeight-50,20,20);
    player.addImage(playerImage);
    player.scale = 0.5;

}

function draw(){
      //Background should not end
      if (bgSprite.x<500){
          bgSprite.x = windowWidth/2;
      }

      //Add movement keys to the player
      if (keyDown("UP_ARROW")){
          player.y = player.y-5;
      }

      if (keyDown("DOWN_ARROW")){
        player.y = player.y+5;
      }

      //Set a boundary for the player
      if (player.y<0){
          player.y = 30;
      }

      if (player.y>windowHeight){
          player.y = windowHeight-30;
      }


      drawSprites();

  
}
