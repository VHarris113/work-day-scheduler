// Timeblock editing
// Timeblock edits staying if page refreshed
// Being able to save timeblock edits to page
// Timeblock changing colors for past, present, and future

var timeNow = moment().format("HH");
var timeNowInt = parseInt(timeNow);
var saveBtn = $(".saveBtn");

var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

var timeBlock = $('#time-block');
var past = $('.past');
var present = $('.present');
var future = $('future');

$('#timeblock9').attr("data-time", moment("9:00am", "h:mm a").format("HH"));
// $('#timeblock10')
// $('#timeblock11')
// $('#timeblock12')
// $('#timeblock1')
// $('#timeblock2')
// $('#timeblock3')
// $('#timeblock4')
// $('#timeblock5')

for (var i = 1; i <= 12; i++) {
    var elapsedTime = $("#timeblock" + i).attr("data-time");
    var elapsedTimeInt = parseInt(elapsedTime);
    

    if (timeNowInt === elapsedTimeInt) {
        $("#timeblock" + i).addClass("present");
    }
};