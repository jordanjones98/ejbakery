$(document).ready(function(){
  $(".foot").load("partials/footer.html");
  $(".navpar").load("partials/nav.html");
  $("input[type=button]").click(function(){
    $(".ressuccess").fadeIn();
  });
  // call waypoint plugin
  $("navscroll").waypoint(function(event, direction) {
      // do your fade in here
      $(this).fadeIn();
  },
  offset: 10

  });
});
