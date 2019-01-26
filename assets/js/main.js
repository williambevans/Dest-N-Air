
$(document).ready(function(){
    var queryURL = "http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=BtNrfeJaZn6KRohbs";
      
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);
    });
});
