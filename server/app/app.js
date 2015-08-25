var restify = require('restify');
var sharp = require('sharp');
var request = require('request');
var Ascii = require('ascii');
var fs = require('fs');
var Guid = require('guid');


function respond(req, res, next) {
    
    console.log(req.body);
    
    var imgURL = 'https://avatars1.githubusercontent.com/u/174627?v=3&s=460';
    
    if (req.hasOwnProperty('body') && req.body.hasOwnProperty('url')) {
        imgURL = req.body.url;
    }

    var transformer = sharp()
        .resize(300)
        .on('error', function(err) {
            console.log(err);
            res.send(500, {
                error: err
            });
            next();
        });

    var tmpFile = '/tmp/' + Guid.raw();

    request(imgURL)
        .pipe(transformer)
        .pipe(fs.createWriteStream(tmpFile))
        .on('close', function () {

            var pic = new Ascii(tmpFile);

            pic.convert(function(err, result) {
                
                fs.unlink(tmpFile, function () {
                    console.log('deleted:', tmpFile);
                });

                console.log('converted', imgURL);

                res.send({
                    url: imgURL,
                    img: result.replace(/#/g, ' ')
                });

                next();
            });
        });
}

var server = restify.createServer();

server.use(restify.bodyParser({ mapParams: false }));

server.head('/', respond);
server.get('/', respond);

server.post('/', function respondToUrl(req, res, next) {
    console.log(req.body);
    if (req.body.hasOwnProperty('url')) {
        return respond(req, res, next);
    }
    return res.send(400, {
        err: 'malformed request'
    })
});


server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});
