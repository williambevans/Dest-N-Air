$(document).ready(function () {
    $('#flightSearch').on("click", function (event) {
        event.preventDefault();
        var from = $('#flightFrom').val();
        var to = $('#flightTo').val();
        var when = $('#flightWhen').val();
        var type = $('#flightClass').val();

        console.log(from);
        console.log(to);
        console.log(when);
        console.log(type);



        var queryURL = "https://api-dev.fareportallabs.com/air/api/search/searchflightavailability";
        var requestObject = {
            "ResponseVersion": "VERSION43",
            "FlightSearchRequest": {
                "Adults": "1",
                "Child": "0",
                "ClassOfService": "ECONOMY",
                "InfantInLap": "0",
                "InfantOnSeat": "0",
                "Seniors": "0",
                "TypeOfTrip": "ONEWAYTRIP",
                "SegmentDetails": [{
                    "DepartureDate": "08-28-2019",
                    "DepartureTime": "1100",
                    "Origin": "ATH",
                    "Destination": "LHE"
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


            var flightData = response.FlightResponse.FpSearch_AirLowFaresRS.OriginDestinationOptions.OutBoundOptions.OutBoundOption[0].FlightSegment;
            return flightData


        }).then(function (result) {

            console.log(result);

        });
    });


});