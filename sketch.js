const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


var gameState=0
var playerCount=0
var form
var game
var spiderImg, spidersalto;
var spider;
var bg1, bg2, bg3;
var columna, columnaImg, colum;
var piso1;
var piso, piso2, piso3, piso4, piso5;
var invisibleground;
var blockImg

var blockGroup;
var pisoGroup;
var laserGroup;
var flechaGroup;
var rayo2Group;

var laserImg, laserImg2;
var ground;

var flech=[];
var Flsprite, FlImg;
var llama1, llama2;
var lImg1, lImg2, lImg3;
var block1=[]
var block2=[]
var block3=[]
var block4=[]
var block5=[]
var flplayer=[]
var tr1, tr2, tr3;

var rayolaser2;
var guardia, guradia2;
var opmisil;


function preload() {
laserImg=loadImage("fotos/laser.png")
laserImg2=loadImage("fotos/laser2.png")
bg1=loadImage("fotos/banner.png")
bg2=loadImage("fotos/back.png")
bg3=loadImage("fotos/back2.png")
spiderImg=loadAnimation("fotos/sp1.png", "fotos/sp2.png", "fotos/sp4.png", "fotos/sp5.png" )
spidersalto=loadAnimation("fotos/sp3.png")
piso1=loadImage("fotos/piso.png")
blockImg=loadImage("fotos/cubo.png")
columnaImg=loadImage("fotos/columna.png")
FlImg=loadImage("fotos/flecha3.png")
lImg1=loadImage("fotos/5752.png")
lImg2=loadImage("fotos/5753.png")
lImg3=loadImage("fotos/5376342_ccexpress.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

game=new Game
game.start();


//creación de grupos
blockGroup=createGroup();
pisoGroup=createGroup();
laserGroup=createGroup();
flechaGroup=createGroup();
llamasGroup=createGroup();
flechaGroup=createGroup();
rayo2Group=createGroup();


//Personaje principal

spider=createSprite(200, 400)
spider.addAnimation("correr", spiderImg);
spider.addAnimation("saltar", spidersalto)
spider.scale=0.1
spider.visible=false


spider.debug=true
spider.setCollider("rectangle", 0, 0, 500, 900)



//piso invisible
invisibleground=createSprite(3400, 590, 7000, 50)
invisibleground.visible=false; 

//piso imagen
piso=createSprite(600, 590);
piso.addImage(piso1);
piso.scale=0.5
pisoGroup.add(piso)

piso2=createSprite(1800, 590)
piso2.addImage(piso1)
piso2.scale=0.5
pisoGroup.add(piso2)

piso3=createSprite(3000, 590)
piso3.addImage(piso1)
piso3.scale=0.5
pisoGroup.add(piso3)

piso4=createSprite(4200, 590)
piso4.addImage(piso1)
piso4.scale=0.5
pisoGroup.add(piso4)

piso5=createSprite(5400, 590)
piso5.addImage(piso1)
piso5.scale=0.5
pisoGroup.add(piso5)

pisoGroup.setVisibleEach(false)

colum=createSprite(1780, 170, 1160, 50)
colum.visible=false



//bloques de la primera montaña
var  bl1=createSprite(600, 540, 10, 10)
bl1.addImage(blockImg)
bl1.scale=0.2
blockGroup.add(bl1)


for(var m=390; m<=540; m=m+50){
var blg=createSprite(700, m , 10, 10)
blg.addImage(blockImg)
blg.scale=0.2
blockGroup.add(blg)

}

for(var m=490; m<=540; m=m+50){
var blg2=createSprite(650, m , 10, 10)
blg2.addImage(blockImg)
blg2.scale=0.2
blockGroup.add(blg2)

}


for(var m=390; m<=540; m=m+50){
var blg3=createSprite(850, m , 10, 10)
blg3.addImage(blockImg)
blg3.scale=0.2
blockGroup.add(blg3)
}

for(var m=440; m<=540; m=m+50){
var blg4=createSprite(1080, m , 10, 10)
blg4.addImage(blockImg)
blg4.scale=0.2
blockGroup.add(blg4)
}

for(var m=490; m<=540; m=m+50){
var blg5=createSprite(1180, m , 10, 10)
blg5.addImage(blockImg)
blg5.scale=0.2
blockGroup.add(blg5)
}


blockGroup.setVisibleEach(false)



//laseres del segundo nivel
for(var m=1400; m<=2400; m=m+300){
  var laser=createSprite(m, 340, 20, 20)
  laser.addImage(laserImg)
  laser.scale=0.2
  laser.velocityY=-13
  laserGroup.add(laser)
}

for(var u=1550; u<=2200; u=u+300){
  var laser2=createSprite(u, 450, 20, 20)
  laser2.addImage(laserImg)
  laser2.scale=0.2
  laser2.velocityY=+11
  laserGroup.add(laser2)
}


laserGroup.setVisibleEach(false)


//paredes del tercer nivel

for(var y=2600; y<=3500; y=y+140){
  var pared1=createSprite(y, 470, 13, 200)

  
}


// piso con motor físico del cuarto nivel
ground=new Ground(4200, 547, 1200, 20)



//montañas con body 
for(var k=250; k<=550; k=k+50){
  block1.push(new Block(4600, k, 50, 50))

}

for(var p=250; p<=550; p=p+50){
  block2.push(new Block(4300, p, 50, 50))

}

for(var p=400; p<=550; p=p+51){
  block3.push(new Block(4200, p, 50, 50))

}


for(var p=350; p<=550; p=p+51){
  block4.push(new Block(4400, p, 50, 50))

}

//guardias del penultimo nivel
guardia=createSprite(6000, 300, 20, 40)
guradia2=createSprite(6000, 100, 20, 40)
}




function draw() {
  Engine.update(engine);

  
//choque de laseres del primer nivel
laserGroup.bounceOff(colum)
laserGroup.bounceOff(invisibleground)



//funcón para pasar del estado 0 a 1
  if(playerCount===1){
    gameState=1
  }
  
  //juego

  if(gameState===1){
   clear();
    game.play();
  background(0, 120, 120)

   //visibilidades de los grupos
  invisibleground.visible=false
  spider.visible=true
  blockGroup.setVisibleEach(true)
  pisoGroup.setVisibleEach(true)
  laserGroup.setVisibleEach(true)

   spider.collide(invisibleground)
   spider.collide(blockGroup)
   spider.collide(colum)

   

  camera.position.x=spider.x+400
  



//laseres
if(spider.x<2380){
  if(frameCount % 130 ===0){
    var laser3=createSprite(2400, random(450, 550), 20, 20)
    laser3.addImage(laserImg2)
    laser3.scale=0.2
    laser3.velocityX=-7
    laser3.lifetime=180
    laserGroup.add(laser3)
  }
}


//flecha del tercer nivel

if(spider.x>2410  && spider.x<3510 ){
  if(frameCount % 60 ===0){
  
  Flsprite=createSprite(3500, random(30, 70), 30, 10)
  Flsprite.addImage(FlImg)
  Flsprite.rotation=-30
  Flsprite.scale=0.15
  Flsprite.lifetime=50
  Flsprite.velocityX=-31
  Flsprite.velocityY=+13
  Flsprite.velocityY=Flsprite.velocityY + 1.91
  Flsprite.friction=0.012
  flechaGroup.add(Flsprite)
  
  }
  }

flechaGroup.bounceOff(invisibleground)

//función llamas del tercer nivel

llamacielo();

llamasGroup.collide(invisibleground)


//función misil oponente del penultimo nivel
misiloponente()

//rayo laser del nivel 4
if(spider.x>3500 && spider.x<5000){
if(frameCount %60===0){
  rayolaser2=createSprite(random(4500, 4800),100, 30, 10)
rayolaser2.addImage(laserImg2)
rayolaser2.rotation=-25
rayolaser2.scale=0.2
rayolaser2.velocityX=-31
rayolaser2.velocityY=+13
rayolaser2.lifetime=50

}


}


//guardias del penultimo nivel
guardia.y=spider.y+50
guradia2.y=spider.y-70

//moviminetos
  if(keyDown("right_arrow")){
    spider.x=spider.x+8
    
     }
  
    if(spider.x>190){
    if(keyDown("left_arrow")){
    spider.x=spider.x-8
  
    }
    }
  
  if(spider.y>300){
  if(keyDown("up_arrow")){
    spider.velocityY=spider.velocityY-3
spider.maxSpeed=+15
  }

  
  }
//gravedad
  spider.velocityY = spider.velocityY + 0.91
  

  //arrojar flechas en el cuarto nivel
  if(spider.x>3500 && spider.x<4800){
if(keyDown("2")){
 flplayer.push(new BaseClass(spider.x, spider.y, 40, 10))
}
  }
   

  //imagenes de fondo
    for(var k=0; k<=5000; k=k+2380) {
  image(bg2, k, -25, 1200, 620)
    }
  
     for(var k=1190; k<=6000; k=k+2380){
  image(bg3, k, -25, 1200, 620)
     }
    
  image(columnaImg, 1200, 150, 1200, 290)
  
  
     
   
         spider.depth=piso.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso2.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso3.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso4.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso5.depth;
         spider.depth=spider.depth+1;
     

        //display de los Bodies
    
         ground.display();

         for (var i = 0; i < block1.length; i++) {
          block1[i].display();   
        }
      

    
        for (var h = 0; h < block2.length; h++) {
          block2[h].display();   
        }

        
        for (var w = 0; w < block3.length; w++) {
          block3[w].display();   
        }

         
        for (var i = 0; i < block4.length; i++) {
          block4[i].display();   
        }


        //display de lansamiento de flechas
        for (var j = 0; j < flplayer.length; j++) {
          flplayer[j].display();   
        }


        

  }

  console.log(gameState);
  drawSprites()
}


function llamacielo(){
  if(spider.x>2410  && spider.x<3510 ){
    if(frameCount % 30 ===0){
    
    llama1=createSprite(random(2600, 3400), 30, 30, 10)
    var rand=Math.round(random(1, 2));
    switch(rand){
      case 1: llama1.addAnimation("caer1",lImg1)
      break;
      case 2: llama1.addAnimation("caer2",lImg2)
      default: break;
    }

    llama1.velocityY=+13
llama1.scale=0.05
llama1.lifetime=40

llamasGroup.add(llama1)

    }

    
    }

    

}



function misiloponente(){

  if(spider.x>4800 && spider.x<6000){
if(frameCount % 30===0){
  opmisil=createSprite(6000, 300, 10, 10)
  opmisil.velocityX=-13

  var positionx= Math.round(random(1, 2));
  if(positionx==1){
    opmisil.y=random(70, 300)
  }

  else{
if(positionx==2){
    opmisil.y=random(310, 590);
}
  }

  opmisil.lifetime=150
  opmisil.tint="blue"
rayo2Group.add(opmisil)

}

  }
}
 