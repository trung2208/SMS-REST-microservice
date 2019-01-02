/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Botnet = require('../model/BotnetModel');
function handleError(err){
    console.log(err);
    return;
}
exports.create = function (model, cb) {
    var res = {
        result: false
    };
    Botnet.create(model, function (err, awesome_instance) {
        if (err) {
            return handleError(err);
        }
        // lưu!
        res.result = true;
        res.model = awesome_instance;
        console.log("result: " + JSON.stringify(res));
        cb(res);
    });
};
exports.save = function (model) {
    var work = new Botnet(model);
    work.save(function (err) {
        if (err) {
            return handleError(err);
        }
    });
};
exports.listedDevices = function (cb) {
    Botnet.find({}, function (err, devices) {
        if (err) {
            return handleError(err);
        }
        cb(devices);
    });
};
exports.findDevice = function (token, cb) {
    Botnet.find({"token": token}, function (err, devices) {
        if (err) {
            return handleError(err);
        }
        cb(devices);
    });
};

