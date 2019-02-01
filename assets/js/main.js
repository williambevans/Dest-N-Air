$(document).ready(function () {

    $('#weatherSearch').on("click", function (event) {
        event.preventDefault();
        var cityElement = $('#cityAir').val();
        var stateElement = $('#stateAir').val();
        var countryElement = $('#countryAir').val();

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
            var temperature = (results.current.weather.tp * 9 / 5) + 32;
            var windDirection = results.current.weather.wd;
            var windSpeed = results.current.weather.ws;
=======
        ajaxRequest(queryURL, cityError);
    });

    // ajax request takes differnt urls
    function ajaxRequest(url, cityError) {
        $.ajax({
            url: url,
            method: "GET",
            success: function (response) {
                console.log(response);

                var results = response.data;

                var city = results.city;
                var state = results.state;
                var country = results.country;
                var coordinatesLong = results.location.coordinates[0];
                var coordinatesLat = results.location.coordinates[1];
                var humidity = results.current.weather.hu;
                var pressure = results.current.weather.pr;
                var temperature = (results.current.weather.tp * 9 / 5) + 32;
                var windDirection = results.current.weather.wd;
                var windSpeed = results.current.weather.ws;
                var usaqi = results.current.pollution.aqius;

              
                renderAirQuality(city, state);
    

                console.log("City: " + city);
                console.log("State: " + state);
                console.log("Country: " + country);
                console.log("Longitude: " + coordinatesLong);
                console.log("Latitude: " + coordinatesLat);
                console.log("Humidity: " + humidity);
                console.log("Temperature: " + temperature);
                console.log("Wind Direction: " + windDirection);
                console.log("Wind Speed: " + windSpeed);
                console.log("usaqi " +usaqi);
            }, error: function (errormessage) {
                console.log(errormessage);
                cityError(errormessage);
            }
        });
    }
    //error handling for country, state, and city
    function cityError(errormessage) {
        if (errormessage.responseJSON.data.message == "city_not_found") {
            var stateElement = $('#stateAir').val();
            var countryElement = $('#countryAir').val();

            queryURL = "http://api.airvisual.com/v2/cities?state=" + stateElement + "&country=" + countryElement + "&key=BtNrfeJaZn6KRohbs";
            ajaxRequest(queryURL);
        }
        else if (errormessage.responseJSON.data.message == "arguments_missing") {
            var countryElement = $('#countryAir').val();
            queryURL = "http://api.airvisual.com/v2/states?country=" + countryElement + "&key=BtNrfeJaZn6KRohbs";
            ajaxRequest(queryURL);
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

    $("#tripPlanner").click(function () {
        $("#flights").show("slow");
    });
});
    // function renderAirQuality(city, state, usaqi) {
    //     $('.city-air-name').html(city + " " +state);
    //     // $('#usaqi').html("US AQI "+usaqi);
    // }
 
    
});

