$(document).ready(function () {
    $('#flightSearch').on("click", function (event) {
        event.preventDefault();
        var adults = $('#flightAdults').val();
        var economy = $('#flightClass').val();
        var type = $('#flightType').val();
        var date = $('#flightDate').val();
        var time = $('#flightTime').val();
        var origin = $('#flightOrigin').val();
        var destination = $('#flightDestination').val();


        console.log(adults);
        console.log(economy);
        console.log(type);
        console.log(date);
        console.log(time);
        console.log(origin);
        console.log(destination);



        var queryURL = "https://api-dev.fareportallabs.com/air/api/search/searchflightavailability";
        var requestObject = {
            "ResponseVersion": "VERSION43",
            "FlightSearchRequest": {
                "Adults": adults,
                "Child": "0",
                "ClassOfService": economy,
                "InfantInLap": "0",
                "InfantOnSeat": "0",
                "Seniors": "0",
                "TypeOfTrip": type,
                "SegmentDetails": [{
                    "DepartureDate": date,
                    "DepartureTime": time,
                    "Origin": origin,
                    "Destination": destination
                }]
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


            var Airline = response.FlightResponse.FpSearch_AirLowFaresRS.OriginDestinationOptions.OutBoundOptions.OutBoundOption[0].FlightSegment[0].MarketingAirline.Code;
            var Time = response.FlightResponse.FpSearch_AirLowFaresRS.OriginDestinationOptions.OutBoundOptions.OutBoundOption[0].FlightSegment[0].DepartureDateTime;
            var Duration = response.FlightResponse.FpSearch_AirLowFaresRS.OriginDestinationOptions.OutBoundOptions.OutBoundOption[0].FlightSegment[0].FlightDuration;
           console.log(Time);
           console.log(Duration);
            return Airline



        }).then(function (result) {

            console.log(result);
            var flightRow = $("<tr>");
            flightRow.addClass("flightRow");
            $(".flightBody").prepend(flightRow);
            var flightAirline = $("<td>");
            var flightTime = $("<td>");
            var flightDuration = $("<td>");
            var flightCost = $("<td>");
            flightAirline.addClass("flightAirline");
            flightTime.addClass("flightTime");
            flightDuration.addClass("flightDuration");
            flightCost.addClass("flightCost");
            $(".flightRow").append(flightAirline);
            $(".flightRow").append(flightTime);
            $(".flightRow").append(flightDuration);
            $(".flightRow").append(flightCost);
            $(".flightAirline").text(result);

        });



    });
});