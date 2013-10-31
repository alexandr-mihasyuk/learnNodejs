var http = require('http');
var url = require('url');

function start(router, handlers)
{
    http.createServer(function(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log('Request received! Pathname: ' + pathname);
        router(pathname, handlers, res);
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('hello world');
        res.end();
    }).listen('8081');


}
exports.start = start;