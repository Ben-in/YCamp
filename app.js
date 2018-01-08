var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

 var campgrounds = [
        {name: "salmon Creek", image: "https://media2.picsearch.com/is?UagZfGOpsqZtek56vVJTWo4qYXpIu59Go5acUi0XVWs&height=227"},
        {name: "Baffle Island", image: "https://media5.picsearch.com/is?6Z2hAtCucIw7Xtqcr6f3E8vMV1gzBOSh4SZHclRRexE&height=253"},
        {name: "Punisher zone", image: "https://media4.picsearch.com/is?SKSAmBMjp9CVOsbw_t0nmhqPhpq9DHwl4F4HCc6SF3E&height=258"},
        {name: "salmon Creek", image: "https://media2.picsearch.com/is?UagZfGOpsqZtek56vVJTWo4qYXpIu59Go5acUi0XVWs&height=227"},
        {name: "Baffle Island", image: "https://media5.picsearch.com/is?6Z2hAtCucIw7Xtqcr6f3E8vMV1gzBOSh4SZHclRRexE&height=253"},
        {name: "Punisher zone", image: "https://media4.picsearch.com/is?SKSAmBMjp9CVOsbw_t0nmhqPhpq9DHwl4F4HCc6SF3E&height=258"},
        {name: "salmon Creek", image: "https://media2.picsearch.com/is?UagZfGOpsqZtek56vVJTWo4qYXpIu59Go5acUi0XVWs&height=227"},
        {name: "Baffle Island", image: "https://media5.picsearch.com/is?6Z2hAtCucIw7Xtqcr6f3E8vMV1gzBOSh4SZHclRRexE&height=253"},
        {name: "Punisher zone", image: "https://media4.picsearch.com/is?SKSAmBMjp9CVOsbw_t0nmhqPhpq9DHwl4F4HCc6SF3E&height=258"}
        ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
   res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("THe Yelp Camp Server Has Started!");
});