function 



$(document).ready(function() {
  $("form#beepForm").submit(function(event) {
    event.preventDefault();
    var userNumber = $("numberInput").val();

  });
});
