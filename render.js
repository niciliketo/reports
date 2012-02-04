var jade = require('jade');


var jadeHomepageTemplate = fs.readFileSync('./pages/home.jade');
var jadeResultsTemplate = fs.readFileSync('./pages/results.jade');

exports.homepageTemplate = jade.compile(jadeHomepageTemplate.toString('utf8'));

exports.resultsTemplate = jade.compile(jadeResultsTemplate.toString('utf8'));



//var res = db.runQuery(q);
