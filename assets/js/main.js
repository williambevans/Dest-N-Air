
$(document).ready(function(){

    $('.btn-primary').on("click", function(event){
        event.preventDefault();
        var cityElement = $('#city').val();
        var stateElement = $('#state').val();
        var countryElement = $('#country').val();

        var queryURL ='http://api.airvisual.com/v2/city?city='+cityElement+'&state='+stateElement+'&country='+countryElement+'&key=BtNrfeJaZn6KRohbs';
      
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
    });
    });
});
