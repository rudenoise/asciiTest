(function () {
  'use strict';
  var Ascii = require('ascii');
  var sharp = require('sharp');
  sharp('space.jpg').resize(400, null).toFile('output.jpg', function(err) {
    if (err) {
      throw err;
      return;
    } else {
      var pic = new Ascii('output.jpg');
      pic.convert(function(err, result) {
          console.log(result.replace(/\#/g, ' '));
      });
    }
  });
}());
