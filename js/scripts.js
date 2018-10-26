//
// $(document).ready(function() {
//   $("form#beepForm").submit(function(event) {
//     var userNumber = $("input#numberInput").val();
//     event.preventDefault();
//     $("#beepPhrase").append(userNumber + " ");
//   });
// });

// $(document).ready(function() {
//   $("form#beepForm").submit(function(event) {
//     event.preventDefault();
//     var userNumber = $("input#numberInput").val();
//
//     if (userNumber === 1) {
//       $("#beepPhrase").append(userNumber + "!");
//     } else if (userNumber != 1) {
//         $("#beepPhrase").append(userNumber + " ");
//       }
//   });
// });


$(document).ready(function() {
  $("form#beepForm").submit(function(event) {
    event.preventDefault();
    function boopify (userNumber) {
    var userNumber = $("input#numberInput").val();
    var userNumberArray = userNumber.split(" ");

    for (var i = 0; i <= userNumber.length; i ++) {
      if (userNumberArray[i] === 0) {
        $("#beepPhrase").append("Beep!");
      } else if (userNumberArray[i] != 0) {
         $("#beepPhrase").append(userNumberArray);
        }
      }
    // } return "#beepPhrase";
    }
  })
});


$(document).read(function())
