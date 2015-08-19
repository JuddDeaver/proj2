  // notice how we're putting $http into the factory!
  commutes_app.factory('commuteFactory', function($http) {
    var factory = {};
    var commutes = [];

    factory.createCommute = function(commute, callback) {
      $http.post('commute', commute).success(function(output) {
          callback(output);
        })
      }
    return factory;
  });