// DisplayDate in header
var timeM = moment();
$("#currentDay").text(timeM.format("MMM Do YYYY"));

// setting item for localStorage
$(".btn").on("click", function () {
    var aEL = $(this).attr("data-save-num");
    var timeEL = $(this).siblings("textarea.description").val();
    localStorage.setItem(aEL, timeEL);
});

// local variables

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

// Setting conditions for highlighting current time block and localStorage

if (currentTime > nineAm) {
    $("#9am-text").addClass("past");
} else if (currentTime == nineAm) {
    $("#9am-text").addClass("present");
} else if (currentTime < nineAm) {
    $("#9am-text").addClass("future");
}

if (localStorage.getItem("9") !== null) {
    $("#9am-text").text(localStorage.getItem("9"));
}

if (currentTime > tenAm) {
    $("#10am-text").addClass("past");
} else if (currentTime == tenAm) {
    $("#10am-text").addClass("present");
} else if (currentTime < tenAm) {
    $("#10am-text").addClass("future");
}

if (localStorage.getItem("10") !== null) {
    $("#10am-text").text(localStorage.getItem("10"));
}

if (currentTime > elevenAm) {
    $("#11am-text").addClass("past");
} else if (currentTime == elevenAm) {
    $("#11am-text").addClass("present");
} else if (currentTime < elevenAm) {
    $("#11am-text").addClass("future");
}

if (localStorage.getItem("11") !== null) {
    $("#11am-text").text(localStorage.getItem("11"));
}

if (currentTime > twelvePm) {
    $("#12pm-text").addClass("past");
} else if (currentTime == twelvePm) {
    $("#12pm-text").addClass("present");
} else if (currentTime < twelvePm) {
    $("#12pm-text").addClass("future");
}

if (localStorage.getItem("12") !== null) {
    $("#12pm-text").text(localStorage.getItem("12"));
}

if (currentTime > onePm) {
    $("#1pm-text").addClass("past");
} else if (currentTime == onePm) {
    $("#1pm-text").addClass("present");
} else if (currentTime < onePm) {
    $("#1pm-text").addClass("future");
}

if (localStorage.getItem("1") !== null) {
    $("#1pm-text").text(localStorage.getItem("1"));
}

if (currentTime > twoPm) {
    $("#2pm-text").addClass("past");
} else if (currentTime == twoPm) {
    $("#2pm-text").addClass("present");
} else if (currentTime < twoPm) {
    $("#2pm-text").addClass("future");
}

if (localStorage.getItem("2") !== null) {
    $("#2pm-text").text(localStorage.getItem("2"));
}

if (currentTime > threePm) {
    $("#3pm-text").addClass("past");
} else if (currentTime == threePm) {
    $("#3pm-text").addClass("present");
} else if (currentTime < threePm) {
    $("#3pm-text").addClass("future");
}

if (localStorage.getItem("3") !== null) {
    $("#3pm-text").text(localStorage.getItem("3"));
}

if (currentTime > fourPm) {
    $("#4pm-text").addClass("past");
} else if (currentTime == fourPm) {
    $("#4pm-text").addClass("present");
} else if (currentTime < fourPm) {
    $("#4pm-text").addClass("future");
}

if (localStorage.getItem("4") !== null) {
    $("#4pm-text").text(localStorage.getItem("4"));
}

if (currentTime > fivePm) {
    $("#5pm-text").addClass("past");
} else if (currentTime == fivePm) {
    $("#5pm-text").addClass("present");
} else if (currentTime < fivePm) {
    $("#5pm-text").addClass("future");
}

if (localStorage.getItem("5") !== null) {
    $("#5pm-text").text(localStorage.getItem("5"));
}

