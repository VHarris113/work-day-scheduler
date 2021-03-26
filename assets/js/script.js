// This is the function for the time at the top of the page
var time = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);
var update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
setInterval(update, 1000);

function currentHour() {
  var timeNow = moment().format();

  $(section).each(function () {
    var schTime = parseInt($(this).attr("id").split("hour")[1]);

    if (schTime > timeNow) {
         $(this).addClass(".past");
         $(this).removeClass(".present");
         $(this).removeClass(".future");
    }       else if (schTime === timeNow) {
                $(this).addClass(".present");
                $(this).removeClass(".past");
                $(this).removeClass(".future");
    }           else { (schTime < timeNow);
                        $(this).addClass(".future");
                        $(this).removeClass(".past");
                        $(this).removeClass(".present");
    }
  });
}
