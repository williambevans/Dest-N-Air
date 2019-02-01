$(document).ready(function () {

    $('#weatherSearch').on("click", function (event) {
        event.preventDefault();
        var cityElement = $('#cityAir').val();
        var stateElement = $('#stateAir').val();
        var countryElement = $('#countryAir').val();
        console.log(cityElement);
        console.log(stateElement);
        console.log(countryElement);

        // var queryURL = "http://api.airvisual.com/v2/city?city=" + cityElement + "&state=" + stateElement + "&country=" + countryElement + "&key=BtNrfeJaZn6KRohbs";


        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
          
            // var weatherDiv = $("<div class='column'>");
            // var p = $("<p>").text("Rating : " + results.city);

//         });
//     });
// });