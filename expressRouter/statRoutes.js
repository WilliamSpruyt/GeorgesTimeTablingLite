var express = require('express');
var app = express();
var statRoutes = express.Router();

// Require Item model in our routes module
var Stat = require('../models/Stat');

// Defined store route
statRoutes.route('/add').post(function(req, res) {
  var stat = new Stat(req.body);
  stat.save()
    .then(item => {console.log('Stat added successfully');
      res.status(200).json({
        'stat': 'Stat added successfully'
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
statRoutes.route('/').get(function(req, res) {


  Stat.find(function(err, Stat) {
    if (err) {
      console.log(err + "the stat routes!!!");
    } else {
      console.log(stats + "the stat routes!!!");
      res.json(stats);
    }
  });
});
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
  if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host".
  console.log('%s %s is a %s.', person.name.first, person.name.last,
    person.occupation);
});


module.exports = statRoutes;