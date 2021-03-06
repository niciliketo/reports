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
  db.runQuery(sqltxt, function(err, fields, results){
  if (err == null) {
  var resultsTable=googlify(fields, results);
  console.log((resultsTable));
  }
  else { var resultsTable=null;console.log("2:"+err);}
	var html = render.resultsTemplate({
		results: results,
		err: err,
		fields: fields,
		resultsTable: (resultsTable),
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
function googlify(fields,sqlResults)
{
	//console.log(stringify(fields));
	//console.log("------------");
	var r= new Array;
	var	rStr = "[";
	for (var i in sqlResults)
	{
		r[i]= new Array;
		rStr += "[";
		var k=0;
		for (var j in sqlResults[i])
	{
		if (fields[j]["fieldType"] == "246")
			{	r[i][k] = parseFloat(sqlResults[i][j]);
				rStr += sqlResults[i][j];
			}
		else if (fields[j]["fieldType"] == "12") {
				r[i][k] = sqlResults[i][j].toString();
				rStr += "new Date('" + sqlResults[i][j] + "')";
		}
		else {
				r[i][k] = sqlResults[i][j].toString();
				rStr += "'" + sqlResults[i][j] + "'";
		}
		if (k != Object.keys(fields).length-1) {rStr+= ","}
		k ++;
	}

	rStr += "]";
	if (i != sqlResults.length-1) {rStr+= ","}
	}
	rStr += "]";
	//return r;
	return rStr;
}
// implement JSON.stringify serialization
function stringify (obj)
{
    var t = typeof (obj);
    if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"k'+obj+'"';
        return String(obj);
    }
    else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n]; t = typeof(v);
            d = new Date(v);
            nd = new Date();;
            if(v && v.getUTCDay) { t  = "date"}
            //if (d != "Invalid Date" && d!=new Date(0)) { t  = "date"}
            //console.log(t);

            if (t == "string") {v = '"'+v+'"';}
            else if (t == "date")  {v = 'new Date("'+v+'")';}
            else if (t == "object" && v !== null) v = stringify(v);
							json.push((arr ? "" : '"' + n + '":') + String(v));
				}
				return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	}
exports.start = start;
exports.query = query;
exports.upload = upload;
