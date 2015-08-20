var restify = require('restify');
var sharp = require('sharp');
var request = require('request');
var Ascii = require('ascii');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};



function respond(req, res, next) {
    console.log(req);
    /*
    var transformer = sharp()
        .resize(300)
        .on('error', function(err) {
            console.log(err);
        });
        // Read image data from readableStream, resize and write image data to writableStream
        request('https://www.google.com/images/srpr/logo3w.png').pipe(transformer).pipe(writableStream);
     */
    res.send({
        response: 'hello ' + req.params.name
    });
    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});
