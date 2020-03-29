var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle["/home"] = handler.home;
handle["/addContact"] = handler.addContact;

server.startserver(router.route,handle);