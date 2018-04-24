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

 
 


module.exports = statRoutes;