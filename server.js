//importing node framework
var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function (req, res) {
 res.send('Astro Assesment : assignment 2. DONE!');
});

var server = app.listen(3000, function(){
  console.log('Server listening at port 3000');
});

exports.closeServer = function(){
  server.close();
};
