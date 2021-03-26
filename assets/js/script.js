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
saveBtn.on("click", function() {
    var hour = $(this).attr("hour");

    var activity =$("#timeblock" + i).val();

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
        var hour = parseInt($(this).attr("id").split("-")[i]);
        if (hour < timeNow) {
            $(this).addClass("past");
        }
    })
}

// LOCAL STORAGE FOR DAILY SCHEDULE ITEMS
function scheduledItems() {
    var appt = localStorage.getItem("appt");
    userAppt.textContent = appt;
    saveBtn();
};




// $('#timeblock9').attr("time", moment("9:00:00am", "h:mm:ss a").format("HH"));
// $('#timeblock10').attr("time", moment("10:00:00am", "h:mm:ss a").format("HH"));
// $('#timeblock11').attr("time", moment("11:00:00am", "h:mm:ss a").format("HH"));
// $('#timeblock12').attr("time", moment("12:00:00pm", "h:mm:ss a").format("HH"));
// $('#timeblock1').attr("time", moment("1:00:00pm", "h:mm:ss a").format("HH"));
// $('#timeblock2').attr("time", moment("2:00:00pm", "h:mm:ss a").format("HH"));
// $('#timeblock3').attr("time", moment("3:00:00pm", "h:mm:ss a").format("HH"));
// $('#timeblock4').attr("time", moment("4:00:00pm", "h:mm:ss a").format("HH"));
// $('#timeblock5').attr("time", moment("5:00:00pm", "h:mm:ss a").format("HH"));


// function applyColor(){
// for (var i = 1; i <= 12; i++) {
//     var elapsedTime = $("#timeblock" + i).attr("time");
//     var elapsedTimeInt = parseInt(elapsedTime);
    

//     if (timeNowInt === elapsedTimeInt) {
//         $("#timeblock" + i).addClass("past");
//     }

//     if (timeNowInt === elapsedTimeInt) {
//         $("#timeblock" + i).addClass("present");
//     }

//     if (timeNowInt === elapsedTimeInt) {
//         $("#timeblock" + i).addClass("future");
//         }
//     }
// };


// function setActivities() {
//     for (var i = 1; i <= 12; i++) {
//         $('#timeblock' + i).val(localStorage.getItem(i));
//     }
// };