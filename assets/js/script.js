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

        $("#9AM .description").val(localStorage.getItem("9AM"));
        $("#10AM .description").val(localStorage.getItem("10AM"));
        $("#11AM .description").val(localStorage.getItem("11AM"));
        $("#12PM .description").val(localStorage.getItem("12PM"));
        $("#1PM .description").val(localStorage.getItem("1PM"));
        $("#2PM .description").val(localStorage.getItem("2PM"));
        $("#3PM .description").val(localStorage.getItem("3PM"));
        $("#4PM .description").val(localStorage.getItem("4PM"));
        $("#5PM .description").val(localStorage.getItem("5PM"));
    })
});

window.onload = function() {
  colorCode();
}
var now = new Date().getHours();

function colorCode() {
if (now > 9) {
  $("#9AM").addClass("past");
} else if (now >= 9 && now < 10){
  $("#9AM").addClass("present");
} else if (now < 9) {
  $("#9AM").addClass("future");
}

if (now > 10) {
  $("#10AM").addClass("past");
} else if (now >= 10 && now < 11){
  $("#10AM").addClass("present");
} else if (now < 10) {
  $("#10AM").addClass("future");
}

if (now > 11) {
  $("#11AM").addClass("past");
} else if (now >= 11 && now < 12){
  $("#11AM").addClass("present");
} else if (now < 11) {
  $("#11AM").addClass("future");
}

if (now > 12) {
  $("#12PM").addClass("past");
} else if (now >= 12 && now < 13){
  $("#12PM").addClass("present");
} else if (now < 12) {
  $("#12PM").addClass("future");
}

if (now > 13) {
  $("#1PM").addClass("past");
} else if (now >= 13 && now < 14){
  $("#1PM").addClass("present");
} else if (now < 13) {
  $("#1PM").addClass("future");
}

if (now > 14) {
  $("#2PM").addClass("past");
} else if (now >= 14 && now < 15){
  $("#2PM").addClass("present");
} else if (now < 14) {
  $("#2PM").addClass("future");
}

if (now > 15) {
  $("#3PM").addClass("past");
} else if (now >= 15 && now < 16){
  $("#3PM").addClass("present");
} else if (now < 15) {
  $("#3PM").addClass("future");
}
if (now > 16) {
  $("#4PM").addClass("past");
} else if (now >= 16 && now < 17){
  $("#4PM").addClass("present");
} else if (now < 16) {
  $("#4PM").addClass("future");
}

if (now > 17) {
  $("#5PM").addClass("past");
} else if (now >= 17 && now < 18){
  $("#5PM").addClass("present");
} else if (now < 17) {
  $("#5PM").addClass("future");
}
};