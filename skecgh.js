let cor;
let posicaohorizontal//x
let posicaoverdical//y

function setup() {
  createCanvas(1000, 400);
  background(color(100,0,0));
  cor =color(random(0,250),random(0,250),random(0,250));
  posicaohorizontal=200
  posicaovertical=200
}

function draw() {
  
  fill(cor)
  circle(posicaohorizontal,posicaovertical,10);
  if(mouseX< posicaohorizontal){posicaohorizontal=posicaohorizontal-1
                            
  }                           
 
                              
if(mouseX> posicaohorizontal){
  
  posicaohorizontal=posicaohorizontal+1
    
  }
  if(mouseY<posicaovertical){posicaovertical--;}
  
if(mouseY>posicaovertical){posicaovertical++;}

  
  

  }



