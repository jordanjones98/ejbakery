$(document).ready(function(){
      $(".foot").load("partials/footer.html");
      $(".navpar").load("partials/nav.html");
});
$(document).ready(function(){
  $("form[name=res]").submit(function(event) {

     /* stop form from submitting normally */
     event.preventDefault();

     /* get some values from elements on the page: */
     var $form = $(this),
         term = $form.find('input[name="name"]').val(),
         url = $form.attr('action');

     /* Send the data using post */
     var posting = $.post("reservation/reservations.asp", {
         s: term
     });
 });
})
