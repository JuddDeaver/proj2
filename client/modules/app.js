var commutes_app = angular.module('commutes_app', ['ngRoute']);

commutes_app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/createCommute.html'
    })
    .when('/show',{
        templateUrl: 'partials/showCommute.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

function convertTime(hours,minutes,seconds){
    return hours * 3600 + minutes * 60 + seconds;
};

// TODO:
// allow for non M-F schedules
// resolve address using google and allow for different countries
function getAverageCommute(commute){
    var my = {};
    my.HomeAddress = commute.homeAddress.replace(/\s/g, "+") + ',+USA';
    my.workAddress = commute.workAddress.replace(/\s/g, "+") + ',+USA';
    my.gotoWorkTime = commute.gotoWorkTime;
    my.leaveWorkTime = commute.leaveWorkTime;
    debugger
};

function getAverageCommuteToWork(my){
    var myURL = '';


// <script src="https://maps.googleapis.com/maps/api/js?signed_in=true&callback=initMap" async defer></script>
//   var geocoder = new google.maps.Geocoder;
//geocoder.geocode({'address': originList[i]},showGeocodedAddressOnMap(false));

    myURL = "https://www.google.com/maps/dir/" + my.HomeAddress + "/" + myWorkAddress + "/@47.7027834,-122.2967156,12z/data=!3m1!4b1!4m17!4m16!1m5!1m1!1s0x54906c7ce3a7945d:0x1142e64db9e2ceba!2m2!1d-122.1965031!2d47.609809!1m5!1m1!1s0x549011d37b1d6557:0x1652805a156c77c5!2m2!1d-122.2662939!2d47.7642221!2m3!6e1!7e2!8j1439888460";
};