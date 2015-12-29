$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=submit]").click(function(){
    $(".success").show();
  });
});
