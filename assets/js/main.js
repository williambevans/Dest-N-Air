
$(document).ready(function(){
    var queryURL = "https://api.airvisual.com/v2/city?city=LosAngeles&state=California&country=USA&key=BtNrfeJaZn6KRohbs";
      
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    });
});
