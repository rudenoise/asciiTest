var restify = require('restify');

var client = restify.createJsonClient({
    url: 'http://dockerhost',
    version: '*'
});

console.log('GET /');
client.get('/', function (err, req, res, obj) {
    if (err) {
        console.error(err);
        return;
    };
    console.log('%j', obj);
});

egPOST = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tugboat_MS_HEMIKSEM.jpg/713px-Tugboat_MS_HEMIKSEM.jpg'
};
console.log('POST /', egPOST);
client.post('/', egPOST, function (err, req, res, obj) {
    if (err) {
        console.error(err);
        return;
    };
    console.log('%j', obj);
});
