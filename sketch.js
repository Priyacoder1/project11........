var path,pathImage;
var runner,runner_running,edges;
var invisibleleftPath;
var invisiblerightPath;




function preload(){
  //pre-load images
pathImage = loadImage("path.png");
//runner_collided = loadImage("runner_collided.png");
runner_running = loadAnimation("runner-1.png","runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200);
  path.addImage(pathImage);
 path.velocityY = 4;
  path.scale=1.2;

runner = createSprite(200,200,20,50);
runner.addAnimation("running", runner_running);
//edges = createEdgeSprites();
runner.scale = 0.04;

invisibleleftPath = createSprite(40,190,20,450);
invisibleleftPath.visible = false;

invisiblerightPath = createSprite(350,190,20,450);
invisiblerightPath.visible = false;








}



function draw() {
  background(0);

 






  //text.depth< path.depth;
  
  //runner.x = World.mouseX;
  if(path.y > 400){
   path.y = height /2;
 }

 




  if (keyIsDown(RIGHT_ARROW)){
    runner.position.x = runner.position.x+5;
    //runner.velocityY = 10;
  }
  if (keyIsDown(LEFT_ARROW)){
    runner.position.x = runner.position.x-5;
  }









//edges = createEdgesSprites();

//runner.collide(edges[3]);








  runner.collide(invisibleleftPath);
  runner.collide(invisiblerightPath);
      
  
    
  
    
    
    //if(score = score+5;)
    // {
   //runner touching coinImage
    // }
    
   








    





  drawSprites();
}



  
  

