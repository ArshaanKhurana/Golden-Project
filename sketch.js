var canvas, backgroundImage;
var mainMenuImg
var arrowImg;
var playedLvls=0;
var lvlNum;

var gameState = 0;
var database;
var funObj,lvlObj;


function preload(){
  mainMenuImg = loadImage("Images/mainmenuBackground.png");;
  SuperHeroimg = loadImage("Images/HeroMain1.png");
  arrowImg = loadImage("Images/arrow.png");
  OpenLockImg = loadImage("Images/openLock.png");
  CloseLockImg = loadImage("Images/lock.png");
 
}


function setup(){
  canvas = createCanvas(1000,900);
  database = firebase.database();

  funObj = new Functions()
  lvlObj = new Functions()

  Hero = new MainScreen(450,500);
  lvl1 = new Levels(400,150,"1");
  lvl2 = new Levels(600,150,"2");
  lvl3 = new Levels(400,300,"3");
  lvl4 = new Levels(600,300,"4");
  lvl5 = new Levels(500,450,"5");
  
  
}



function draw(){
 if(gameState === 0){
  Hero.display();
 }

 if(gameState === 1){
  lvl1.display();
  lvl2.display();
  lvl3.display();
  lvl4.display();
  lvl5.display();

   
 }
 


 drawSprites();

}



