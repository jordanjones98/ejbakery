$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=button]").click(function(){
    if( !$(this).val() ) {
          $(".success").fadeIn("slow");
    }
    else if ($(this).val()) {
    $(".error").fadein("slow");
    }
  });
});
