console.log("1");

var x=100;
var y=100;
var xSpeed=50;
var ySpeed=50;
var g=4;

var canvas=document.getElementById("canvas");

var ctx=canvas.getContext("2d");
var h=window.innerHeight; //skärmens höjd
var w=window.innerWidth;  //skärmens bredd
canvas.width=w;           //sätter bredden på canvas (ritytan)
canvas.height=h;          //sätter höjd på canvas

var antalbollar=10;
var bollar=[]; //skapar en array för många bollar (radie, hastighet, färg, x, y)

//initierar bollar ger startvärden till bollar
for(var i=0;i<antalbollar;i++){
  bollar.push({
  x:Math.floor(Math.random()*w),
  y:Math.floor(Math.random()*h),
  r:Math.random()*100,
  c1:Math.random()*255,
  c2:Math.random()*255,
  c3:Math.random()*255,
  xv:Math.random()*20,
  yv:Math.random()*20
  })
}



function update(){
  bollar.forEach((boll, bollar) => {

    boll.yv=boll.yv+g;  //ökar hastigheten
    boll.xv=boll.xv*0.999;


    //ySpeed=ySpeed+g;

    boll.y=boll.y+boll.yv;  //förflyttar y position med hastigheten i y led
    //ySeed=y+ySpeed;
    boll.x=boll.x+boll.xv;
    //xSpeed=x+xSpeed;



      if(boll.y>h-boll.r){  //tar hand om studs nere
        boll.yv*=-1;
        //ySpeed=ySpeed*-1;
        boll.y=boll.y-(boll.r/5);

        }
        else if(boll.y<0+boll.r){ //tar hand om studs uppe
          boll.yv*=-1;
          //ySpeed=ySpeed*-1;

          }
          if(boll.x>w-boll.r){
            boll.xv*=-1;
            //xSpeed=xSpeed*-1;
            }
            else if(boll.x<0+boll.r){
              boll.xv*=-1;
              //xSpeed=xSpeed*-1;
              }



    });
}

function paint(){

  ctx.clearRect(0,0,w,h);
  for(var i=0;i<antalbollar;i++){
    var boll=bollar[i]; //plockar ut en array ur arrayen
  ctx.fillStyle="rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
  ctx.beginPath();
  ctx.arc(boll.x,boll.y,boll.r,0,2*Math.PI); //x,y,r,startvinkel,slutvinkel i radianer
  ctx.fill();
  }
  update();
}



setInterval(paint,30);
