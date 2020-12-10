var car,wall,speed,weight,def
function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(700,200,60,100);
  weight=random(400,1500)
  speed=random(55,90)
  car.velocityX=speed
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<55){
    car.velocityX=0
    car.x=wall.x-50
    def=0.5*weight*speed*speed/22509
    if (def<100){
      car.shapeColor='green'
    }
    if (def<180&&def>100){
      car.shapeColor='yellow'
    }
    if (def>180){
      car.shapeColor='red'
    }
  }
  
  drawSprites();
}