var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score =0;
var contaai = 0
var jogano=1

var estadojogo=jogano
var naoconseguene
var AE
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
 
}
 
function draw() {
  background("black");
  textSize(35)

  fill("white");
  text("Tentativas : "+contaai,300,40)
  
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();

  text("Score : "+score,20,40);
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
      if(ball.body.position.y>760){
        if(ball.body.position.x<300){
          score=score+500
          ball=null
          if(contaai>=5) estadojogo =naoconseguene
        }

        else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
        {
              score = score + 100;
              ball=null;
              if ( contaai>= 5) gameState ="end";

        }
        else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
        {
              score = score + 200;
              ball=null;
              if ( contaai>= 5)  gameState ="end";

        }      
        
  }

}


     
  
    

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
   
   if(estadojogo==jogano){
  
    if(estadojogo==naoconseguene){
      textSize(50)
      text("CABO-SE",200,340)
      textSize(10)
      text("game over",200,350)
    }
}


}


/*if(ball.body.position.x<300){
  score=score+500
}
if(ball.body.position.x>301&&ball.body.position.x<600){
  score=score+100
}
if(ball.body.position.x>601&&ball.body.position.x<900){
  score=score+100
}*/



function mousePressed(){
  if(estadojogo == jogano){
    ball=new Ball(mouseX, 10, 10, 10);  

    contaai = contaai +1
    if(contaai == 5){
      estadojogo = naoconseguene}
  }
  
}