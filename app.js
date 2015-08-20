var restify = require('restify');

function respond(req, res, next) {
    console.log(req);
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});
