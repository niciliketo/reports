console.log("starting");
params = require("./params");
fs = require('fs');

var render = require("./render");
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/query"] = requestHandlers.query;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
