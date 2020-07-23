var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + "/assets")); //__dirname gets the current directory name

app.get("/", function(req,res){
    res.render("circles");
});


var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, function(){
    console.log("Patatap clone server started");
});