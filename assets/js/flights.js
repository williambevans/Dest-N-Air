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

        var flightData = response.FlightResponse.FpSearch_AirLowFaresRS.SegmentReference.RefDetails[1].PTC_FareBreakdown.Adult.BaseFare;
        return flightData
        

    }).then(function (result) {

        console.log(result);

    });
});