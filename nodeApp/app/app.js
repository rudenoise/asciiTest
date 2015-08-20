var restify = require('restify');
var sharp = require('sharp');
var request = require('request');
var Ascii = require('ascii');
var fs = require('fs');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};



function respond(req, res, next) {
    
    console.log('request made');
    
    var transformer = sharp()
        .resize(300)
        .on('error', function(err) {
            console.log(err);
            res.send(400, {
                response: 'hello ' + req.params.name
            });
            next();
        });

    //request('http://www.fhpmodels.reading.ac.uk/800px-Lleyn_sheep1.jpg')
    request('https://avatars1.githubusercontent.com/u/174627?v=3&s=460')
        .pipe(transformer)
        .pipe(fs.createWriteStream('sheep.jpg'))
        .on('close', function () {
            console.log(arguments);
            var pic = new Ascii('sheep.jpg');
            pic.convert(function(err, result) {
                console.log(result.replace(/#/g, ' '));
                res.send({
                    title: 'sheep',
                    img: result.replace(/#/g, ' ')
                });
                next();
            });
        });
}

var server = restify.createServer();
server.get('/', respond);
server.head('/', respond);

server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});
