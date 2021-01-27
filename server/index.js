var express    = require('express');        // call express
var app        = express();                 // define our app using express
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'capsule',
});

router.post('/capsule/', function(req, res) {
  //what we want to send back to the user 
  //save our user 
  console.log("received capsule message");
  res.send({status: "succcess"})

  let name = req.body.name;
  let lon = req.body.lon;
  let lat = req.body.lat;

  //SAVE TO MYSQL ..... 

  connection.query('INSERT INTO capsules (strName, intLon, intLat) VALUES ("'+name+'", '+lon+', '+lat+')', function (error, results, fields) {
    console.log(error);

    console.log(results);
  });
})

router.get('/capsule/:id', function(req, res) {

    let capsuleID = req.params.id;

    connection.query('SELECT * FROM capsules WHERE id='+capsuleID, function (error, results, fields){

      console.log(results);
      res.send(JSON.stringify(results[0]))
    });
})

router.post("/nearby/", function(req, res){

  let lon = req.body.lon;
  let lat = req.body.lat;


  connection.query('SELECT id, strName, ( 3959 * acos( cos( radians('+lat+') ) * cos( radians( intLat ) ) * cos( radians( intLon ) - radians('+lon+') ) + sin( radians('+lat+') ) * sin(radians(intLat)) ) ) AS distance FROM capsules HAVING distance < 50 ORDER BY distance', function (error, results, fields) {

   

    res.send(JSON.stringify(results))
  });

})

// SELECT id, ( 3959 * acos( cos( radians(49.289508) ) * cos( radians( intLat ) ) 
// * cos( radians( intLon ) - radians(-123.137062) ) + sin( radians(49.289508) ) * sin(radians(intLat)) ) ) AS distance 
// FROM capsules
// HAVING distance < 50
// ORDER BY distance

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);