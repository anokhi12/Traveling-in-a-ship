
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation(ship-1, ship-2, ship-3, ship-4);
}

if(sea.x < 0){
  sea.x = sea.width/2;
}
spriteName.addImage(seaImg);

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}