// JQUERY
$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $(".navmobile").load("partials/mobilenav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  });
  $(".hamicon").click(function(){
    $(".hamfade").stop()
    $(".hamfade").fadeToggle();
    $(".hamicon").toggleClass('fa-bars');
    $(".hamicon").toggleClass('fa-times');
    $("body").css("overflow", "hidden");
  });
});


// VANILLAJS
function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("ressuccess").innerHTML = userInput;
}
