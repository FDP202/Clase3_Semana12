/**
 * 1. Descargar... VSCODE
 * 2. Descargar Plugin Live Server
 * 3. Descargar Plugin p5.vscode
 * 4. rebote...
 * 5. preguntas.
 * 6. Foto!
 */



class Rectangulo{

  constructor(){
    this.x = Math.random()*500; // 0-1
    this.y = 300;
    this.alto = 50; // 0-1
    this.ancho = 50; // 0-1
    this.dir = true;
    this.r = 255;
    this.g = 0;
    this.b = 0;  
  }

  pintar(){
    fill(this.r,this.g,this.b);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto);
    rectMode(CORNER);
  }

  mover(){      
    if(this.dir === true){
      this.y+=5
    }else{
      this.y-=5;
    }
    if(this.y >= 500 || this.y <= 0 ){
      this.dir = !this.dir;
    }
  }

  validarClickCambiarColor(mx, my){    
    if(dist(this.x,this.y,mx,my)<50){
      this.r = (int)(Math.random()*255);
      this.g = (int)(Math.random()*255);
      this.b = (int)(Math.random()*255);      
    }
  }
}

let p = new Rectangulo();
let q = new Rectangulo();

let x;
let y;
let atrapado;
let valores;

let objeto = {
  x:250,
  y:50,
  ancho:50,
  alto:50,
  pintar(params) {
    fill(255,0,0);
    ellipse(this.x,this.y,this.ancho, this.alto);
  }
}; // JSON (javascript object notation)

let objetoB = {
  x:250,
  y:100,
  ancho:50,
  alto:50,
  pintar(params) {
    fill(255,0,0);
    ellipse(this.x,this.y,this.ancho, this.alto);
  }
}; // JSON (javascript object notation)

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 200;
  atrapado = false;
  valores = [];
  console.log("hola...");
  console.log("valores....");

  for (let index = 4; index < 10; index++) {   
    valores.push(index);  
  }

  //console.log(valores);

  console.log(p);

}

function draw() {
  background(220);
  fill(0,0,0);
  //ellipse(x,y,50,50);  
  //rect(50,50,50,50,10,10,10,10);
  //objeto.pintar();
  //objetoB.pintar();
  p.pintar();
  p.mover();

  q.pintar();
  q.mover();
}

function mousePressed(){
  p.validarClickCambiarColor(mouseX, mouseY);
  q.validarClickCambiarColor(mouseX, mouseY);
  if(dist(mouseX, mouseY, x, y)<25){
    atrapado = true;
  }
}

function mouseDragged(){
  if(atrapado === true){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  atrapado =  false;
}


