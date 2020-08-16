const config = require("config");
 
const express = require("express");
const expressSettings = config.get("expressSettings");
const app = express();
 
app.listen(expressSettings.PORT, function() {
    console.log(`Express server listening on port ${expressSettings.PORT}...`);
});
 
app.get("/", function(request, response){
    response.send("<h1>mainPage</h1>");
});