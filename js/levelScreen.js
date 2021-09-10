class Levels{
    constructor(x,y,lvlName){
      this.levels = createSprite(x,y)
      this.levels.addImage(CloseLockImg)
      funObj.getLvls()
      this.levels.scale = 0.5;
      this.levels.visible = false;

      this.lvl = lvlName
      this.posX=x;
      this.posY=y;
    }

    display(){
        background("yellow");
        Hero.hide()
        this.levels.visible = true;
        
        textSize(50);
        text("Level "+this.lvl,this.posX,-50+this.posY)

        if(this.lvl<=playedLvls){
        this.levels.addImage(OpenLockImg)
        if(mousePressedOver(this.levels)){
          gameState = 2;
          funObj.gameStateUpdate(2);
      }        
        }
        
    }

}