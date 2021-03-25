// Timeblock editing
// Timeblock edits staying if page refreshed
// Being able to save timeblock edits to page
// Timeblock changing colors for past, present, and future
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