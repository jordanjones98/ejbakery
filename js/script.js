// JQUERY
var about = "about.html"
$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $(".navmobile").load("partials/mobilenav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  $(".navmobile").toggle(function(){
    $("hammenu").fadeIn();
  });

  });
});


// VANILLAJS
function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("ressuccess").innerHTML = userInput;
}
