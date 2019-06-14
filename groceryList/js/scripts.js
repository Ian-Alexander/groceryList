$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      var order = userInput.toUpperCase();

      $("." + blank).text(order);

    });

    $("#list").show();

  event.preventDefault();
  });
});
