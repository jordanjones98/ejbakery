// JQUERY
$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $(".navmobile").load("partials/mobilenav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  });
  $(".hamicon").click(function(){
    $(".hamfade").fadeIn();
    $("body").css("overflow", "hidden");
    $(".hamicon").css("display", "none");
    $("hamexit").fadeIn();
  });
  $(".hamexit").click(function(){
    $(".hamfade").fadeOut();
    $("body").css("overflow", "visible");
    $(".hamexit").fadeOut();
    $(".hamicon").css("display", "block");
  });
});


// VANILLAJS
function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("ressuccess").innerHTML = userInput;
}
