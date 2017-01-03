var express = require("express");


var app = express();


app.get("/whoami", function(req, res) {
    var ip = req.ip.match(/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/)[0];
    var lang = req.header("Accept-Language").split(',');
    var ua = req.header("User-Agent").match(/\(.+?\)/);
    console.log(ip, lang, ua);

    response = {
        "ip-address": ip,
        "language": lang.length ? lang[0] : "??",
        "software": ua.length ? ua[0].slice(1, ua[0].length-1) : "null"
    };

    res.send(response);
});

app.listen(process.env.PORT || 8000, function() {
    console.log("Listening on port " + (process.env.PORT || 8000));
});
