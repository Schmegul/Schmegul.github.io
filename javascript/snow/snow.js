console.log("1");

var x=100;
var y=100;
var xSpeed=50;
var ySpeed=50;
var g=4;
var k=0;
var h=100;

var canvas=document.getElementById("canvas");

var ctx=canvas.getContext("2d");
var h=window.innerHeight; //skärmens höjd
var w=window.innerWidth;  //skärmens bredd
canvas.width=w;           //sätter bredden på canvas (ritytan)
canvas.height=h;          //sätter höjd på canvas

var antalbollar=1400;
var bollar=[]; //skapar en array för många bollar (radie, hastighet, färg, x, y)

//initierar bollar ger startvärden till bollar
for(var i=0;i<antalbollar;i++){
  bollar.push({
  x:Math.floor(Math.random()*w),
  y:Math.floor(Math.random()*h),
  r:Math.random()*5,
  c1:255,
  c2:255,
  c3:255,
  xv:Math.random()*5,
  yv:Math.random()*(14-9)+9
  })
}
//for(int i=0;i<720;i++){
      //från 1-0-(-1)

//}

function update(){
  bollar.forEach((boll, bollar) => {


    boll.y=boll.y+boll.yv;  //förflyttar y position med hastigheten i y led
    //ySeed=y+ySpeed;
  //  boll.x=boll.x+boll.xv;
    //xSpeed=x+xSpeed;



      if(boll.y>h){  //tar hand om studs nere
        boll.y=1;
        //ySpeed=ySpeed*-1;
    //    boll.y=boll.y-(boll.r/5);

        }
        if(boll.x>w){
            boll.x=boll.r;
//            xSpeed=xSpeed*-1;
            }
            if(boll.x<0){
              boll.x=w-boll.r;
              //xSpeed=xSpeed*-1;

              }



    });
}

function paint(){
  h++;

  ctx.clearRect(0,0,w,h);
  for(var i=0;i<antalbollar;i++){
  var boll=bollar[i]; //plockar ut en array ur arrayen
  ctx.fillStyle="rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
  ctx.beginPath();
  boll.xv=2*Math.cos(h*(Math.PI/180));
  boll.x=boll.x+boll.xv;
  ctx.arc(boll.x,boll.y,boll.r,0,2*Math.PI); //x,y,r,startvinkel,slutvinkel i radianer
  ctx.fill();

  }
  update();
}



setInterval(paint,30);
