$(document).ready(function () {

    $('#weatherSearch').on("click", function (event) {
        event.preventDefault();
        var cityElement = $('#cityAir').val();
        var stateElement = $('#stateAir').val();
        var countryElement = $('#countryAir').val();
        console.log(cityElement);
        console.log(stateElement);
        console.log(countryElement);

        var queryURL = "http://api.airvisual.com/v2/city?city="+cityElement+"&state="+stateElement+"&country="+countryElement+"&key=BtNrfeJaZn6KRohbs";
        

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    });
});

$(document).ready(function () {
    var queryURL = "https://api-dev.fareportallabs.com/air/api/search/searchflightavailability";
    var requestObject =
    {
        "ResponseVersion": "VERSION41",
        "FlightSearchRequest": {
            "Adults": "1",
            "Child": "0",
            "ClassOfService": "ECONOMY",
            "InfantInLap": "0",
            "InfantOnSeat": "0",
            "Seniors": "0",
            "TypeOfTrip": "ROUNDTRIP",
            "SegmentDetails": [
                {
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
