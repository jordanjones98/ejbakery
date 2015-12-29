$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  });
});
$(window).on('scroll', function() {
    var header = $(".navscroll");
});
