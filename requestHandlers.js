var start = function(res)
{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Request handler for "start" path');
    res.end();
}

var upload = function(res)
{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Request handler for "upload" path');
    res.end();
}

exports.start = start;
exports.upload = upload;