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

    request('http://www.fhpmodels.reading.ac.uk/800px-Lleyn_sheep1.jpg')
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
    /*
     request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));
     sharp('doodle.png').resize(300).toFile(doodle2.png, function (err) {

        if (err) {
          throw err;
          res.send(400, {
               msg: '!!!'
          });
          next();
          return;
        }
        var pic = new Ascii('doodle2.png');
        pic.convert(function(err, result) {
            console.log(result.replace(/#/g, ' '));
           res.send({
                title: 'doodle',
                img: result.replace(/#/g, ' '); 
             });
             next();
        });
      });
     **/
    /*
    var transformer = sharp()
        .resize(300)
        .on('error', function(err) {
            console.log(err);
            res.send(400, {
                response: 'hello ' + req.params.name
            });
            next();
        });
    */
    // Read image data from readableStream, resize and write image data to writableStream
    /*
    request('https://www.google.com/images/srpr/logo3w.png')
        .pipe(transformer)
        .pipe(fs.createWriteStream('doodle.png'))
        .on('error', function (err) {
            res.send('500', {
                error: err
            });
        })
        .on('end', function () {
        
            res.send({
                response: 'hello ' + req.params.name
            });
            next();
        });
    */   
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});
