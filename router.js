var router = function(path, handlers, res)
{
    path = path.substr(1);
    if (typeof handlers[path] === 'function' )
    {
        handlers[path](res);
    }
    else
    {
        console.log('No request handler for request ' + path);
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('Error 404 - Page not found');
        res.end();
    }
}

exports.router = router;