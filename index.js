var express = require('express'); //Standard
var app = express(); //Standard
var port = process.env.PORT || 3000; //Standard

app.use(express.static(__dirname + '/app/'));//UPDATE FOR CORRECT DIRECTORY IF NEEDED!!!



app.listen(port, function() { //Standard
  console.log('I am listening on port 3000!'); //Standard
});