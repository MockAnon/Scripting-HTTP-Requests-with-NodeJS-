


module.exports = function getHTML (options, callback) {

    var https = require('https');
    /* Your code here */


  https.get(options, function (response) {

    let newData = '';

    response.setEncoding('utf8');


    response.on('data', function (data) {
      newData = data;

    });

      response.on('end', function() {
      callback(newData);
    });

  });

};
