var config = {
    apiKey: "AIzaSyAfj2WK0xN8tscrKCME6Qzkgj2E1xRo8ng",
    authDomain: "destin-air.firebaseapp.com",
    databaseURL: "https://destin-air.firebaseio.com",
    projectId: "destin-air",
    storageBucket: "destin-air.appspot.com",
    messagingSenderId: "753142024366"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var cityElement = "";
var stateElement = "";
var countryElement = "";

// On Click of Button
$("#weatherSearch").on("click", function (event) {
    var cityElement = $('#cityAir').val();
    var stateElement = $('#stateAir').val();
    var countryElement = $('#countryAir').val();


    //  Store Data to Firebase in a JSON property called clickCount
    // Note how we are using the Firebase .set() method
    database.ref().set({
        city: cityElement,
        state: stateElement,
        country: countryElement
    });
});

$("#flightSearch").on("click", function (event) {
    var fromFlight = $('#flightFrom').val();
    var toFlight = $('#flightTo').val();
    var whenFlight = $('#flightWhen').val();
    var classFlight =$('#flightClass').val();


    //  Store Data to Firebase in a JSON property called clickCount
    // Note how we are using the Firebase .set() method
    database.ref().set({
        from: fromFlight,
        to: toFlight,
        when: whenFlight,
        class: classFlight
    });
});

