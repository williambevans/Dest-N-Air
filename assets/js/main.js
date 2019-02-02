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
            var temperature = (results.current.weather.tp * 9 / 5) + 32;
            var windDirection = results.current.weather.wd;
            var windSpeed = results.current.weather.ws;

        });
        ajaxRequest(queryURL, cityError);

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
                    var mainus = results.current.pollution.mainus;


                    renderAirQuality(city, state, usaqi, mainus);


                    $("#cityWeather").text(city);
                    console.log("State: " + state);
                    console.log("Country: " + country);
                    console.log("Longitude: " + coordinatesLong);
                    console.log("Latitude: " + coordinatesLat);
                    $("#humidity").text("Humidity: " + humidity);
                    $("#temp").text("Temperature: " + temperature);
                    $("#windDir").text("Wind Direction: " + windDirection);
                    $("#windSpeed").text("Wind Speed: " + windSpeed);
                    console.log("usaqi " + usaqi);
                },
                error: function (errormessage) {
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
            } else if (errormessage.responseJSON.data.message == "arguments_missing") {
                var countryElement = $('#countryAir').val();
                queryURL = "http://api.airvisual.com/v2/states?country=" + countryElement + "&key=BtNrfeJaZn6KRohbs";
                ajaxRequest(queryURL);
            }
        }


        function renderAirQuality(city, state, usaqi, mainus) {
            $('.air-card-header').html(city + " " + state);
            $('.air-card-usaqi').html("US AQI");
            $('.air-card-text').html(+usaqi);
            $('.air-card-mainus').html(mainus);

        }

    });

     //adds drag class and removes drag class
     $(function(){
        $('.card').hover(function(){
            $(this).addClass('dragDiv');
            $('.dragDiv').mousedown(handle_mousedown);
        },
        function() {
            $(this).removeClass('dragDiv');
        }
        
        );
    });
    //drag function
    function handle_mousedown(e){
        window.my_dragging = {};
        my_dragging.pageX0 = e.pageX;
        my_dragging.pageY0 = e.pageY;
        my_dragging.elem = this;
        my_dragging.offset0 = $(this).offset();
        function handle_dragging(e){
            var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
            var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
            $(my_dragging.elem)
            .offset({top: top, left: left});
        }
        function handle_mouseup(e){
            $('body')
            .off('mousemove', handle_dragging)
            .off('mouseup', handle_mouseup);
        }
        $('body')
        .on('mouseup', handle_mouseup)
        .on('mousemove', handle_dragging);
    }


});