var express    = require('express');        // call express
var app        = express();                 // define our app using express
var cors = require('cors');
var bodyParser = require('body-parser');

//include mongoDB plugins 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/users/', function(req, res) {
    //what we want to send back to the user 
    //save our user 
    let username = req.body.emailAddress;
    let password = req.body.password;

    //save to database.... 
    //mongo...
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("capsule");
        var myobj = { username: username, password: password };
        dbo.collection("users").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        //   res.json({ message: 'user saved successfully' });   
          db.close();
        });
      }); 
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);