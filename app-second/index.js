"use strict";

// set number of server port
const PORT = 5002;

// run express server
const express = require("express");
const app = express();
const port = parseInt(PORT);
app.listen(port);
console.log("Server on port: " + port);

// send page to client
app.get("/page", function(request, response) {
    console.log("URL: " + request.url);
    response.sendFile(__dirname + "/" + "page.html");
});
