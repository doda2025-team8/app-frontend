$(document).ready(function () {
  function getSMS() {
    return $("textarea").val().trim();
  }

  function getGuess() {
    return $("input[name='guess']:checked").val().trim();
  }

  function cleanResult() {
    $("#result").removeClass("correct");
    $("#result").removeClass("incorrect");
    $("#result").removeClass("error");
    $("#result").html();
  }

  $("button").click(function (e) {
    e.stopPropagation();
    e.preventDefault();

    var sms = getSMS();
    var guess = getGuess();

    $.ajax({
      type: "POST",
      url: "/sms",
      data: JSON.stringify({ sms: sms, guess: guess }),
      contentType: "application/json",
      dataType: "json",
      success: handleResult,
      error: handleError,
    });
  });

  $.ajax({
      type: "POST",
      url: "/sms/pageview", 
      success: function() { console.log("Page view tracked"); },
      error: function() { console.log("Failed to track page view"); }
  });

  function getSMS() {
    return $("textarea").val().trim();
  }

  function handleResult(res) {
    var wasRight = res.result == getGuess();

    cleanResult();
    $("#result").addClass(wasRight ? "correct" : "incorrect");
    $("#result").html("The classifier " + (wasRight ? "agrees" : "disagrees"));
    $("#result").show();
  }

  function handleError(e) {
    cleanResult();
    $("#result").addClass("error");
    $("#result").html("An error occured (see server log).");
    $("#result").show();
  }

  $("textarea").on("keypress", function (e) {
    $("#result").hide();
  });

  $("input").click(function (e) {
    $("#result").hide();
  });
});
