  var jaxon,path;
  var jaxonImg,pathImg;
  var wall,wall2;
 
function preload(){
  //imagens pré-carregadas
  pathImg=loadImage("path.png");
  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  jaxon=createSprite(200,200);
  jaxon.addAnimation("jaxonImg",jaxonImg);
  jaxon.scale=0.1;

   wall=createSprite(60,200,10,height);
   wall.visible=false;
   wall2=createSprite(350,200,10,height);
   wall2.visible=false;
  //crie sprite aqui
}

function draw() {
  background(0);
  jaxon.x=World.mouseX;
  if(path.y > 400 ){
    path.y = height/2;
  }
  jaxon.collide(wall);
  jaxon.collide(wall2);
drawSprites();
}
