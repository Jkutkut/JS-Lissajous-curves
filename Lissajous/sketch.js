var w = 640;
var a = 1;
var b = 2;
var A = w / 2;
var B = w / 2;
var delta = Math.PI/2;

var n = 1;
var sleep = 1000;

function setup() {
  createCanvas(w + 100, w + 100);
  frameRate(1);
  background(220);
  
  
  
  let x,y;
  stroke(0);
  strokeWeight(5);
  
  //manual
  for(let t = 0; t < 2 * Math.PI; t += 0.0001){
    x = A * Math.sin(a * t);
    y = -B * Math.sin(b * t + delta);
    
    p(x,y);
  }
}

function draw() {
}

function p(x,y){
  point(x  + width/2, y + height/2);
}

function mouseClicked(){
  background(220);
    let d;
    for(let t = 0; t < 2 * Math.PI; t += 0.0001){
      d = (n - 1) / n * Math.PI / 2;
      x = A * Math.sin(a * t);
      y = -B * Math.sin(n * t + d);

      p(x,y);
    }
    n++;
}


