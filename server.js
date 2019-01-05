var fs = require("fs");
var express = require("express");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(8085, function () {
    console.log("Example app listening at 8085")
 });
 app.route('/msg').get((req, res) => {
    var contents = fs.readFileSync('output.txt', 'utf8');
    res.send('{"message":"'+contents+'"}');
});