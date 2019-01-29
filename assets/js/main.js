$(document).ready(function () {
    var queryURL = "http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=BtNrfeJaZn6KRohbs";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
    });
});

$("#weatherSearch").click(function () {
    alert("HEY");
    event.preventDefault();
    location.href = "weather.html";
    var city = $("#cityAir").val().trim();
    var state = $("#stateAir").val().trim();
    var country = $("#countryAir").val().trim();
    var zip = $("#zipAir").val().trim();
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(zip);
});

$("#flightSearch").click(function () {
    alert("HEY");
    event.preventDefault();
    location.href = "flight.html";
    var from = $("#flightFrom").val().trim();
    var to = $("#flightTo").val().trim();
    var when = $("#flightWhen").val().trim();
    var flightClass = $("#flightClass").val().trim();
    console.log(from);
    console.log(to);
    console.log(when);
    console.log(flightClass);
});

$("#tripPlanner").click(function () {
    alert("HEY");
    event.preventDefault();
    location.href = "index.html";
    var tripFrom = $("#tripFrom").val().trim();
    var tripTo = $("#tripTo").val().trim();
    var tripWhen = $("#tripWhen").val().trim();
    var tripClass = $("#tripClass").val().trim();
    console.log(tripFrom);
    console.log(tripTo);
    console.log(tripWhen);
    console.log(tripClass);
});

