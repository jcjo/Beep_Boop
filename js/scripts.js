//
// //UI Logic
// $(document).ready(function() {
//   $("form#beepForm").submit(function(event) {
//     event.preventDefault();
//     $("#responseString").fadeIn();
//     var userNumber = $("input#numberInput").val(); {
//
//       if (userNumber % 3 == 0) {
//         $("#beepPhrase").append("I'm sorry, Dave. I'm afraid I can't do that. ");
//       } else if (userNumber.includes(1)) {
//         $("#beepPhrase").append("Boop!" + " ");
//       } else if (userNumber.includes(0)) {
//         $("#beepPhrase").append("Beep!" + " ");
//       } else if (userNumber >= 2) {
//         $("#beepPhrase").append(userNumber + " ");
//       }
//     }
//   });
// });

$(document).ready(function() {
  $("form#beepForm").submit(function(event) {
    event.preventDefault();
    $("responseString").fadeIn();
    var userNumber = $("input#numberInput").val();
    var splitString = userNumber.split("");
    var zero = ["0"];

    for (var i = 0; i <= splitString.length-1; i ++) {
      if (splitString[i] === zero[i]) {
       alert ("you did it!");
     } else if (splitString[i] != zero[i]) {
       alert ("You still did it!");
     }
    }
  });
});
