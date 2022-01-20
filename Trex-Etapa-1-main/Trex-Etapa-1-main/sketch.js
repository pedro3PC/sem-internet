var tx
var txrunning
var txdead
var azulejo
var azulejoimg
var azulejoinvisivel
function preload(){
txrunning = loadAnimation ("trex1.png","trex3.png","trex4.png")
txdead = loadImage("trex_collided.png")
azulejoimg = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
tx = createSprite(50,180,20,50)
tx.addAnimation("corre",txrunning)
tx.scale = 0.5
azulejo = createSprite(200,180,400,20)
azulejo.addAnimation("chao",azulejoimg)
azulejoinvisivel = createSprite(200,190,400,10)
azulejoinvisivel.visible = false
}

function draw() {
  background(174,195,255);
console.log(tx.y)
if(keyDown("space") && tx.y>=150){
tx.velocityY = -10
}
tx.velocityY = tx.velocityY +0.8
azulejo.velocityX = -10
if(azulejo.x<0){
azulejo.x = azulejo.width/2
}

tx.collide(azulejoinvisivel)
drawSprites()
}
