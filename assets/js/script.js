// This is the function for the time at the top of the page
var time = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);
var update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
setInterval(update, 1000);

$(document).ready(function() {
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(text, time);
    })
});

$(function () {
  var timeNow = new Date();
  var schTime = timeNow.getHours();
    if (schTime === timeNow) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (schTime > timeNow) {
         $(this).addClass("past");
         $(this).removeClass("present");
         $(this).removeClass("future");
          }   else { (schTime < timeNow);
                  $(this).addClass("future");
                  $(this).removeClass("past");
                  $(this).removeClass("present");
    };

      $("#9AM .description").val(localStorage.getItem("9AM"));
      $("#10AM .description").val(localStorage.getItem("10AM"));
      $("#11AM .description").val(localStorage.getItem("11AM"));
      $("#12PM .description").val(localStorage.getItem("12PM"));
      $("#1PM .description").val(localStorage.getItem("1PM"));
      $("#2PM .description").val(localStorage.getItem("2PM"));
      $("#3PM .description").val(localStorage.getItem("3PM"));
      $("#4PM .description").val(localStorage.getItem("4PM"));
      $("#5PM .description").val(localStorage.getItem("5PM"));

  });