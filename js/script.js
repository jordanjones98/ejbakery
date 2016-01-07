// JQUERY
$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  });
});


// VANILLAJS
function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("ressuccess").innerHTML = userInput;
}
