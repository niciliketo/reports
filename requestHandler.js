var db = require("./database");
var render = require("./render");
function start(request, response) {

  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
		var html = render.homepageTemplate();
		response.write(html);
		response.end();
  }


function query(request, response) {
var fields, results, err;
  console.log("Request handler 'query' was called.");

  sqltxt = require('querystring').parse(request.url, true)["/query?sql"]
  console.log(sqltxt);
  response.writeHead(200, {"Content-Type": "text/html"});
  db.runQuery(sqltxt, function(fields, results, err){
  var resultsTable=googlify(results);
	var html = render.resultsTemplate({
		results: results,
		err: err,
		fields: fields,
		resultsTable: resultsTable,
		title: 'Results'
		});
	response.write(html);
  	response.end();
  });

}
function upload(request, response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello Upload");
  response.end();
}
function googlify(sqlResults)
{
	var r= new Array;
	for (var i in sqlResults)
	{
		r[i]= new Array;
		var k=0;
		for (var j in sqlResults[i])
	{
		{r[i][k] = sqlResults[i][j].toString();}
		k ++;
	}
	}

	return r;
}
exports.start = start;
exports.query = query;
exports.upload = upload;