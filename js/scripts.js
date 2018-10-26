



$(document).ready(function() {
  $("form#beepForm").submit(function(event) {
    var userNumber = $("input#numberInput").val();
    event.preventDefault();
    $("#beepPhrase").text(userNumber);
    //
    // if (userNumber === "1") {
    //   $("#responseString").push(userNumber);
    // } else {
    //   alert ("Add number");
    // }



    // function showNumber(userNumber) {
    //   return userNumber;
    // }

  });
});
