$(document).ready(function(){

  var vidheight = document.getElementById("videoSelection");
  var totheight = document.getElementById("background");
  var vidSectionHeight = document.getElementById("tank");
  var footer1 = document.querySelector("footer");
  var newy = (window.scrollY-document.body.scrollHeight+vidheight.offsetHeight+totheight.offsetHeight);
  $(".container").show();
  $(".container").css("display", "flex");
  $(".container").css("justify-content", "space-evenly");
  $(".styled-table").hide();

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

    // om y är t.ex. 2425 så blir det då istället 242.5 +0.5 och sedan görs den om till
    // ett heltal (int). Om sidan är 3090px lång så är antalet 309 sådana max posframes
    // 309/208 ger hur många sådana frames en bildframe får ta upp, alltså 4 frame/bild.
    // med en sorts if-sats avgörs hur många posframes ner man är på sidan. använder det värdet
    // för att ändra hanamura-"[posframe/4]"

    if(window.scrollY>(document.body.scrollHeight-vidheight.offsetHeight-totheight.offsetHeight)){
      var posframe =Math.round( ((newy/10)+0.5));
      var cinge =Math.round((posframe/4)+0.5);
      $('.hanamura').css('opacity', 0);

      $(`.hanamura-${cinge}`).css('opacity', 1);

    }

    newy = (window.scrollY-document.body.scrollHeight+vidheight.offsetHeight+totheight.offsetHeight);
  });
});
