// //
// $(document).ready(function() {
//   $("form#beepForm").submit(function(event) {
//     var userNumber = $("input#numberInput").val();
//     event.preventDefault();
//     $("#beepPhrase").append(userNumber + " ");
//   });
// });

$(document).ready(function() {
  $("form#beepForm").submit(function(event) {
    event.preventDefault();
    $("#responseString").show();
    var userNumber = $("input#numberInput").val(); {

      if (userNumber % 3 == 0) {
        $("#beepPhrase").append("I'm sorry, Dave. I'm afraid I can't do that. ");
      } else if (userNumber.includes(1)) {
        $("#beepPhrase").append("Boop!" + " ");
      } else if (userNumber.includes(0)) {
        $("#beepPhrase").append("Beep!" + " ");
      } else if (userNumber >= 2) {
        $("#beepPhrase").append(userNumber + " ");
      }
    }
  });
});

//
// $(document).ready(function() {
//   $("form#beepForm").submit(function(event) {
//     event.preventDefault();
//     function boopify (userNumber) {
//     var userNumber = $("input#numberInput").val();
//     var userNumberArray = userNumber.split(" ");
//
//     for (var i = 0; i <= userNumber.length; i ++) {
//       if (userNumberArray[i] === 0) {
//         $("#beepPhrase").append("Beep!");
//       } else if (userNumberArray[i] != 0) {
//          $("#beepPhrase").append(userNumberArray);
//         }
//       }
//     // } return "#beepPhrase";
//     }
//   })
// });
// $(document).ready(function() {
//   $("form.beepForm").submit(function(event) {
//     event.preventDefault();
//
//     var beepNumbers = [0];
//     var userNumber = $("input#numberInput").val();
//     var userNumberArrays = userNumber.split();
//
//     userNumberArrays.forEach(function(userNumberArray) {
//       if (userNumberArray[i] === beepNumbers[i]) {
//         alert ("I love this");
//       } else if (userNumberArray[i] != beepNumbers[i]) {
//          $("#beepPhrase").append(userNumberArray);
//         }
//       }) return ("BeepPhrase");
//   });
// });
