$(document).ready(function(){
  // var height = $('cringe').getHeight();
  //document.getElementById('cringe').style.width = my_height + "px";

  // document.getElementById("cringe").style.height

  //behöver se till att width för allt i cringe är samma som height så attachment
  //sidan är responsive om width är ganska liten
  const totalFrames = 97;

  var vidheight = document.getElementById("cringe5");
  var totheight = document.getElementById("background");
  var vidSectionHeight = document.getElementById("tank");
  var footer1 = document.querySelector("footer");
  var newy = (window.scrollY-document.body.scrollHeight+vidheight.offsetHeight+totheight.offsetHeight);
  $(".container").show();
  $(".container").css("display", "flex");

  console.log("totheight"+document.body.scrollHeight);

  $("#ltank").click(function(){

    window.scrollTo({
      top: document.body.scrollHeight-vidheight.offsetHeight-footer1.offsetHeight,
      behavior: 'smooth'
    });

  });
  $("#ldamage").click(function(){

    window.scrollTo({
      top: vidSectionHeight.offsetHeight+document.body.scrollHeight-vidheight.offsetHeight-footer1.offsetHeight,
      behavior: 'smooth'
    });

  });
  $("#lsupport").click(function(){

    window.scrollTo({
      top: 2*vidSectionHeight.offsetHeight+document.body.scrollHeight-vidheight.offsetHeight-footer1.offsetHeight,
      behavior: 'smooth'
    });

  });

  document.addEventListener('scroll', function(e) {
    // 323
    // 320
    // (int)y/10
    // om y är t.ex. 2425 så blir det då istället 242.5 +0.5 och sedan görs den om till
    // ett heltal (int). Om sidan är 3090px lång så är antalet 309 sådana max posframes
    // 309/208 ger hur många sådana frames en bildframe får ta upp, alltså 1.5 frame/bild.
    // med en sorts if-sats avgörs hur många posframes ner man är på sidan. använder det värdet
    // för att ändra hanamura-"[posframe/1.5]"

    if(window.scrollY>(document.body.scrollHeight-vidheight.offsetHeight-totheight.offsetHeight)){
      var posframe =Math.round( ((newy/10)+0.5));
      var cinge =Math.round((posframe/4)+0.5);
      $('.hanamura').css('opacity', 0);

      console.log("pos"+posframe);
      console.log("cinge"+cinge);
      console.log("vidheight"+vidheight.offsetHeight);

      $(`.hanamura-${cinge}`).css('opacity', 1);

      //Math.round((vidheight.offsetHeight/35)+0.5)



    }

    newy = (window.scrollY-document.body.scrollHeight+vidheight.offsetHeight+totheight.offsetHeight);
    console.log("y"+window.scrollY);
    console.log("newy"+newy);
  });
});
