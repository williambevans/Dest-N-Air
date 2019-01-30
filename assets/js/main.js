$(document).ready(function () {

    $('#weatherSearch').on("click", function (event) {
        event.preventDefault();
        var cityElement = $('#cityAir').val();
        var stateElement = $('#stateAir').val();
        var countryElement = $('#countryAir').val();
        console.log(cityElement);
        console.log(stateElement);
        console.log(countryElement);

        var queryURL = "http://api.airvisual.com/v2/city?city=" + cityElement + "&state=" + stateElement + "&country=" + countryElement + "&key=BtNrfeJaZn6KRohbs";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;

            var city = results.city;
            var state = results.state;
            var country = results.country;
            var coordinatesLong = results.location.coordinates[0];
            var coordinatesLat = results.location.coordinates[1];
            var humidity = results.current.weather.hu;
            var pressure = results.current.weather.pr;
            var temperature = (results.current.weather.tp * 9/5) + 32;
            var windDirection = results.current.weather.wd;
            var windSpeed = results.current.weather.ws;



            console.log("City: " + city);
            console.log("State: " + state);
            console.log("Country: " + country);
            console.log("Longitude: " + coordinatesLong);
            console.log("Latitude: " + coordinatesLat);
            console.log("Humidity: " + humidity);
            console.log("Temperature: " + temperature);
            console.log("Wind Direction: " + windDirection);
            console.log("Wind Speed: " + windSpeed);

            console.log(response);
            console.log(results);
            var weatherDiv = $("<div class='column'>");
            var p = $("<p>").text("Rating : " + results.city);

        });
    });
});


$(document).ready(function () {
    var queryURL = "https://api-dev.fareportallabs.com/air/api/search/searchflightavailability";
    var requestObject = {
        "ResponseVersion": "VERSION41",
        "FlightSearchRequest": {
            "Adults": "1",
            "Child": "0",
            "ClassOfService": "ECONOMY",
            "InfantInLap": "0",
            "InfantOnSeat": "0",
            "Seniors": "0",
            "TypeOfTrip": "ROUNDTRIP",
            "SegmentDetails": [{
                    "DepartureDate": "2019-07-29",
                    "DepartureTime": "1100",
                    "Destination": "NYC",
                    "Origin": "LON"
                },
                {
                    "DepartureDate": "2019-08-08",
                    "DepartureTime": "1100",
                    "Destination": "LON",
                    "Origin": "NYC"
                }
            ]
        }
    }
    console.log(requestObject);
    $.ajax({
        url: queryURL,
        method: "POST",
        headers: {

            'Authorization': "Basic d2hiZXZhbnNqckBnbWFpbC5jb206NEJFMEI2QUY=",
            'Content-Type': "application/json"
        },
        data: JSON.stringify(requestObject)
    }).then(function (response) {

        console.log(response);
    });
});