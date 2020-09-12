var timeM = moment();
$("#currentDay").text(timeM.format("MMM Do YYYY"));

// $(".saveBtn").on("click", function () {
//     var arrayEL = $(this).siblings(".description").val();
//     var timeEL = $(this).parent().attr("id");
//     localStorage.setItem(timeEL, arrayEL);
// });

// var history = localStorage.getItem("9am-row");
// $("#9am-row .description").text(history);



var currentTime = moment().hour();

var nineAm = $("#9am-row");
nineAm = 9;

var tenAm = $("#10am-row");
tenAm = 10;

var elevenAm = $("#11am-row");
elevenAm = 11;

var twelvePm = $("#12pm-row");
twelvePm = 12;

var onePm = $("#1pm-row");
onePm = 1;

var twoPm = $("#2pm-row");
twoPm = 2;

var threePm = $("#3pm-row");
threePm = 3;

var fourPm = $("#4pm-row");
fourPm = 4;

var fivePm = $("#5pm-row");
fivePm = 5;

if (currentTime > nineAm) {
    $("#9am-text").addClass("past");
} else if (currentTime == nineAm) {
    $("#9am-text").addClass("present");
} else if (currentTime < nineAm) {
    $("#9am-text").addClass("future");
}

if (currentTime > tenAm) {
    $("#10am-text").addClass("past");
} else if (currentTime == tenAm) {
    $("#10am-text").addClass("present");
} else if (currentTime < tenAm) {
    $("#10am-text").addClass("future");
}

if (currentTime > elevenAm) {
    $("#11am-text").addClass("past");
} else if (currentTime == elevenAm) {
    $("#11am-text").addClass("present");
} else if (currentTime < elevenAm) {
    $("#11am-text").addClass("future");
}

if (currentTime > twelvePm) {
    $("#12pm-text").addClass("past");
} else if (currentTime == twelvePm) {
    $("#12pm-text").addClass("present");
} else if (currentTime < twelvePm) {
    $("#12pm-text").addClass("future");
}

if (currentTime > onePm) {
    $("#1pm-text").addClass("past");
} else if (currentTime == onePm) {
    $("#1pm-text").addClass("present");
} else if (currentTime < onePm) {
    $("#1pm-text").addClass("future");
}

if (currentTime > twoPm) {
    $("#2pm-text").addClass("past");
} else if (currentTime == twoPm) {
    $("#2pm-text").addClass("present");
} else if (currentTime < twoPm) {
    $("#2pm-text").addClass("future");
}

if (currentTime > threePm) {
    $("#3pm-text").addClass("past");
} else if (currentTime == threePm) {
    $("#3pm-text").addClass("present");
} else if (currentTime < threePm) {
    $("#3pm-text").addClass("future");
}

if (currentTime > fourPm) {
    $("#4pm-text").addClass("past");
} else if (currentTime == fourPm) {
    $("#4pm-text").addClass("present");
} else if (currentTime < fourPm) {
    $("#4pm-text").addClass("future");
}

if (currentTime > fivePm) {
    $("#5pm-text").addClass("past");
} else if (currentTime == fivePm) {
    $("#5pm-text").addClass("present");
} else if (currentTime < fivePm) {
    $("#5pm-text").addClass("future");
}