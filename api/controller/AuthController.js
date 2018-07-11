/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
// init serial comm in here



exports.hello = function (req, res) {
    res.json({"word": "hello from server!"});
};
 
exports.authorized = function (req, res) {
    console.log("authorized!");
};
exports.getAuthStatus = function (req, res) {
    console.log("CheckAuth!");

};