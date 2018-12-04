var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world");
});

app.get("/name/:a", function (req, res) {
    var name = req.params.a;
    res.send("<h1>Hello " + name + "</h1>");
});
app.get("/google/:search", function (req, res) {
    var search = req.params.search
    res.redirect("http://google.com/search?q=" + search);
});
app.get("/*", function (req, res) {
    res.send("404");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

