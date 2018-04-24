var express = require('express');
var app = express();
var statRoutes = express.Router();

// Require Item model in our routes module
var Stat = require('../models/Stat');

// Defined store route
statRoutes.route('/add').post(function(req, res) {
  var stat = new Stat(req.body);
  stat.save()
    .then(item => {
      res.status(200).json({
        'stat': 'Stat added successfully'
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
statRoutes.route('/stats').get(function(req, res) {
  Stat.find(function(err, stats) {
    if (err) {
      console.log(err + "the stat routes!!!");
    } else {
      console.log(stats + "the stat routes!!!");
     // res.json(stats);
    }
  });
});

// Defined edit route
statRoutes.route('/edit/:id').get(function(req, res) {
  var id = req.params.id;
  Stat.findById(id, function(err, stat) {
    res.json(stat);
  });
});

//  Defined update route
statRoutes.route('/update/:id').post(function(req, res) {
  Stat.findById(req.params.id, function(err, stat) {
    if (!stat)
      return next(new Error('Could not load Document'));
    else {
      stat.name = req.body.name;
      stat.price = req.body.price;

      stat.save().then(stat => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
statRoutes.route('/delete/:id').get(function(req, res) {
  Stat.findByIdAndRemove({
    _id: req.params.id
  }, function(err, stat) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = statRoutes;