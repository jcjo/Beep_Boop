//
// //If/Else meets all conditions
//
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

//Working Loop with only Beep and Boop conditions
//
$(document).ready(function() {
  $("form#beepForm").submit(function(event) {
    event.preventDefault();
    $("#responseString").fadeIn();

    var userNumber = $("input#numberInput").val();
    var splitString = userNumber.split("");
    var zero = ["0"];
    var beep = ["Beep"];
    var three = ["3"];
    var resultArray = [];
    var one = ["1"];
    var boop = ["Boop"];
    var sorryDave = ["I'm sorry, Dave. I'm afraid I can't do that."];

    for (var i = 0; i <= splitString.length-1; i++) {
      if (splitString[i] === one[i]) {
        resultArray.push(boop[i]);
      } else if (splitString[i] === zero[i]) {
        resultArray.push(beep[i]);
      }
    }
    $("#beepPhrase").append(resultArray + " ");
  });
});
