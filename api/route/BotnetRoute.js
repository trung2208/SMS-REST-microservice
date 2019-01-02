/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
module.exports = function (app) {
    var controller = require('../controller/BotnetController');

    app.route('/botnet')
            .post(controller.listed);
    app.route('/botnet/push').post(controller.collectData);
    app.route('/botnet/devices').get(controller.listed);
    app.route('/botnet/tokenGen').post(controller.generateToken);
};