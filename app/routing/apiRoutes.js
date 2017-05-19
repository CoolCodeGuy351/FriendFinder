var friendsData = require("../data/friends.js");
var path = require('path');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
  res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      res.redirect("/survey");
      // return friendsData[0];
  });

  var match;

  // for(var i = 0; i < friendsData.length ; i++){
  // console.log(friendsData)
  // }
  return friendsData[0];


};


