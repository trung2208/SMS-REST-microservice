/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express'),
        app = express(),
        port = process.env.PORT || 800;
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var dbUtil = require('./api/service/DbUtilities');
dbUtil.init();

//create array global
global.tokenList=[];

var routes = require('./api/route/AuthRoute'); //importing route
var phishingRoute = require('./api/route/PhishingRoute');
phishingRoute(app);
var BotnetRoutes = require('./api/route/BotnetRoute'); //importing route
BotnetRoutes(app);
routes(app); //register the route
app.use('/fbPhising_files', express.static('./api/views/pages/fbphishing/fbPhising_files'));

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
