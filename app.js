var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  var logger = require('morgan');
  //app.use(logger('dev'));
  app.use(logger('combined'));
}

var message1 = "Hello World!";
var message2 = {"message": "Good morning"};

app.get('/', function(req, res) {
  
  console.log("Logging accept headers:", req.accepts());
  //console.log(req.path, req.body);

  if ( req.accepts("*/*")) {
    res.status(200).json(message1);
   }
   else if (req.accepts(["json"])) {
    res.status(200).send(message2);
   }
   else {
    res.status(200).json(message1);
   }  
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
