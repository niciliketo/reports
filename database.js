//params = require("./params");
var mysql = require('mysql');
var client = mysql.createClient({
  user: 'root',
  password: 'hyper10n',
});

exports.runQuery = function(sql, callback){
// If no callback is provided, any errors will be emitted as `'error'`
// events by the client
console.log("running:" + sql);
client.query('USE '+params.DATABASE);
r = client.query(
  sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    //console.log(results);
    //console.log(fields);
    //client.end();
		callback(fields, results);
  });


}
/*
client.query('CREATE DATABASE '+params.DATABASE, function(err) {
  if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
    throw err;
  }
});
*/


/*
client.query(
  'CREATE TEMPORARY TABLE '+params.TABLE+
  '(id INT(11) AUTO_INCREMENT, '+
  'title VARCHAR(255), '+
  'text TEXT, '+
  'created DATETIME, '+
  'PRIMARY KEY (id))'
);
*/
/*
client.query(
  'INSERT INTO '+params.TABLE+' '+
  'SET title = ?, text = ?, created = ?',
  ['super cool', 'this is a nice text', '2010-08-16 10:00:23']
);

var query = client.query(
  'INSERT INTO '+params.TABLE+' '+
  'SET title = ?, text = ?, created = ?',
  ['another entry', 'because 2 entries make a better test', '2010-08-16 12:42:15']
);
*/
//  }
//);
