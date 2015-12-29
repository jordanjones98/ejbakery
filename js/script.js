$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=s=button]").click(function(){
    $(".success").show();
  });
});
