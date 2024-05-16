let cor
let x
let y

function setup() {
  createCanvas(400, 400);
  background("lightblue")
  cor = color (random(0,255),random(0,255),random(0,255))
  x = 200
  y = 200
}

function draw() {
  stroke("white")
  fill(cor)
  circle(x,y,50)
  
  if(mouseX < x)
    x = x -1
  
  if(mouseX > x)
    x = x +1
  
  if(mouseY < y)
    y --
  
  if(mouseY > y)
    y ++
  
  if(mouseIsPressed)
     cor = color (random(0,255),random(0,255),random(0,255), random(0,100))
    

}
