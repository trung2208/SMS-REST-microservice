/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global __dirname */

'use strict';
module.exports = function (app) {
    var controller = require('../controller/PhishingController');

    app.route('/')
            .get(controller.homepage);

};