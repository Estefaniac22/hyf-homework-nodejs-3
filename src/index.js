var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World!");

});

app.get('/users', function(req,res){

    res.send("<ul><li> User 1 </li> <li>User 2</li> </ul>");

});

var server = app.listen(3000, function(){
    console.log("Server listening on port 3000");
})