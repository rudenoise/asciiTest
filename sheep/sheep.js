(function () {
  'use strict';
  var Ascii = require('ascii');
  var sharp = require('sharp');
  sharp('sheep.png').resize(300, null).toFile('output.png', function(err) {
    if (err) {
      throw err;
      return;
    }
    var pic = new Ascii('output.png');
    pic.convert(function(err, result) {
        console.log(result.replace(/#/g, ' '));
    });
  });
}());
