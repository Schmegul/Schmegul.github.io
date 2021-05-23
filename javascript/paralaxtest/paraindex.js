const totalFrames = 208;
var x = window.scrollX;
var newposy = window.scrollY;
var lastpos=0;
//const animationDuration = 1300;
//const timePerFrame = animationDuration / totalFrames;
//let timeWhenLastUpdate;
//let timeFromLastUpdate;
let frameNumber = 1;
//var elmnt = document.getElementById("ngt");



document.addEventListener('scroll', function(e) {
  console.log("scroll");

// 323
// 320
// (int)y/10
// om y är t.ex. 2425 så blir det då istället 242.5 +0.5 och sedan görs den om till
// ett heltal (int). Om sidan är 3090px lång så är antalet 309 sådana max posframes
// 309/208 ger hur många sådana frames en bildframe får ta upp, alltså 1.5 frame/bild.
// med en sorts if-sats avgörs hur många posframes ner man är på sidan. använder det värdet
// för att ändra eye-animation-"[posframe/1.5]"
var posframe =Math.round( ((newposy/10)+0.5));
var cinge =Math.round((posframe/2)+0.5);
 $('.eye-animation').css('opacity', 0);
// and show the required one
console.log("new"+newposy);
console.log("pos"+posframe);
console.log("cinge"+cinge);
 $(`.eye-animation-${cinge}`).css('opacity', 1);
// reset the last update time
//
//
//
//
//
// if (newpos%10==0)



  x = window.scrollX;
  newposy = window.scrollY;


  //ändra if-sats så att den letar efter scroll position aka window.scrollnewposy
  //beroende på värdet som ges av window.scrollnewposy så ändras vilken frameNumber sin visas
  //console.log("cringe");
  // hide all frames
  //
  // if(lastpos<newposy){
  //
  //   frameNumber = frameNumber + 1;
  //
  //   console.log(lastpos);
  // }
  // if(lastpos>newposy){
  //
  //   if(frameNumber>1){
  //     frameNumber = frameNumber - 1;
  //   }
  // }
  // else if(frameNumber >= totalFrames){
  //   frameNumber=1;
  //
  // }
  // $('.eye-animation').css('opacity', 0);
  // // and show the required one
  // $(`.eye-animation-${frameNumber}`).css('opacity', 1);
  // // reset the last update time



  // then increase the frame number or reset it if it is the last frame
  // if (frameNumber >= totalFrames) {
  //   frameNumber = 1;
  // }
  //  else {
  //   frameNumber = frameNumber + 1;
  // }

  lastpos=newposy;
});

// // 'step' function will be called each time browser rerender the content
// // we achieve that bnewposy passing 'step' as a parameter to 'requestAnimationFrame' function
// function step() {
//   // 'startTime' is provided bnewposy requestAnimationName function, and we can consider it as current time
//   // first of all we calculate how much time has passed from the last time when frame was update
//   //if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
//   //timeFromLastUpdate = startTime - timeWhenLastUpdate;
//
//   // then we check if it is time to update the frame
//   //if (timeFromLastUpdate > timePerFrame) {
//   if(newposy>600){
//     //ändra if-sats så att den letar efter scroll position aka window.scrollnewposy
//     //beroende på värdet som ges av window.scrollnewposy så ändras vilken frameNumber sin visas
//     console.log("cringe");
//     // hide all frames
//     $('.enewposye-animation').css('opacitnewposy', 0);
//     // and show the required one
//     $(`.enewposye-animation-${frameNumber}`).css('opacitnewposy', 1);
//     // reset the last update time
//     timeWhenLastUpdate = startTime;
//
//     // then increase the frame number or reset it if it is the last frame
//     if (frameNumber >= totalFrames) {
//       frameNumber = 1;
//     } else {
//       frameNumber = frameNumber + 1;
//     }
//   }
//
//   // requestAnimationFrame(step);
// }
//
//
//
// // // wait for images to be downloaded and start the animation
// // $(window).on('load', () => {
// //   requestAnimationFrame(step);
// // });
//
// if((position+y))
// 3000/200=15
