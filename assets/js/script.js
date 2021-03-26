// Timeblock editing
// Timeblock edits staying if page refreshed
// Being able to save timeblock edits to page
// Timeblock changing colors for past, present, and future

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

saveBtn.on("click", function() {
    var hour = $(this).attr("hour");

    var activity =$("#appt").val();

    localStorage.setItem(hour, activity);
});


// Variables and DOM Elements
// var timeNow = moment().format("HH");
// var timeNowInt = parseInt(timeNow);
// var saveBtn = $(".saveBtn");

// // More variables and DOM elements
// var userAppt = $('#time-block');
// var past = $('.past');
// var present = $('.present');
// var future = $('future');

function colorBlocks() {
    var timeNow = moment().hours();

    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id").split("-")[1]);
        if (hour < timeNow) {
            $(this).addClass("past");
        }
        else if (hour === timeNow) {
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

colorBlocks();

// LOCAL STORAGE FOR DAILY SCHEDULE ITEMS
function scheduledItems() {
    var appt = localStorage.getItem("appt");
    userAppt.textContent = appt;
    saveBtn();
};