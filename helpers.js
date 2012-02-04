var fs = require('fs');
var jade = require('jade');

var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};


var jadeHomepagetemplate = fs.readFileSync('./pages/home.jade');

exports.homepageTemplate = jade.compile(jadeHomepagetemplate.toString('utf8'));
