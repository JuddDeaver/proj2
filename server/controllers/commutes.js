var mongoose = require('mongoose');
var commute = mongoose.model('commute');

module.exports = (function() {
 return {
    create: function(req, res) {
      var new_commute = new commute({
        homeAddress: req.body.homeAddress,
        workAddress: req.body.workAddress,
        gotoWorkTime: req.body.gotoWorkTime,
        leaveWorkTime: req.body.leaveWorkTime,
        desiredCommute: req.body.desiredCommute,
        createdAt: req.body.createdAt
      });
      new_commute.save(
        function(err) {
        if(err) {
          console.log('something went wrong', err);
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a commute!');
          commute.find({},function(err,data){
            res.json(data);
          })
        }
      })
      new_commute = {};
    },

  }
})();
