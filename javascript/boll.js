console.log("1");


var canvas=document.getElementById("canvas");

var ctx=canvas.getContext("2d");
canvas.width=300;
canvas.height=300;
ctx.fillStyle="rgb(255,255,255,0.8)";
ctx.beginPath();
ctx.arc(100,100,40,0,2*Math.PI); //x,y,r,startvinkel,slutvinkel i radianer
ctx.fill();
