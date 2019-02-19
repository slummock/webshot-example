webshot = require('webshot');
request = require('request');
fs = require('fs');

var readurl = "https://google.com/";
var filepath = './temp.png'
var options = {
    captureSelector: ".#lga"
};

webshot(readurl, filepath, options, function (err) {
});