$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];

    var inputs = []
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      inputs.push(userInput.toUpperCase());

      // var ordered = []
      // inputs.map(function(input) {
      //   return input.toUpperCase();
      // });
    });

debugger
    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   userInput.push(blank);
    // });

      // var orderedBlanks = blanks.map(function(blank) {
      //   return blank.toUpperCase();

        $("." + blank).text(userInput);
      // });
debugger
    $("#list").show();

  event.preventDefault();
  });
});
