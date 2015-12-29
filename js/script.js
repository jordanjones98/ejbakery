$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  });
});
$(window).on('scroll', function() {
    var header = $(".navscroll");
    if ($(this).scrollTop() > 50) {
        if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 0.5);
    } else if (header.data('faded')) {
        header.data('faded', 0).stop(true).fadeTo(400, 1);
    }
});
