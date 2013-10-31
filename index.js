var server = require('./server.js');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handlers = {
    'start':requestHandlers.start,
    '':requestHandlers.start,
    'upload':requestHandlers.upload
};

server.start(router.router, handlers);