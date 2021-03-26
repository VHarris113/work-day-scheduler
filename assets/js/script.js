// Timeblock editing
// Timeblock edits staying if page refreshed
// Being able to save timeblock edits to page
// Timeblock changing colors for past, present, and future

console.log("Hello World");

// // Variables and DOM Elements
// // var timeNow = moment().format("HH");
// // var timeNowInt = parseInt(timeNow);
// // var saveBtn = $(".saveBtn");

// // More variables and DOM elements
// var userAppt = $('#time-block');
// var past = $('.past');
// var present = $('.present');
// var future = $('future');

// This is the function for the time at the top of the page
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Save Button
var saveBtn = $(".saveBtn");

// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//     var hour = $(this).value("hour");

//     var activity =$(".description").val();

//     localStorage.setItem(hour, activity);
// });

// $(".hour .description").val(localStorage.getItem(".hour"));

// Set time with each row


// Will change the schedule blocks' colors depending on time
function currentHour() {
    var time;
    var hour = $('#9AM').val();
    console.log("this is the hour value" + hour);
    // var hour = the time the block lands on
    $(".time-block").each(function() {
        if (hour < time) {
            $(this).addClass("past");
        }
        else if (hour === time) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
    });
};
currentHour();