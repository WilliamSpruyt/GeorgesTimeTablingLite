const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');
statRoutes = require('./expressRouter/statRoutes');
const app = express();

mongoURI = "mongodb://localhost:27017/";
app.use(bodyParser.json());


 
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || mongoURI).then(
  (client) => {
    console.log('Database is connected');

  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);


app.use(cors());
// Create link to Angular build directory
app.get('/products/:id', function(req, res, next) {
  res.json({
    msg: 'This is CORS-enabled for all origins!'
  });
});


/*var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('/*', function(req, res) {
  console.log('the dist bit ');
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});*/


let db = mongoose.connection;


const port = process.env.PORT || 8080;

app.use('/stats', statRoutes);
 
 
const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});