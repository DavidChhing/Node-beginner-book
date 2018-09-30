var server = require('./server');
var router = require('./routed');

server.start(router.route);
