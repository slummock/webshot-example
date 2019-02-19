webshot = require('webshot');
request = require('request');
fs = require('fs');

var readurl = "https://github.com/slummock/webshot-example";
var filepath = './output/temp.png'
var options = {
    captureSelector: ".repository-content ",
    
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
};

webshot(readurl, filepath, options, function (err) {
    console.log(err);
});