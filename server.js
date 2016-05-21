var express = require("express");
var app = express();
var useragent = require("useragent");


//Set up port for production vs. development
var port = process.env.PORT || 3000;

//Set API reference point
app.get("/api/whoami", function(request, response) {
    
    //Get the OS
    var agent = useragent.parse(request.headers["user-agent"]);
    agent = agent.os.toString();
    
    //Get languages
    var language = request.acceptsLanguages()[0];
    
    //Get IP Address
    var ipaddress = request.ip;

    //Combine all three into an object
    var display = {
        "IP Address": ipaddress,
        "Language": language,
        "Operating System": agent  
    }
    
    //Send the object (response.sent() automatically converts to JSON)
    response.send(display);
    
});


app.listen(port);