var mon;
var mon_img;

var son;
var son_img;

var mother, mother_img;


var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14

function preload(){
  mother_img = loadImage("mother.png");
  mon_img = loadAnimation("1_mon.png","2_mon.png","3_mon.png");
  son_img = loadAnimation("boy two.png","boy one.png");
}

function setup() {
  createCanvas(1000,600);
  mother = createSprite(800, 200, 50, 50);
  mother.addImage("mother",mother_img);
  mother.scale = 0.3
  mon = createSprite(400, 200, 50, 50);
  mon.addAnimation("mon",mon_img);
  frameRate(10)
  son = createSprite(600, 200, 50, 50);
  son.addAnimation("son",son_img);


  a1 = createSprite(50, 50, 20, 370)
  a2 = createSprite(250, 520, 380,20 )
  a3 = createSprite(150, 250, 20, 350)
  a4 = createSprite(350, 630, 20, 340)
  a5 = createSprite(450, 390, 390, 20)
  a6 = createSprite(350, 490, 20, 350)
  //a7 = createSprite(400, 200, 330, 20)
  a8 = createSprite(50, 570, 20, 360)
  a9 = createSprite(323, 64, 370, 20)
  a10 = createSprite(430,470, 330,20)
  //a11 = createSprite(600, 210, 20, 360)
  //a12 = createSprite(650, 260, 370, 20)
  //a13 = createSprite(700, 270, 20, 380)
  a14 = createSprite(282,280, 20, 230)
}
function draw() {
  background(187,63,63);  
  textSize(20)
  fill("black");
  text(mouseX +","+ mouseY,100,50)
  textSize(30)
  fill("darkblue");
  strokeWeight(10)
  stroke("red")
  text("GHOST RUNNER",380,40)
  

  drawSprites();
}