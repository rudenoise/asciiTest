(function () {
  'use strict';
  var Ascii = require('ascii');
  var sharp = require('sharp');
  sharp('chris.png').resize(640, null).toFile('output.png', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    var pic = new Ascii('output.png');
    pic.convert(function(err, result) {
        console.log(result.replace(/#/g, ' '));
    });
  });
}());
