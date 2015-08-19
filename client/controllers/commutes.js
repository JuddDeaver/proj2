commutes_app.controller('commutesController', function($scope, commuteFactory, $location) {
  var that = this;
  that.title = "Commute Score";

  that.createCommute = function(data) {

    var commute = {};
      // commute.homeAddress = data.homeAddress
      // commute.workAddress = data.workAddress
      // commute.gotoWorkTime = data.gotoWorkTime
      // commute.leaveWorkTime = data.leaveWorkTime
      // commute.desiredCommute = data.desiredCommute

// TODO: Validate/resolve address using Google
      commute.homeAddress = "18559 58th Avenue Northeast, Kenmore, WA 98028-8721";
      commute.workAddress = "10777 Main Street, Bellevue, WA 98004";
      commute.gotoWorkTime = convertTime(9,0,0);
      commute.leaveWorkTime = convertTime(17,0,0);
      commute.desiredCommute = 30;
      getAverageCommute(commute);
    debugger

    commuteFactory.createCommute(commute, function(data) {
      that.commutes = data;
      that.commute = {};
    });
  }
});


